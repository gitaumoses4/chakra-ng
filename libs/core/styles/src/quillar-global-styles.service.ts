import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Interpolation, serializeStyles } from "@emotion/serialize";
import { DOCUMENT } from "@angular/common";
import { QuillarCacheService } from "./quillar-cache.service";
import { ThemeService } from "@quillar/config";

@Injectable()
export class QuillarGlobalStylesService {
  private renderer: Renderer2;
  constructor(
    private readonly cacheService: QuillarCacheService,
    private readonly rendererFactory: RendererFactory2,
    private readonly themeService: ThemeService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {
    this.renderer = this.rendererFactory.createRenderer(undefined, null);
  }

  private get cache() {
    return this.cacheService.getCache();
  }

  public attachStyles(styles: Interpolation<any> | TemplateStringsArray) {
    const serialized = serializeStyles([styles], undefined, this.themeService.getTheme());

    let serializedNames = serialized.name;
    let serializedStyles = serialized.styles;
    let next = serialized.next;

    while (next !== undefined) {
      serializedNames += " " + next.name;
      serializedStyles += " " + next.styles;
      next = next.next;
    }

    this.cache.insert(``, { name: serializedNames, styles: serializedStyles }, this.cache.sheet, Boolean(this.cache.compat));
  }
}
