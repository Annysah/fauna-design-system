import React from 'react';

import Button, { ButtonProps } from './Button';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  primaryButtonProps: ButtonProps;
  secondaryButtonProps?: ButtonProps;
}

const Modal: React.FC<ModalProps> = ({ title, content, primaryButtonProps, secondaryButtonProps, }) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-1/2 h-auto rounded-lg border border-neutral-300 p-6">
          <div className="modal-header mb-4">
            <h2 className="text-25 font-semibold text-neutral-500">{title}</h2>
          </div>
          <div className="text-16 text-neutral-400 mb-4">{content}</div>
          <div className="flex justify-end space-x-4">
            <Button {...primaryButtonProps} />
            {secondaryButtonProps && <Button {...secondaryButtonProps} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
