import { Link } from "react-router-dom";

const HeroStyle5 = ({ data }) => {
  const { mintTitle, title, subTitle, imgUrl, appStore, playStore } = data;

  return (
    <section
      className="cs_hero cs_style_2 cs_purple_bg position-relative"
      id="home"
    >
      <div className="container">
        <div className="cs_hero_content">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-xl-6">
              <div className="cs_hero_text">
                <p className="cs_hero_subtitle cs_fs_16 cs_medium cs_white_color cs_mb_20">
                  {mintTitle}
                </p>
                <h1
                  className="cs_hero_title cs_fs_68 cs_white_color cs_mb_28 aos fadeInDown"
                  data-aos="fade-down"
                  data-aos-duration="800"
                >
                  {title}
                </h1>
                <p className="cs_fs_21 cs_border_color cs_mb_42">{subTitle}</p>
                <div className="cs_btns_group d-flex flex-wrap gap-3">
                  <Link
                    to={appStore.url}
                    aria-label="App store button"
                    className="cs_btn cs_style_2 cs_radius_5 cs_white_bg cs_heading_color aos fadeInLeft"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    <span className="cs_btn_icon">
                      <svg
                        width="26"
                        height="31"
                        viewBox="0 0 26 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6011 16.4212C21.6165 15.2527 21.9352 14.107 22.5274 13.0907C23.1196 12.0743 23.9662 11.2204 24.9883 10.6084C24.339 9.70514 23.4824 8.96182 22.4865 8.43744C21.4907 7.91307 20.383 7.62209 19.2516 7.58761C16.8379 7.34084 14.4979 8.99437 13.268 8.99437C12.0142 8.99437 10.1205 7.61211 8.08127 7.65297C6.76225 7.69448 5.47675 8.06807 4.35004 8.73736C3.22333 9.40664 2.29382 10.3488 1.65209 11.472C-1.12776 16.1598 0.945757 23.0493 3.60862 26.8385C4.94091 28.694 6.49797 30.7666 8.53535 30.6931C10.5291 30.6126 11.2737 29.4549 13.6802 29.4549C16.0645 29.4549 16.7631 30.6931 18.8418 30.6464C20.9811 30.6126 22.329 28.7827 23.6145 26.9096C24.5718 25.5875 25.3084 24.1263 25.7971 22.5801C24.5542 22.0681 23.4935 21.211 22.7473 20.1158C22.0012 19.0206 21.6025 17.7357 21.6011 16.4212Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M17.6743 5.09536C18.8407 3.73147 19.4154 1.97842 19.2762 0.208496C17.4942 0.390805 15.848 1.22039 14.6658 2.53195C14.0878 3.17268 13.6451 3.91809 13.363 4.72557C13.0809 5.53305 12.965 6.38676 13.0219 7.2379C13.9132 7.24684 14.7951 7.05866 15.6009 6.68754C16.4068 6.31641 17.1157 5.77202 17.6743 5.09536Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <div className="cs_btn_text_erapper">
                      <p className="cs_fs_14 cs_semibold cs_mb_3">
                        {appStore.subTitle}
                      </p>
                      <h3 className="cs_fs_22 mb-0">{appStore.title}</h3>
                    </div>
                  </Link>
                  <Link
                    to={playStore.url}
                    aria-label="App store button"
                    className="cs_btn cs_style_2 cs_type_1 cs_radius_5 cs_white_color  fadeInRight"
                    data-aos="fade-right"
                    data-aos-duration="800"
                  >
                    <span className="cs_btn_icon">
                      <img src={playStore.icon} alt="" />
                    </span>
                    <div className="cs_btn_text_erapper">
                      <p className="cs_fs_14 cs_semibold cs_mb_3">
                        {playStore.subTitle}
                      </p>
                      <h3 className="cs_fs_22 mb-0 cs_white_color">
                        {playStore.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="cs_hero_thumbnail">
                <img src={imgUrl} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Shapes */}
        <div className="cs_hero_shape_1 cs_radius_100 position-absolute"></div>
        <div className="cs_hero_shape_2 cs_radius_100 position-absolute"></div>
        <div className="cs_hero_shape_3 cs_radius_100 position-absolute"></div>
        <div className="cs_hero_shape_4 cs_radius_100 position-absolute"></div>
        <div className="cs_hero_shape_5 cs_radius_100 position-absolute"></div>
      </div>
    </section>
  );
};

export default HeroStyle5;
