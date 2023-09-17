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
import { StackDividerComponent } from "./stack/stack-divider.component";
import { SystemModule } from "@quillar/core";
import { CommonModule } from "@angular/common";

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
    StackDividerComponent,
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
    StackDividerComponent,
  ],
  imports: [SystemModule, CommonModule],
})
export class LayoutModule {}
