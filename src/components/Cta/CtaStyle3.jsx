import { Icon } from "@iconify/react";
import parser from "html-react-parser";
import { useState } from "react";
import { handleFormSubmit } from "../../utils/Functions";
const CtaStyle3 = ({ title, subTitle, features, btnText, iconUrl }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      {subTitle && (
        <p className="cs_mb_25">
          <img src={iconUrl} alt="Giftbox image" className="me-2" />
          {parser(subTitle)}
        </p>
      )}
      <h1
        className="cs_fs_70 cs_bold cs_mb_57 aos fadeInDown"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {parser(title || "")}
      </h1>
      <form
        action="#"
        className="cs_newsletter_form cs_type_1 cs_mb_21 position-relative aos fadeInUp"
        data-aos="fade-up"
        data-aos-duration="800"
        onSubmit={(e) =>
          handleFormSubmit(e, {
            email,
            resetFn: () => setEmail(""),
            successMessage: "You’re in! We’ll be in touch.",
          })
        }
      >
        <input
          type="text"
          className="cs_newsletter_input cs_radius_50 text-capitalize"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Subscribe button"
          className="cs_btn cs_style_1 cs_purple_bg cs_fs_16 cs_semibold cs_white_color"
        >
          <span>{btnText || ""}</span>
        </button>
      </form>
      <ul className="cs_list cs_style_2 cs_mp_0">
        {features?.map((item, index) => (
          <li className="" key={index}>
            <i>
              <Icon className="cs_accent_color" icon="fa6-solid:check" />
            </i>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CtaStyle3;
