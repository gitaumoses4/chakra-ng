import { Directive, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { ChakraStyles } from "../types";
import { ChakraElement } from "./chakra.element";

@Directive()
export abstract class BaseChakraDirective extends ChakraElement implements OnInit, OnDestroy, OnChanges {
  ngOnInit() {
    this.applyChakraStyles();
    this.applyChakraClasses();
  }

  override getChakraStyles(): Observable<ChakraStyles> {
    return super.getChakraStyles().pipe(map((chakraStyles) => ({ ...this.getBaseStyles(), ...chakraStyles })));
  }

  public abstract getBaseStyles(): ChakraStyles;
}
