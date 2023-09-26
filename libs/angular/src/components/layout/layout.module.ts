import { NgModule } from "@angular/core";
import {
  AbsoluteCenterLayoutDirective,
  CenterLayoutDirective,
  CircleDirective,
  FlexLayoutDirective,
  SpacerDirective,
  SquareDirective,
  StackLayoutDirective,
} from "./index";
import { GridLayoutDirective } from "./grid-layout.directive";
import { StackDividerComponent } from "./stack/stack-divider.component";
import { CommonModule } from "@angular/common";
import { ChakraSystemModule } from "../../core";
import { AspectRatioDirective } from "./aspect-ratio.directive";

@NgModule({
  declarations: [
    CenterLayoutDirective,
    AbsoluteCenterLayoutDirective,
    CircleDirective,
    FlexLayoutDirective,
    GridLayoutDirective,
    SpacerDirective,
    SquareDirective,
    StackLayoutDirective,
    StackDividerComponent,
    AspectRatioDirective,
  ],
  exports: [
    CenterLayoutDirective,
    AbsoluteCenterLayoutDirective,
    CircleDirective,
    FlexLayoutDirective,
    GridLayoutDirective,
    SpacerDirective,
    SquareDirective,
    StackLayoutDirective,
    StackDividerComponent,
    AspectRatioDirective,
  ],
  imports: [ChakraSystemModule, CommonModule],
})
export class LayoutModule {}
