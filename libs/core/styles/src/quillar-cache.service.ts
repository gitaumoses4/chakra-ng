import { Injectable } from "@angular/core";
import createCache from "@emotion/cache";

@Injectable({ providedIn: "root" })
export class QuillarCacheService {
  private cache = createCache({ key: "quillar" });

  public getCache() {
    return this.cache;
  }
}
