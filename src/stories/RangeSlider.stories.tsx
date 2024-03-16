import React from "react";
import { Meta } from "@storybook/react";

import RangeSlider from "../../lib/components/RangeSlider";

const meta: Meta = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable slider component.',
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const DefaultRangeSlider = () => {
  const [value, setValue] = React.useState(50);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return <RangeSlider value={value} onChange={handleChange} min={0} max={100} />;
};
