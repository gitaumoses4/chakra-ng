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
import { SystemModule } from "../../core";

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
  ],
  imports: [SystemModule, CommonModule],
})
export class LayoutModule {}
