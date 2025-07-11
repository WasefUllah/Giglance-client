import React from "react";

const Faq = ({ faq }) => {
  return (
    <div className="dark:text-white ">
      {faq.map((f, index) => (
        <div
          key={index}
          className="collapse collapse-arrow join-item border border-base-300 dark:border dark:border-white"
        >
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">{f.question}</div>
          <div className="collapse-content text-sm">{f.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
