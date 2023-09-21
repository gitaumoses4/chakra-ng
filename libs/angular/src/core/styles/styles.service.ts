import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Interpolation, SerializedStyles, serializeStyles } from "@emotion/serialize";
import { DOCUMENT } from "@angular/common";
import { ThemeService } from "../theme";
import { combineLatest, Observable } from "rxjs";
import createEmotion from "@emotion/css/create-instance";
import { registerStyles } from "@emotion/utils";
import { ChakraStyles, toCSSObject } from "../system";

type Styles = Array<Interpolation<any> | TemplateStringsArray>;

@Injectable()
export class StylesService {
  private renderer: Renderer2;
  private emotion = createEmotion({ key: "chakra-ng" });

  constructor(
    private readonly rendererFactory: RendererFactory2,
    private readonly themeService: ThemeService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.renderer = this.rendererFactory.createRenderer(undefined, null);
  }

  public attachGlobalStyles(styles: Styles) {
    const cache = this.emotion.cache;
    const serialized = serializeStyles(styles, cache.registered, this.themeService.getTheme());

    let current: SerializedStyles | undefined = serialized;

    const key = `${cache.key}-global`;

    const sheet = new (cache.sheet.constructor as any)({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: (cache.sheet as any).isSpeedy,
    });

    while (current !== undefined) {
      cache.insert("", serialized, sheet, false);

      current = current.next;
    }
  }

  public attachStyles(styles: Array<Interpolation<any> | TemplateStringsArray>, element: HTMLElement, stylesId: string) {
    const cache = this.emotion.cache;
    const serialized = serializeStyles(styles, cache.registered, this.themeService.getTheme());

    const current: SerializedStyles | undefined = serialized;

    const key = `${cache.key}-${stylesId}`;

    const sheet = new (cache.sheet.constructor as any)({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: (cache.sheet as any).isSpeedy,
    });

    registerStyles(cache, serialized, false);

    Array.from(element.classList).forEach((eClassName) => {
      if (eClassName.split("-")[1] === stylesId) {
        element.classList.remove(eClassName);
      }
    });

    const className = `${key}-${serialized.name}`;

    if (cache.inserted[serialized.name] === undefined) {
      cache.insert(`.${className}`, serialized, sheet, true);
    }

    this.renderer.addClass(element, className);
  }

  public applyChakraStyles(id: string, $styles: Observable<ChakraStyles>, element: HTMLElement) {
    return combineLatest([this.themeService.$theme, $styles]).subscribe(([theme, styles]) => {
      this.attachStyles([toCSSObject(theme)(styles)], element, id);
    });
  }
}
