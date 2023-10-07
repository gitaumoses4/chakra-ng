import { Component, Input, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { ChakraStyles } from "../types";
import { ChakraElement } from "./chakra.element";

@Component({ template: "", standalone: true })
export abstract class BaseChakraComponent extends ChakraElement implements OnInit {
  @Input() public className: string | string[] | Set<string> | { [klass: string]: any } = {};

  ngOnInit() {
    if (this.applyStylesOnHost()) {
      this.applyChakraStyles();
    }
  }

  override getChakraStyles(): Observable<ChakraStyles> {
    return super.getChakraStyles().pipe(map((chakraStyles) => ({ ...this.getBaseStyles(), ...chakraStyles })));
  }

  public abstract getBaseStyles(): ChakraStyles;

  public applyStylesOnHost(): boolean {
    return true;
  }
}
