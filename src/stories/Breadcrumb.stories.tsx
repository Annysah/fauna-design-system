import { Meta } from '@storybook/react';

import Breadcrumb from '../../lib/components/Breadcrumb';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
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

export const DefaultBreadcrumb = () => (
  <Breadcrumb items={['Home', 'Link 1', 'Link 2']} />
);

export const SimpleBreadcrumb = () => (
  <Breadcrumb items={['Home', 'Current Page']} />
);
