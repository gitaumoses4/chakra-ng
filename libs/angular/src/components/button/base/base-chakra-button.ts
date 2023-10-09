import { BaseChakraStyledComponent, ChakraStyles } from "../../../core";
import { Directive, Input, Optional } from "@angular/core";
import { ThemingProps } from "@chakra-ui/styled-system";
import { ButtonGroupComponent } from "../button-group.component";
import { map, Observable } from "rxjs";
import { Dict } from "@chakra-ui/utils";

@Directive()
export class BaseChakraButton extends BaseChakraStyledComponent<"Button"> {
  @Input() public isDisabled = false;
  @Input() public isActive = false;

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

  public override getDefaultStyles(): ChakraStyles {
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

  public override getThemeKey(): string {
    return "Button";
  }
}
