import { ResponsiveValue, SystemProps, SystemStyleObject } from "@chakra-ui/styled-system";
import { CSSInterpolation } from "@emotion/css";

export interface QuillarStyles extends SystemProps {
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: ResponsiveValue<number>;
  /**
   * Used for internal css management
   * @private
   */
  __css?: SystemStyleObject;
  /**
   * Used to pass theme-aware style props.
   * NB: This is the public API for user-land
   */
  sx?: SystemStyleObject;
  /**
   * The emotion's css style object
   */
  css?: CSSInterpolation;
}
