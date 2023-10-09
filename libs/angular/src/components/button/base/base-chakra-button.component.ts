import { Directive, Optional } from "@angular/core";
import { ButtonGroupComponent } from "../button-group.component";
import { map, Observable } from "rxjs";
import { ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { ChakraStyles } from "../../../core";
import { BaseChakraButton } from "./base-chakra-button";

@Directive()
export class BaseChakraButtonComponent extends BaseChakraButton {
  constructor(@Optional() private buttonGroup?: ButtonGroupComponent) {
    super();
  }

  override getComponentProps(): Observable<ThemingProps & Dict> {
    return super.getComponentProps().pipe(
      map((props) => ({
        ...props,
        isDisabled: this.buttonGroup?.isDisabled ?? this.isDisabled,
        variant: this.buttonGroup?.variant ?? this.variant,
        size: this.buttonGroup?.size ?? this.size,
        colorScheme: this.buttonGroup?.colorScheme ?? this.colorScheme,
      })),
    );
  }

  getBaseStyles(): ChakraStyles {
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
    };
  }
}
