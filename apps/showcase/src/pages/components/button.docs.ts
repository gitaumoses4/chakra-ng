import { ButtonUsageDemo } from "../../docs/button/usage/button-usage.demo";
import { createDocs } from "../../layout/doc/page/createDocs";

export const ButtonDocs = createDocs({
  id: "button",
  header: "Button",
  description:
    "Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, cancelling an action or performing a delete operation",
  sections: [
    {
      id: "import",
      header: "Import",
      description: "",
    },
    {
      id: "usage",
      header: "Usage",
      description: "",
      demo: ButtonUsageDemo,
    },
  ],
});
