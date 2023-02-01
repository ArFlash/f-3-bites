import React from "react";
import Style from "../Style/Home.module.css";
import Images from "../Assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  return (
    <>
      <div className={Style.Home_SectionA}>
        <div className={Style.HomeGride}>
          <div className={Style.Item} id={Style.Item1}>
            <LazyLoadImage
              src={Images.Dadaji}
              alt="Jay Shree Dadaji"
              className={Style.Dadaji}
            />
          </div>
          <div className={Style.Item} id={Style.Item2}>
            <p className={Style.Item2name}>Thakur Brother's</p>
          </div>
          <div className={Style.Item} id={Style.Item3}>
            <LazyLoadImage
              src={Images.Logo}
              alt="Logo"
              className={Style.Logo}
            />
            <LazyLoadImage
              src={Images.Banner}
              alt="Name"
              className={Style.Banner}
            />
          </div>
          <div className={Style.Item} id={Style.Item4}>
            <div>
              <LazyLoadImage
                src={Images.Momos}
                alt="Momos"
                className={Style.Momos}
              />
              <LazyLoadImage
                src={Images.Pizza}
                alt="Pizza"
                className={Style.Pizza}
              />
            </div>
            <div>
              <LazyLoadImage
                src={Images.Burger}
                alt="Burger"
                className={Style.Burger}
              />
            </div>
          </div>
        </div>
        <div className={Style.Svg} id={Style.Svg1}></div>
      </div>
      <div className={Style.Home_SectionB}>
        <div className={Style.Dis}>
          <LazyLoadImage src={Images.Gif} alt="Gif" className={Style.Gif} />
          <div className={Style.Textbox}>
            <h2 className={`${Style.Textbox_heading} ${Style.Hindi}`}>
              आपका स्वाद, हमारी पहचान !
            </h2>
            <h2 className={`${Style.Textbox_heading} ${Style.English}`}>
              Khandwa let's Taste it !
            </h2>

            <p className={Style.Homebio}>
              Fresh Flavour Frest Bite2 is a one-stop shop for all your food
              cravings. We specialize in delicious Burgers, Pizzas, Samosas,
              Momos, and Sandwiches. Our recipes are based on traditional
              flavors and ingredients but with a modern twist. Our ingredients
              are always fresh and of the highest quality, making our food not
              only delicious but also healthy. We believe that a customer should
              always get the best quality food at a reasonable price. So come to
              Fresh Flavour Frest Bite2 to tantalize your taste buds and enjoy a
              delightful meal!
              <br />
              From our signature burgers and pizzas to our specialty samosas and
              momos, Fresh Flavour Fresh Bite2 is sure to have something to
              tantalize your taste buds. Stop by and experience the freshness
              for yourself!
            </p>
            <div />
          </div>
        </div>
      </div>
    </>
  );
}
