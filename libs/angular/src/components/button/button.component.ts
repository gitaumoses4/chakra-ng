import { ChangeDetectorRef, Component, Input, Optional, TemplateRef } from "@angular/core";
import { ChakraIcon } from "@chakra-ng/icons";
import { SystemProps, ThemingProps } from "@chakra-ui/styled-system";
import { BaseChakraStyledComponent, ChakraStyles } from "../../core";
import { ButtonGroupComponent } from "./button-group.component";
import { map, Observable } from "rxjs";
import { Dict } from "@chakra-ui/utils";

@Component({
  selector: "chakra-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent extends BaseChakraStyledComponent<"Button"> {
  /**
   * If `true` the button will show a spinner
   */
  @Input() public isLoading = false;

  /**
   * If `true` the button will be styled in its active state
   */
  @Input() public isActive = false;

  /**
   * If `true` the button will be disabled
   */
  @Input() public isDisabled = false;

  /**
   * The label to show in the button when `isLoading` is true.
   * If not ext is passed, it only shows the spinner
   */
  @Input() public loadingText?: string = undefined;

  /**
   * The type of the button
   */
  @Input() public type: "button" | "submit" | "reset" = "button";

  /**
   * If added, the button will show an icon before the button's label
   */
  @Input() public leftIcon?: ChakraIcon | string;

  /**
   * If added, the button will show an icon after the button's label
   */
  @Input() public rightIcon?: ChakraIcon | string;

  /**
   * The space between the button icon and label.
   */
  @Input() public iconSpacing: SystemProps["marginRight"] = "0.5rem";

  /**
   * Replace the spinner component when `isLoading` is set to `true`
   */
  @Input() public spinner?: TemplateRef<any>;

  /**
   * The spinner placement when `isLoading` is set to `true`
   */
  @Input() public spinnerPlacement: "start" | "end" = "start";

  constructor(private changeDetectorRef: ChangeDetectorRef, @Optional() private buttonGroup?: ButtonGroupComponent) {
    super();
  }

  override getDefaultStyles(): ChakraStyles {
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

  override component(): string {
    return "Button";
  }

  override applyStylesOnHost(): boolean {
    return false;
  }

  protected readonly undefined = undefined;
}
