import CtaStyle3 from "../Cta/CtaStyle3";

const HeroStyle7 = ({ data }) => {
  const {
    title,
    subTitle,
    features,
    btnText,
    iconUrl,
    imgUrl,
    animText1,
    animText2,
  } = data;
  return (
    <section className="cs_hero cs_style_1 cs_type_1" id="home">
      <div className="container">
        <div className="cs_hero_content cs_center_column text-center">
          <CtaStyle3
            title={title}
            subTitle={subTitle}
            iconUrl={iconUrl}
            features={features}
            btnText={btnText}
          />
          <div className="cs_height_63 cs_height_lg_60"></div>
          <div
            className="cs_hero_thumbnail cs_radius_20 position-relative aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <img src={imgUrl} alt="Hero image" />

            <div className="cs_text_check_wrap position-absolute">
              <div className="cs_iconbox cs_style_3 cs_heading_bg cs_radius_15">
                <span className="cs_iconbox_icon cs_center cs_accent_color">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1639_56)">
                      <path
                        d="M24.137 4.25L21.212 5.713L19.75 8.64L18.288 5.713L15.363 4.25L18.288 2.787L19.75 -0.139999L21.212 2.787L24.137 4.25ZM9.39 7.165L7.461 14H11.538L9.609 7.165C9.58 7.051 9.418 7.051 9.39 7.165ZM20 10.5C16.41 10.5 13.5 7.59 13.5 4C13.5 2.49 14.02 1.104 14.884 6.10948e-07H3C1.346 6.10948e-07 0 1.346 0 3V24H24V9.116C22.896 9.98 21.51 10.5 20 10.5ZM12.95 19L12.103 16H6.897L6.05 19H4L7.439 6.638C7.58 6.03 7.98 5.518 8.537 5.233C9.105 4.941 9.757 4.923 10.376 5.183C10.963 5.429 11.413 6 11.58 6.718L15 19.001L12.95 19ZM19 19H17V12H19V19Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1639_56">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h3 className="cs_fs_18 cs_white_color mb-0">{animText1}</h3>
              </div>
              <span className="cs_arrow">
                <img src="/img/icons/arrow-right.svg" alt="Arrow" />
              </span>
            </div>
            <div className="cs_aiassistant_wrap position-absolute">
              <div className="cs_iconbox cs_style_3 cs_heading_bg cs_radius_15">
                <span className="cs_iconbox_icon cs_center cs_accent_color">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1639_65)">
                      <path
                        d="M11.8034 1.93811C11.6219 1.57448 11.3426 1.26863 10.9969 1.05485C10.6512 0.841081 10.2528 0.727844 9.84636 0.727844C9.43991 0.727844 9.04151 0.841081 8.69582 1.05485C8.35014 1.26863 8.07085 1.57448 7.88928 1.93811L0.233026 17.2506C0.066301 17.584 -0.0124896 17.9544 0.00412913 18.3267C0.0207479 18.699 0.132225 19.0609 0.327983 19.3781C0.523742 19.6953 0.79729 19.9571 1.12267 20.1389C1.44806 20.3207 1.81449 20.4163 2.18719 20.4167C2.5935 20.4168 2.99181 20.3037 3.33748 20.0902C3.68315 19.8767 3.96252 19.5711 4.14428 19.2077L5.00032 17.5H14.6924L15.5455 19.2077C15.7271 19.5706 16.006 19.8759 16.3511 20.0894C16.6962 20.3029 17.0939 20.4162 17.4997 20.4167C17.8726 20.4168 18.2394 20.3215 18.5652 20.14C18.891 19.9584 19.165 19.6966 19.3611 19.3793C19.5572 19.0621 19.6689 18.7 19.6856 18.3274C19.7024 17.9548 19.6236 17.5842 19.4568 17.2506L11.8034 1.93811ZM7.18782 13.125L9.84636 7.8079L12.5049 13.125H7.18782Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.9584 34.2708C18.6711 34.271 18.3865 34.2145 18.1211 34.1046C17.8556 33.9948 17.6143 33.8337 17.4111 33.6306L10.1194 26.3389C9.70906 25.9286 9.47852 25.372 9.47852 24.7917C9.47852 24.2113 9.70906 23.6547 10.1194 23.2444C10.5298 22.834 11.0864 22.6035 11.6667 22.6035C12.2471 22.6035 12.8036 22.834 13.214 23.2444L18.9584 28.9902L31.2653 16.6819C31.6756 16.2715 32.2322 16.041 32.8126 16.041C33.3929 16.041 33.9495 16.2715 34.3598 16.6819C34.7702 17.0922 35.0008 17.6488 35.0008 18.2292C35.0008 18.8095 34.7702 19.3661 34.3598 19.7764L20.5057 33.6306C20.3024 33.8337 20.0612 33.9948 19.7957 34.1046C19.5302 34.2145 19.2457 34.271 18.9584 34.2708Z"
                        fill="currentColor"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1639_65">
                        <rect width="35" height="35" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <h3 className="cs_fs_18 cs_white_color mb-0">{animText2}</h3>
              </div>
              <span className="cs_arrow cs_rotate_180">
                <img src="/img/icons/arrow-right.svg" alt="Arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStyle7;
