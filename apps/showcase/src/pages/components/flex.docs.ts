import { createDocs } from "../../layout/doc/page/createDocs";
import { FlexUsageDemo } from "../../docs/flex/usage/flex-usage.demo";

export const FlexDocs = createDocs({
  id: "flex",
  header: "Flex",
  description: "Flex is a div with display set to flex and comes with helpful style shorthand.",
  sections: [
    {
      id: "import",
      header: "Import",
    },
    {
      id: "usage",
      header: "Usage",
      demo: FlexUsageDemo,
    },
  ],
});
