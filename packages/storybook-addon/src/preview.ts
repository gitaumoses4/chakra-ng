import { moduleMetadata, Preview } from "@storybook/angular";
import { COLOR_MODE_TOOL_ID, DIRECTION_TOOL_ID } from "./constants";
import { QuillarStorybookModule } from "./modules/quillar-storybook.module";

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [QuillarStorybookModule],
    }),
  ],
};

export const globals = {
  [DIRECTION_TOOL_ID]: "ltr",
  [COLOR_MODE_TOOL_ID]: localStorage.getItem("quillar-color-mode") || "light",
};

export default preview;
