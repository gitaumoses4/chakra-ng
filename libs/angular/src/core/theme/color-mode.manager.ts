import { ColorMode, StorageType } from "./types";

export const STORAGE_KEY = "chakra-ui-color-mode";

type MaybeColorMode = ColorMode | undefined;

export interface ColorModeManager {
  getType(): StorageType;
  isSSR(): boolean;
  get(init?: ColorMode): MaybeColorMode;
  set(value: ColorMode | "system"): void;
}

export class LocalStorageManager implements ColorModeManager {
  get(init?: ColorMode): MaybeColorMode {
    if (!window) return init;
    let value: any;
    try {
      value = window.localStorage.getItem(STORAGE_KEY) || init;
    } catch (e) {
      // no op
    }

    return value || init;
  }

  getType(): StorageType {
    return "localStorage";
  }

  isSSR(): boolean {
    return false;
  }

  set(value: ColorMode | "system"): void {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      // no op
    }
  }
}

function parseCookie(cookie: string, key: string): MaybeColorMode {
  const match = cookie.match(new RegExp(`(^| )${key}=([^;]+)`));
  return match?.[2] as MaybeColorMode;
}

export class CookieStorageManager implements ColorModeManager {
  get(init?: ColorMode): MaybeColorMode {
    if (typeof document === "undefined") return init;
    const cookieString = document.cookie;
    return parseCookie(cookieString, STORAGE_KEY) || init;
  }

  getType(): StorageType {
    return "cookie";
  }

  isSSR(): boolean {
    return false;
  }

  set(value: ColorMode | "system"): void {
    document.cookie = `${STORAGE_KEY}=${value}; max-age=31536000; path=/`;
  }
}
