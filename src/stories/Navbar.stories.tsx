import { Meta } from "@storybook/react";

import Navbar from "../../lib/components/Navbar";

const meta: Meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreened",
    docs: {
      description: {
        component: "A customizable navbar component.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const DefaultNavbar = () => (
  <Navbar
    primaryButtonProps={{
      children: "Get Started",
      onClick: () => {},
      variant: "hovered",
      size: "small",
    }}
    logo="Logo"
  />
);