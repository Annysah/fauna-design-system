import { Meta } from "@storybook/react";

import Card from "../../lib/components/Card";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable alert component.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => (
  <Card variant="default" title="Default Card" copy="This is a default card." />
);

export const CardWithButton = () => (
  <Card
    variant="withButton"
    title="Card with Button"
    copy="This card has a button."
    buttonText="Click Me"
  />
);

export const CardWithImageTop = () => (
  <Card
    variant="withImageTop"
    title="Card with Image at the Top"
    copy="This card has an image at the top."
    imageUrl="https://via.placeholder.com/400x200"
  />
);

export const CardWithImageButton = () => (
  <Card
    variant="withImageButton"
    title="Card with Image and Button"
    copy="This card has an image and button."
    buttonText="Learn More"
    imageUrl="https://via.placeholder.com/400x200"
  />
);
