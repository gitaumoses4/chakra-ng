import { Injectable } from "@angular/core";
import { QuillarProps } from "../system";

@Injectable()
export class CacheService {
  private readonly cache: Map<string, Record<string, QuillarProps>> = new Map();

  public insert(element: HTMLElement, stylesId: string, styles: QuillarProps) {
    const elementId = element.getAttribute("data-quillar-id");
  }

  private generateElementId() {}
}
