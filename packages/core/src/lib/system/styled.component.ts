import { ThemeService } from "../theme";
import { Component, inject, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { QuillarStyleObject, QuillarStyles } from "./types";
import { BehaviorSubject, combineLatest, Subscription } from "rxjs";
import { ResponsiveValue, ThemeTypings } from "@chakra-ui/styled-system";

@Component({ template: "", standalone: true })
export abstract class StyledComponent<ThemeComponent extends string = any> implements OnChanges, OnInit, OnDestroy {
  public $themeStyles = new BehaviorSubject<QuillarStyleObject>({});
  public $customStyles = new BehaviorSubject<QuillarStyles>({});
  public $styles = new BehaviorSubject<QuillarStyles>({});

  public readonly themeService: ThemeService = inject(ThemeService);

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

  public get styles() {
    return this.$styles.value;
  }

  public ngOnInit() {
    this.styleSubscriptions.push(
      combineLatest([this.$themeStyles, this.$customStyles]).subscribe(([themeStyles, customStyles]) => {
        this.$styles.next({ ...customStyles, __css: this.buildStyles(themeStyles) });
      }),
    );
    this.refreshStyles();
  }

  public ngOnChanges() {
    this.refreshStyles();
  }

  public refreshStyles() {
    this.$themeStyles.next(this.themeService.getStyleConfig(this.component(), this));
  }

  public ngOnDestroy() {
    this.styleSubscriptions.forEach((sub) => sub.unsubscribe());
  }

  public abstract buildStyles(themeStyles: QuillarStyleObject): QuillarStyleObject;

  public abstract component(): ThemeComponent;
}
