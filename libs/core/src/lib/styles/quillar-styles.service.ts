import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Interpolation, SerializedStyles, serializeStyles } from "@emotion/serialize";
import { DOCUMENT } from "@angular/common";
import { QuillarCacheService } from "./quillar-cache.service";
import { ThemeService } from "../config";
import { registerStyles } from "@emotion/utils";

type Styles = Array<Interpolation<any> | TemplateStringsArray>;

@Injectable()
export class QuillarStylesService {
  private renderer: Renderer2;

  constructor(
    private readonly cacheService: QuillarCacheService,
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
      let className = current.name;

      if (element) {
        const elementClassName = Array.from(element.classList).find((eClassName) => cache.registered[`${cache.key}-${eClassName}`]);
        if (elementClassName) {
          className = elementClassName;
        }
      } else {
        className = "global";
      }

      const key = `${cache.key}-${className}`;

      const node = this.document.querySelector(`style[data-emotion="${key}"]`);

      const sheet = new (cache.sheet.constructor as any)({
        key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: (cache.sheet as any).isSpeedy,
      });

      if (node) {
        node.innerHTML = element ? `.${className} { ${serialized.styles} }` : serialized.styles;
      } else {
        registerStyles(cache, current, false);
        cache.insert(element ? `.${serialized.name}` : "", serialized, sheet, false);

        if (element) {
          this.renderer.addClass(element, className);
        }
      }

      current = current.next;
    }
  }
}
