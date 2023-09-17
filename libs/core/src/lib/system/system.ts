import { assignAfter } from "@chakra-ui/object-utils";
import { css, isStyleProp } from "@chakra-ui/styled-system";
import { filterUndefined, objectFilter } from "@chakra-ui/utils";
import { QuillarProps } from "./types";
import { CSSInterpolation } from "@emotion/css";

interface GetStyleObject {
  (theme: any): (props: QuillarProps) => CSSInterpolation;
}

export const toCSSObject: GetStyleObject =
  (theme) =>
  (props): CSSInterpolation => {
    const { css: cssProp, __css, sx, ...rest } = props;
    const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
    const finalStyles = assignAfter({}, __css, filterUndefined(styleProps), sx);
    const computedCSS = css(finalStyles)(theme);
    return (cssProp ? [computedCSS, cssProp] : computedCSS) as any;
  };

export function getStylesId(className: string) {
  return className;
  // let hash = 5381;
  // let index = className.length;
  //
  // while (index) {
  //   hash = (hash * 33) ^ className.charCodeAt(--index);
  // }
  //
  // return (hash >>> 0).toString(16);
}
