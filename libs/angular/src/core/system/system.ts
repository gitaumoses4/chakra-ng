import { assignAfter } from "@chakra-ui/object-utils";
import { css, isStyleProp } from "@chakra-ui/styled-system";
import { Dict, filterUndefined, objectFilter, StringOrNumber } from "@chakra-ui/utils";
import { ChakraStyles } from "./types";
import { CSSInterpolation } from "@emotion/css";

interface GetStyleObject {
  (theme: any): (styles: ChakraStyles) => CSSInterpolation;
}

export const toCSSObject: GetStyleObject =
  (theme) =>
  (styles): CSSInterpolation => {
    const { css: cssProp, __css, sx, ...rest } = styles;
    const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
    const finalStyles = assignAfter({}, __css, filterUndefined(styleProps), sx);
    const computedCSS = css(finalStyles)(theme);
    return (cssProp ? [computedCSS, cssProp] : computedCSS) as any;
  };

export function getStylesId(className: string) {
  let hash = 5381;
  let index = className.length;

  while (index) {
    hash = (hash * 33) ^ className.charCodeAt(--index);
  }

  return (hash >>> 0).toString(16);
}

function getBreakpointValue<T extends StringOrNumber>(theme: Dict, value: T, fallback: any) {
  if (value == null) return value;
  const getValue = (val: T) => theme["__breakpoints"]?.asArray?.[val];
  return getValue(value) ?? getValue(fallback) ?? fallback;
}

function getTokenValue<T extends StringOrNumber>(theme: Dict, value: T, fallback: any) {
  if (value == null) return value;
  const getValue = (val: T) => theme["__cssMap"]?.[val]?.value;
  return getValue(value) ?? getValue(fallback) ?? fallback;
}

export function getToken<T extends StringOrNumber | StringOrNumber[]>(scale: string, token: T, fallback?: T): (theme: Dict) => T {
  const _token = Array.isArray(token) ? token : [token];
  const _fallback = Array.isArray(fallback) ? fallback : [fallback];
  return (theme: Dict<any>) => {
    const fallbackArr = _fallback.filter(Boolean) as T[];
    const result = _token.map((token, index) => {
      if (scale === "breakpoints") {
        return getBreakpointValue(theme, token, fallbackArr[index] ?? token);
      }
      const path = `${scale}.${token}`;
      return getTokenValue(theme, path, fallbackArr[index] ?? token);
    });
    return Array.isArray(token) ? result : result[0];
  };
}
