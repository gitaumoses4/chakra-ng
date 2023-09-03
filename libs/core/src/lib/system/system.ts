import { assignAfter } from "@chakra-ui/object-utils";
import { css, isStyleProp } from "@chakra-ui/styled-system";
import { filterUndefined, objectFilter } from "@chakra-ui/utils";
import { QuillarInputs } from "./types";
import { CSSInterpolation } from "@emotion/css";

interface GetStyleObject {
  (theme: any): (props: QuillarInputs) => CSSInterpolation;
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
