import { DocSection } from "../types";
import { ButtonImportDoc } from "./button-import.doc";
import { createDocs } from "../../../layout/doc/page/createDocs";
import { ButtonUsageDoc } from "./button-usage.doc";

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
    component: ButtonUsageDoc,
  },
];

export const ButtonDocs = createDocs({
  title: "Button - Quillar UI",
  header: "Button",
  description:
    "Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, cancelling an action or performing a delete operation",
  sections,
});
