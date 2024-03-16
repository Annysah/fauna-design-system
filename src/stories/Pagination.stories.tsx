import { Meta } from "@storybook/react";

import Pagination from "../../lib/components/Pagination";

const meta: Meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable pagination component.',
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default = () => (
  <Pagination currentPage={1} totalPages={5} onPageChange={(page) => console.log("Page changed to:", page)} />
);
