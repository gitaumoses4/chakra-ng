import { Directive, Input } from "@angular/core";
import { BaseStyledDirective, ChakraStyles } from "@chakra-ng/angular";
import { BehaviorSubject } from "rxjs";

@Directive({ selector: "[chakra]" })
export class ChakraDirective extends BaseStyledDirective {
  @Input() public chakra: ChakraStyles = {};

  public override readonly $baseStyles = new BehaviorSubject<ChakraStyles>({});

  public override ngOnChanges() {
    super.ngOnChanges();
    this.$baseStyles.next(this.chakra);
  }
}
