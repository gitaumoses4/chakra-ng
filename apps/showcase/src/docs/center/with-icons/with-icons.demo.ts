import { Component } from "@angular/core";
import { ChakraNgModule, IconModule, LayoutModule } from "@chakra-ng/angular";

@Component({
  standalone: true,
  selector: "with-icons-demo",
  templateUrl: "./with-icons.demo.html",
  imports: [LayoutModule, ChakraNgModule, IconModule],
})
export class WithIconsDemo {}
