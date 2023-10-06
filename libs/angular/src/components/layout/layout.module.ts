import { NgModule } from "@angular/core";
import {
  AbsoluteCenterLayoutDirective,
  CenterLayoutDirective,
  CircleDirective,
  ContainerDirective,
  FlexLayoutDirective,
  GridItemDirective,
  SpacerDirective,
  SquareDirective,
  StackLayoutDirective,
} from "./index";
import { GridLayoutDirective } from "./grid-layout.directive";
import { StackDividerComponent } from "./stack/stack-divider.component";
import { CommonModule } from "@angular/common";
import { ChakraSystemModule } from "../../core";
import { AspectRatioDirective } from "./aspect-ratio.directive";
import { SimpleGridDirective } from "./simple-grid.directive";
import { WrapLayoutDirective } from "./wrap-layout.directive";

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
    ContainerDirective,
    GridItemDirective,
    SimpleGridDirective,
    WrapLayoutDirective,
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
    ContainerDirective,
    GridItemDirective,
    SimpleGridDirective,
    WrapLayoutDirective,
  ],
  imports: [ChakraSystemModule, CommonModule],
})
export class LayoutModule {}
