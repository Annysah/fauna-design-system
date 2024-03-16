import type { Meta } from '@storybook/react';

import Button, { ButtonProps } from '../../lib/components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {type: 'radio', options: ['filled', 'hovered', 'disabled'] },
    },
    color: {
      control: { type: 'radio', options: ['primary', 'secondary', 'tertiary'] },
    },
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Colors = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args} color="primary">
        Primary
      </Button>
    </div>
    <div>
      <Button {...args} color="secondary">
        Secondary
      </Button>
    </div>
    <div>
      <Button {...args} color="tertiary">
        Tertiary
      </Button>
    </div>
  </div>
);
Colors.args = {
  variant: 'filled',
  size: 'medium'
};

export const Variants = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args} variant="filled">
        Filled
      </Button>
    </div>
    <div>
      <Button {...args} variant="hovered">
        Hovered
      </Button>
    </div>
    <div>
      <Button {...args} variant="disabled">
        Disabled
      </Button>
    </div>
  </div>
);
Variants.args = {
  color: 'primary',
  size: 'medium'
};

export const Sizes = (args: ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8">
    <div>
      <Button {...args} size="small">
        Small
      </Button>
    </div>
    <div>
      <Button {...args} size="medium">
        Medium
      </Button>
    </div>
    <div>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  </div>
);
Sizes.args = {
  variant: 'filled',
  color: 'primary',
};