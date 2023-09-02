import { Injectable } from "@angular/core";
import createEmotion from "@emotion/css/create-instance";

@Injectable({ providedIn: "root" })
export class QuillarCacheService {
  private emotion = createEmotion({ key: "quillar" });

  public cache() {
    return this.emotion.cache;
  }
}
