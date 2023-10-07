import { Component, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { ChakraStyles } from "../types";
import { ChakraElement } from "./chakra.element";

@Component({ template: "", standalone: true })
export abstract class BaseChakraComponent extends ChakraElement implements OnInit {
  ngOnInit() {
    if (this.applyStylesOnHost()) {
      this.applyChakraStyles();
      this.applyChakraClasses();
    }
  }

  override getChakraStyles(): Observable<ChakraStyles> {
    return super.getChakraStyles().pipe(map((chakraStyles) => ({ ...this.getDefaultStyles(), ...chakraStyles })));
  }

  public abstract getDefaultStyles(): ChakraStyles;

  public applyStylesOnHost(): boolean {
    return true;
  }
}
