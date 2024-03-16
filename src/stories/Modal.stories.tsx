import { Meta } from "@storybook/react";

import Modal from "../../lib/components/Modal";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable modal component.',
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const ModalWithButtons = () => (
  <Modal
    title="Modal Title"
    content="Modal content."
    primaryButtonProps={{
      children: "Confirm",
      onClick: () => {},
      variant: "hovered",
      size: "small"
    }}
    secondaryButtonProps={{
      children: "Cancel",
      onClick: () => {},
      variant: "hovered",
      color: "secondary",
      size: "small"
    }}
  />
);
