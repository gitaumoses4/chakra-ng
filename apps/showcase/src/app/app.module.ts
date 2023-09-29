import { NgModule, SecurityContext } from "@angular/core";
import { AppComponent } from "./app.component";
import { Route, RouterModule } from "@angular/router";
import { ButtonModule, ChakraModule, ChakraSystemModule, IconModule, LayoutModule, TypographyModule } from "@chakra-ng/angular";
import theme from "../theme/theme";
import { MarkdownModule } from "ngx-markdown";
import { BrowserModule } from "@angular/platform-browser";
import { ChakraIconsModule } from "@chakra-ng/icons";
import { SideNavModule } from "../layout/side-nav/side-nav.module";

const routes: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "docs" },
  { path: "docs", loadChildren: () => import("../pages/docs/docs.module").then((m) => m.DocsModule) },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SideNavModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    ChakraSystemModule,
    ChakraIconsModule.register({}),
    ChakraModule.forRoot({ theme }),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
    LayoutModule,
    TypographyModule,
    IconModule,
  ],
  exports: [RouterModule, AppComponent],
})
export class AppModule {}
