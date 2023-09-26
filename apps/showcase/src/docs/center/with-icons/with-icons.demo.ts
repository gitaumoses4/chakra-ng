import { Component } from "@angular/core";
import { ChakraSystemModule, IconModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "with-icons-demo",
  templateUrl: "./with-icons.demo.html",
  imports: [LayoutModule, ChakraSystemModule, IconModule],
})
export class WithIconsDemo {}
