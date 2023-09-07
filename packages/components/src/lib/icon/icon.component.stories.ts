import { type Meta, type StoryObj } from "@storybook/angular";
import { IconComponent } from "./icon.component";
import { QuillarIcon } from "@quillar/icons";

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: "IconComponent",
  decorators: [],
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  args: {
    name: QuillarIcon.EYE,
  },
};
