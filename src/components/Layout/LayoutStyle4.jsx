import { Outlet } from "react-router-dom";
import FooterStyle2 from "../Footer/FooterStyle2.jsx";
import HeaderStyle1 from "../Header/HeaderStyle1.jsx";

const footerData = {
  logo: "/img/logo.svg",
  desc: "Our analytics application turns raw data into actionable insights, empowering businesses to make data-driven decisions and enhance performance.",
  quickLinks: {
    title: "Quick Links",
    links: [
      { title: "home", url: "/" },
      { title: "features", url: "/features" },
      { title: "pricing", url: "/pricing" },
      { title: "blog", url: "/blog" },
      { title: "contact", url: "/contact" },
    ],
  },
  supportLinks: {
    title: "Support",
    links: [
      { title: "contact", url: "/contact" },
      { title: "help", url: "/contact" },
      { title: "resources", url: "#" },
      { title: "terms&Condition", url: "/term-condition" },
    ],
  },
  contactInfo: {
    title: "Contact Info",
    links: [
      { title: "24/7 Support Center", url: "" },
      { title: "contact@gosaas.com", url: "mailto:contact@gosaas.com" },
      { title: "(55) 1234-56789", url: "tel:(55) 1234-56789" },
      { title: "10 am - 12 pm, Everyday", url: "" },
    ],
  },
};

const LayoutStyle4 = () => {
  return (
    <div>
      <HeaderStyle1 logo="/img/logo.svg" logoUrl="/" />
      <Outlet />
      <FooterStyle2 data={footerData} />
    </div>
  );
};

export default LayoutStyle4;
