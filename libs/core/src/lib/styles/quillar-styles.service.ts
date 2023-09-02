import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Interpolation, SerializedStyles, serializeStyles } from "@emotion/serialize";
import { DOCUMENT } from "@angular/common";
import { QuillarCacheService } from "./quillar-cache.service";
import { ThemeService } from "../config";
import { insertStyles, registerStyles } from "@emotion/utils";

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
    const cache = this.cacheService.cache();
    const serialized = serializeStyles(styles, cache.registered, this.themeService.getTheme());

    const key = `${cache.key}-global`;

    const sheet = new (cache.sheet.constructor as any)({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: (cache.sheet as any).isSpeedy,
    });

    if (serialized.next !== undefined) {
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      const element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element as any;
      sheet.flush();
    }

    cache.insert(``, serialized, sheet, false);
  }

  public attachStyles(styles: Array<Interpolation<any> | TemplateStringsArray>, element: HTMLElement) {
    const cache = this.cacheService.cache();
    const serialized = serializeStyles(styles, cache.registered, this.themeService.getTheme());

    let current: SerializedStyles | undefined = serialized;

    while (current !== undefined) {
      const className = Array.from(element.classList).find((className) => cache.registered[`${cache.key}-${className}`]) || current.name;
      const key = `${cache.key}-${className}`;

      const node = this.document.querySelector(`style[data-emotion="${key}"]`);

      const sheet = new (cache.sheet.constructor as any)({
        key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: (cache.sheet as any).isSpeedy,
      });

      if (node) {
        node.innerHTML = `.${className} { ${serialized.styles} }`;
      } else {
        registerStyles(cache, current, false);
        cache.insert(`.${serialized.name}`, serialized, sheet, false);
        this.renderer.addClass(element, className);
      }

      current = current.next;
    }
  }
}
