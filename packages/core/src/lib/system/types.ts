import { ResponsiveValue, SystemProps, SystemStyleObject } from "@chakra-ui/styled-system";
import { CSSInterpolation } from "@emotion/css";

export type MaybeRequired<T> = {
  [P in keyof Required<T>]: Required<T>[P] | undefined;
};

export type QuillarStyleObject = SystemStyleObject;

export interface QuillarStyles extends SystemProps {
  /**
   * Used to truncate text at a specific number of lines
   */
  noOfLines?: ResponsiveValue<number>;
  /**
   * Used for internal css management
   * @private
   */
  __css?: QuillarStyleObject;
  /**
   * Used to pass theme-aware style props.
   * NB: This is the public API for user-land
   */
  sx?: QuillarStyleObject;
  /**
   * The emotion's css style object
   */
  css?: CSSInterpolation;
}
