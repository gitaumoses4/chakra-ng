import { Injectable } from "@angular/core";
import { QuillarStyles } from "../system";

@Injectable()
export class CacheService {
  private readonly cache: Map<string, Record<string, QuillarStyles>> = new Map();

  public insert(element: HTMLElement, stylesId: string, styles: QuillarStyles) {
    const elementId = element.getAttribute("data-quillar-id");
  }

  private generateElementId() {}
}
