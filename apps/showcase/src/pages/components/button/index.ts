import { DocSection } from "../../../types";
import { ButtonImportDoc } from "./button-import.doc";
import { ButtonUsageDemo } from "../../../docs/button/usage/button-usage.demo";
import { createDocs } from "../../../layout/doc/page/createDocs";

const sections: Array<DocSection> = [
  {
    id: "import",
    header: "Import",
    description: "",
    component: ButtonImportDoc,
  },
  {
    id: "usage",
    header: "Usage",
    description: "",
    component: ButtonUsageDemo,
  },
];

export const ButtonDocs = createDocs({
  id: "button",
  title: "Button - Quillar UI",
  header: "Button",
  description:
    "Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, cancelling an action or performing a delete operation",
  sections,
});
