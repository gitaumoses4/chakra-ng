import { BaseChakraDirective, BaseChakraStyles, ChakraStyles } from "@chakra-ng/angular";
import { Directive, Input, OnChanges } from "@angular/core";
import { Observable } from "rxjs";

@Directive({ selector: "[chakraStyles]" })
export class ChakraStylesDirective extends BaseChakraDirective implements OnChanges {
  @Input() public chakraStyles: ChakraStyles | null = {};

  public override ngOnChanges() {
    super.ngOnChanges();
    this.$chakraStyles.next(this.chakraStyles || {});
  }

  getBaseStyles(): BaseChakraStyles {
    return {};
  }
}
