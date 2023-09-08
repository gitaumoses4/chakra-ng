import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Code, ExtFile, Languages, RouteFile } from "./types";
import { CommonModule } from "@angular/common";
import { ThemeService } from "@quillar/core";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-code",
  templateUrl: "./code.component.html",
})
export class CodeComponent implements AfterViewChecked, OnInit {
  @Input() code!: Code;

  @Input() service!: any;

  @Input() selector!: string;

  @Input() extFiles: ExtFile[] = [];

  @Input() routeFiles: RouteFile[] = [];

  @Input() hideToggleCode = false;

  @Input() hideCodeSandbox = false;

  @Input() hideStackBlitz = false;

  @ViewChild("codeElement") codeElement!: ElementRef;

  fullCodeVisible = false;

  lang: Languages = "basic";

  constructor(private themeService: ThemeService) {}

  ngAfterViewChecked() {
    (window as any).hljs.highlightAll();
  }

  ngOnInit() {
    this.lang = this.getInitialLang();
  }

  changeLang(lang: Languages) {
    this.lang = lang;
  }

  getInitialLang(): Languages {
    if (this.code) {
      return Object.keys(this.code)[0] as Languages;
    }
    return "basic";
  }

  async copyCode() {
    await navigator.clipboard.writeText(this.code[this.lang] || "");
  }

  getCode(lang: Languages = "basic") {
    if (this.code) {
      if (this.fullCodeVisible || this.hideToggleCode) {
        return this.code[lang];
      } else {
        return this.code["basic"];
      }
    }
    return undefined;
  }

  toggleCode() {
    this.fullCodeVisible = !this.fullCodeVisible;
    this.fullCodeVisible && (this.lang = "html");
    !this.fullCodeVisible && (this.lang = "basic");
  }
}
