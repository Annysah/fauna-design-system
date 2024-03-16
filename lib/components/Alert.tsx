import React, { ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type AlertVariant = "success" | "warning" | "danger" | "info";

interface AlertProps {
  variant: AlertVariant;
  onClose?: () => void;
  children: ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  variant = "success",
  onClose,
  children,
}) => {
  const baseStyles = "py-2 px-4 w-96 text-14 rounded-md flex items-center justify-between h-14 font-fontWeight-medium";

  const colorStyles = {
    success: "bg-green-100 text-green-400",
    warning: "bg-yellow-100 text-yellow-400",
    danger: "bg-red-100 text-red-400",
    info: "bg-primary-100 text-primary-400",
  };

  const alertStyles = `${baseStyles} ${colorStyles[variant]}`;

  return (
    <div className={alertStyles}>
      {children}
      {onClose && (
        <button
        className= "focus:outline-none"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  );
};

export default Alert;
