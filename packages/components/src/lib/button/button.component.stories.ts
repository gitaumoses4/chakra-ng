import { type Meta, type StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: "ButtonComponent",
  decorators: [],
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
