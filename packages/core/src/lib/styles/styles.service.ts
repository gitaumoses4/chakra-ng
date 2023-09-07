import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Interpolation, SerializedStyles, serializeStyles } from "@emotion/serialize";
import { DOCUMENT } from "@angular/common";
import { CacheService } from "./cache.service";
import { insertStyles, registerStyles } from "@emotion/utils";
import { ThemeService } from "../theme";

type Styles = Array<Interpolation<any> | TemplateStringsArray>;

@Injectable()
export class StylesService {
  private renderer: Renderer2;

  constructor(
    private readonly cacheService: CacheService,
    private readonly rendererFactory: RendererFactory2,
    private readonly themeService: ThemeService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.renderer = this.rendererFactory.createRenderer(undefined, null);
  }

  public attachGlobalStyles(styles: Styles) {
    this.attachStyles(styles);
  }

  public attachStyles(styles: Array<Interpolation<any> | TemplateStringsArray>, element?: HTMLElement) {
    const cache = this.cacheService.cache();
    const serialized = serializeStyles(styles, cache.registered, this.themeService.getTheme());

    let current: SerializedStyles | undefined = serialized;

    while (current !== undefined) {
      const key = `${cache.key}-${element ? current.name : "global"}`;

      const node = this.document.querySelector(`style[data-emotion="${key}"]`);

      if (element) {
        registerStyles(cache, current, false);
        insertStyles(cache, serialized, false);

        Array.from(element.classList).forEach((eClassName) => {
          if (cache.registered[`${eClassName}`]) {
            this.renderer.removeClass(element, eClassName);
          }
        });
        this.renderer.addClass(element, key);
      } else {
        const sheet = new (cache.sheet.constructor as any)({
          key,
          nonce: cache.sheet.nonce,
          container: cache.sheet.container,
          speedy: (cache.sheet as any).isSpeedy,
        });

        cache.insert("", serialized, sheet, false);
      }

      if (element && !node) {
        this.renderer.addClass(element, key);
      }

      current = current.next;
    }
  }
}
