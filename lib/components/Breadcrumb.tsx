import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-neutral-400 border border-neutral-300 rounded-md w-96 h-12 flex items-center justify-center">
      <ol className="list-none flex items-center space-x-4 ">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-4">
            <span>{item}</span>
            {index < items.length - 1 && (
              <span className="mx-2">
                 <FontAwesomeIcon icon={faAngleRight} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
