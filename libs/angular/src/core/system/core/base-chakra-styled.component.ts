import { Component } from "@angular/core";
import { BaseChakraStyledComponentDirective } from "./base-chakra-styled-component.directive";

@Component({ template: "", standalone: true })
export abstract class BaseChakraStyledComponent<ThemeComponent extends string> extends BaseChakraStyledComponentDirective<ThemeComponent> {
  abstract override component(): string;
}
