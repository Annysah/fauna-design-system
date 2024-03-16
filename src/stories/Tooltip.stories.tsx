import { Meta } from '@storybook/react';
import Tooltip from '../../lib/components/Tooltip';

const meta: Meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable alert component.',
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const BasicTooltip = () => (
  <Tooltip content="This is a tooltip!">
    <span>Hover me</span>
  </Tooltip>
);