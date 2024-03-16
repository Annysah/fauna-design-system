import { Meta } from '@storybook/react';

import Alert from '../../lib/components/Alert';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
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

export const SuccessAlert = () => <Alert variant="success" onClose={() => console.log("Alert closed!")}>Success! This is a success alert.</Alert>;

export const WarningAlert = () => <Alert variant="warning" onClose={() => console.log("Alert closed!")}>Warning! This is a warning alert.</Alert>;

export const DangerAlert = () => <Alert variant="danger" onClose={() => console.log("Alert closed!")}>Danger! This is a danger alert.</Alert>;

export const InfoAlert = () => <Alert variant="info" onClose={() => console.log("Alert closed!")}>Info! This is an info alert.</Alert>;
