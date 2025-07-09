import Register from "../components/Auth/Register";
import CtaStyle9 from "../components/Cta/CtaStyle9";

const ctaData = {
  imgUrl: "/img/support-img-group.png",
  title: "Any Questions? Our support team is available 24/7",
  btnText: "Live Chat Now",
};

const RegisterPage = () => {
  return (
    <>
      <Register />
      <CtaStyle9 data={ctaData} />
    </>
  );
};

export default RegisterPage;
