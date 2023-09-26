import { NgModule, SecurityContext } from "@angular/core";
import { AppComponent } from "./app.component";
import { Route, RouterModule } from "@angular/router";
import { ButtonModule, ChakraModule, ChakraSystemModule, IconModule, LayoutModule, TypographyModule } from "@chakra-ng/angular";
import theme from "../theme";
import { MarkdownModule } from "ngx-markdown";
import { BrowserModule } from "@angular/platform-browser";
import { SideNavComponent } from "../layout/side-nav/side-nav.component";
import { ChakraIconsModule } from "@chakra-ng/icons";

const routes: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "docs" },
  { path: "docs", loadChildren: () => import("../pages/docs/docs.module").then((m) => m.DocsModule) },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, SideNavComponent],
  imports: [
    BrowserModule,
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
