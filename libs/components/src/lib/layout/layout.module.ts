import { NgModule } from "@angular/core";
import { AbsoluteCenterLayoutDirective, CenterLayoutDirective, CircleDirective, FlexLayoutDirective, SpaceDirective, SquareDirective } from "./";
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
  ],
  exports: [
    CenterLayoutDirective,
    AbsoluteCenterLayoutDirective,
    CircleDirective,
    FlexLayoutDirective,
    GridLayoutDirective,
    SpaceDirective,
    SquareDirective,
  ],
})
export class LayoutModule {}
