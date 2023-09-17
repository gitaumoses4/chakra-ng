import { ThemeService } from "../theme";
import { Component, inject, Input, OnChanges, OnInit } from "@angular/core";
import { QuillarProps } from "./types";
import { BehaviorSubject, combineLatest } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";
import { BaseComponent } from "./base.component";
import { assignAfter } from "@chakra-ui/object-utils";

@Component({ template: "", standalone: true })
export abstract class BaseStyledComponent<ThemeComponent extends string = string> extends BaseComponent implements OnChanges, OnInit {
  public override readonly $styles = new BehaviorSubject<QuillarProps>({});

  private readonly themeService: ThemeService = inject(ThemeService);
  private readonly $componentProps = new BehaviorSubject<ThemingProps & Dict>({});
  private readonly $themeStyles = this.themeService.getStyleConfig(this.component(), this.$componentProps);

  @Input() public variant?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["variants"] : string
  >;
  @Input() public size?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["sizes"] : string
  >;
  @Input() public colorScheme?: ThemeTypings["colorSchemes"];
  @Input() public orientation?: "vertical" | "horizontal";
  @Input() public styleConfig?: Record<string, any>;

  public override ngOnInit() {
    super.ngOnInit();

    this.styleSubscription = combineLatest([this.$themeStyles, this.$customStyles]).subscribe(([themeStyles, customStyles]) => {
      this.$styles.next({ __css: assignAfter({}, themeStyles, this.defaultStyles()), sx: customStyles });
    });

    this.updateComponentProps();
  }

  public ngOnChanges() {
    this.updateComponentProps();
  }

  public updateComponentProps() {
    this.$componentProps.next(this);
  }

  public abstract component(): ThemeComponent;
}
