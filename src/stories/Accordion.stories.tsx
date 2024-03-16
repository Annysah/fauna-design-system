import { Meta } from "@storybook/react";

import Accordion from "../../lib/components/Accordion";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

export const Default = () => (
  <Accordion
    items={[
      { title: "Accordion Item 1", content: "Content 1" },
      { title: "Accordion Item 2", content: "Content 2" },
      { title: "Accordion Item 3", content: "Content 3" },
    ]}
  />
);
