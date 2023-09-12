import { ThemeService } from "../theme";
import { Component, inject, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { QuillarStyleObject, QuillarStyles } from "./types";
import { BehaviorSubject, combineLatest, Subscription } from "rxjs";
import { ResponsiveValue, ThemeTypings, ThemingProps } from "@chakra-ui/styled-system";
import { Dict } from "@chakra-ui/utils";

@Component({ template: "", standalone: true })
export abstract class BaseStyledComponent<ThemeComponent extends string = any> implements OnChanges, OnInit, OnDestroy {
  public readonly $styles = new BehaviorSubject<QuillarStyles>({});

  private readonly themeService: ThemeService = inject(ThemeService);
  private readonly $customStyles = new BehaviorSubject<QuillarStyles>({});
  private readonly $componentProps = new BehaviorSubject<ThemingProps & Dict>({});
  private readonly $themeStyles = this.themeService.getStyleConfig(this.component(), this.$componentProps);
  private readonly styleSubscriptions: Subscription[] = [];

  @Input() public variant?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["variants"] : string
  >;
  @Input() public size?: ResponsiveValue<
    ThemeComponent extends keyof ThemeTypings["components"] ? ThemeTypings["components"][ThemeComponent]["sizes"] : string
  >;
  @Input() public colorScheme?: ThemeTypings["colorSchemes"];
  @Input() public orientation?: "vertical" | "horizontal";
  @Input() public styleConfig?: Record<string, any>;

  /**
   * Used to pass theme-aware style props
   */
  @Input() public set qStyles(styles: QuillarStyles) {
    this.$customStyles.next(styles);
  }

  public ngOnInit() {
    this.styleSubscriptions.push(
      combineLatest([this.$themeStyles, this.$customStyles]).subscribe(([themeStyles, customStyles]) => {
        this.$styles.next({ ...customStyles, __css: this.buildStyles(themeStyles) });
      }),
    );
    this.updateComponentProps();
  }

  public ngOnChanges() {
    this.updateComponentProps();
  }

  public updateComponentProps() {
    this.$componentProps.next(this);
  }

  public ngOnDestroy() {
    this.styleSubscriptions.forEach((sub) => sub.unsubscribe());
  }

  public abstract buildStyles(themeStyles: QuillarStyleObject): QuillarStyleObject;

  public abstract component(): ThemeComponent;
}
