import React, { useState } from "react";
import { FAQItemProps } from "./faqTypes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-xl mx-auto p-4 mb-2 bg-white/80 rounded-2xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold text-base text-blue">
        {question}
        {isOpen ? <FontAwesomeIcon className="ml-2" icon={faAngleUp}/> : <FontAwesomeIcon className="ml-2" icon={faAngleDown}/>}
      </button>

      {isOpen && <p className="mt-2 text-sm  text-left text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;