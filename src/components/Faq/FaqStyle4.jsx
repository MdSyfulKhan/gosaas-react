import parser from "html-react-parser";
import { useState } from "react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="cs_accordian cs_radius_20 position-relative">
    <div
      className={`cs_accordian_head cs_fs_21 cs_heading_color ${
        isOpen ? "active" : ""
      }`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {question}
      <span className="cs_accordian_toggle position-absolute"></span>
    </div>
    {isOpen && <div className="cs_accordian_body">{answer}</div>}
  </div>
);

const FaqStyle4 = ({ data }) => {
  const { title, faqs } = data;
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_60 text-center">
          <h2
            className="cs_section_title cs_fs_50 mb-0 aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {parser(title)}
          </h2>
        </div>
        <div className="row cs_gap_y_24">
          <div
            className="col-xl-6 aos fadeInLeft"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {faqs?.slice(0, 4).map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
          <div
            className="col-xl-6  fadeInRight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {faqs?.slice(4).map((faq, index) => (
              <AccordionItem
                key={index + 4}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index + 4}
                onClick={() => handleToggle(index + 4)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="cs_height_134 cs_height_lg_80"></div>
    </section>
  );
};

export default FaqStyle4;
