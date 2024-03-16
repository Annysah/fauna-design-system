import { Meta } from "@storybook/react";

import InputField, { InputFieldProps } from "../../lib/components/Input";

const meta: Meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable input component.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "text" },
    value: { control: "text" },
  },
};

export default meta;

export const Default = (args: InputFieldProps) => <InputField {...args} />;
Default.args = {
  placeholder: "Enter text",
};

export const Hover = (args: InputFieldProps) => <InputField {...args} />;
Hover.args = {
  placeholder: "Enter text",
};

export const Focus = (args: InputFieldProps) => <InputField {...args} />;
Focus.args = {
  placeholder: "Enter text",
};

export const Filled = (args: InputFieldProps) => <InputField {...args} />;
Filled.args = {
  placeholder: "Enter text",
  value: "Filled text",
};

export const Disabled = (args: InputFieldProps) => <InputField {...args} />;
Disabled.args = {
  placeholder: "Enter text",
  disabled: true,
};

export const Error = (args: InputFieldProps) => <InputField {...args} />;
Error.args = {
  placeholder: "Enter text",
  error: "This field is required",
};