import { Outlet } from "react-router-dom";
import FooterStyle4 from "../Footer/FooterStyle4.jsx";
import HeaderStyle4 from "../Header/HeaderStyle4.jsx";

const footerData = {
  logo: "/img/logo.svg",
  description:
    "Our analytics application turns raw data into actionable insights, empowering businesses to make data-driven decisions and enhance performance.",
  quickLinks: {
    title: "Useful Links",
    links: [
      { title: "home", url: "/" },
      { title: "features", url: "/features" },
      { title: "pricing", url: "/pricing" },
      { title: "blog", url: "/blog" },
      { title: "contact", url: "/contact" },
    ],
  },
  supportLinks: {
    title: "Product Help",
    links: [
      { title: "contact", url: "/contact" },
      { title: "help", url: "/contact" },
      { title: "resources", url: "#" },
      { title: "terms&Condition", url: "/term-condition" },
    ],
  },
  contactInfo: {
    title: "Download",
    links: [
      {
        title: "App Store",
        subTitle: "Download on the",
        icon: "/img/icons/apple-icon.svg",
        url: "#",
      },
      {
        title: "Google Play",
        subTitle: "GET IT ON",
        icon: "/img/icons/playstore.svg",
        url: "#",
      },
    ],
  },
};

const LayoutStyle5 = () => {
  return (
    <div>
      <HeaderStyle4 logo="/img/logo-2.svg" logoUrl="/" />
      <Outlet />
      <FooterStyle4 data={footerData} styleVarient="cs_type_3" />
    </div>
  );
};

export default LayoutStyle5;
