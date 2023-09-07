import { inject, NgModule } from "@angular/core";
import { ThemeService } from "@quillar/core";
import { addons } from "@storybook/preview-api";
import { EVENTS } from "../constants";

@NgModule({})
export class QuillarStorybookModule {
  private channel = addons.getChannel();

  private themeService = inject(ThemeService);

  public constructor() {
    this.channel.on(EVENTS.TOGGLE_COLOR_MODE, this.onColorModeChanged.bind(this));
    this.channel.on(EVENTS.TOGGLE_DIRECTION, this.onDirectionChanged.bind(this));
  }

  private onColorModeChanged(colorMode: any) {
    this.themeService.setColorMode(colorMode);
  }

  private onDirectionChanged(direction: any) {
    this.themeService.setDirection(direction);
  }
}
