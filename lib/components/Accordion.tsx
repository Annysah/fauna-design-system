import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-neutral-200 rounded-lg">
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div
              className="border-b border-neutral-200 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center py-2 px-4">
                <h2 className="text-19 font-medium">{item.title}</h2>
                <FontAwesomeIcon
                  icon={openIndex === index ? faAngleUp : faAngleDown}
                  className="w-6 h-6 text-neutral-300"
                />
              </div>
            </div>
            {openIndex === index && (
              <div className="p-4 border-b border-neutral-200">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
