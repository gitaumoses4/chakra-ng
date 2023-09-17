import { NgModule } from "@angular/core";
import {
  AbsoluteCenterLayoutDirective,
  CenterLayoutDirective,
  CircleDirective,
  FlexLayoutDirective,
  SpaceDirective,
  SquareDirective,
  StackLayoutDirective,
} from "./";
import { GridLayoutDirective } from "./grid-layout.directive";

@NgModule({
  declarations: [
    CenterLayoutDirective,
    AbsoluteCenterLayoutDirective,
    CircleDirective,
    FlexLayoutDirective,
    GridLayoutDirective,
    SpaceDirective,
    SquareDirective,
    StackLayoutDirective,
  ],
  exports: [
    CenterLayoutDirective,
    AbsoluteCenterLayoutDirective,
    CircleDirective,
    FlexLayoutDirective,
    GridLayoutDirective,
    SpaceDirective,
    SquareDirective,
    StackLayoutDirective,
  ],
})
export class LayoutModule {}
