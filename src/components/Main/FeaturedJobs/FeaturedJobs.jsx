import {cardListData} from "../../../constants/cardListData";
import cn from "classnames";
import useTheme from "../../../hooks/useTheme";
import scss from './FeaturedJobs.module.scss'

import favorite from "../../../assets/listCard/favorite.png";
import local from "../../../assets/listCard/local.png";
import level from "../../../assets/listCard/exp.png";
import cash from "../../../assets/listCard/cash.png";
import user from "../../../assets/listCard/user.png";
import clock from "../../../assets/listCard/clock.png";
import userlike from "../../../assets/listCard/like.png";
import right from '../../../assets/icon/arrowRight.png'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FeaturedJobs = () => {
  	const isDark = useTheme();
    const { t } = useTranslation();
  const cardItems = cardListData.slice(0,6);
  return (
    <>
      <header className={scss.header}>
        <div className={scss.header_info}>
          <p> {t("featured.headInfo")}</p>
        </div>
        <div className={scss.header_title}>
          <h1
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("featured.headTitle")}
          </h1>
        </div>
      </header>
      <div className={scss.wrapper}>
        {cardItems.map((card) => (
          <div
            key={card.id}
            className={cn(scss.card, {
              card: isDark,
            })}
          >
            <header className={scss.card_header}>
              <img src={card.img} alt="" />
              <button>
                <img className={scss.header_like} src={favorite} alt="" />
              </button>
            </header>
            <section className={scss.card_body}>
              <h3
                className={cn({
                  dark_text: isDark,
                })}
              >
                {card.title}
              </h3>
              <h4>{card.comp}</h4>
              <h5>
                <img src={local} alt={card.title} />
                New York
              </h5>
              <p>Posted day: October 28, 2019</p>
            </section>
            <footer className={scss.card_foot}>
              <div className="foot_left">
                <img src={level} alt="" /> 3 year exp <br />
                <img src={cash} alt="" /> $1,250 - $3000
              </div>
              <div className="foot_right">
                <img src={clock} alt="" /> Part time <br />
                <img src={user} alt="" /> Freelance
              </div>
            </footer>
          </div>
        ))}
      </div>
      <footer className={scss.footer}>
        <Link
          to="/CareerList"
          className={cn(scss.wraper_btn, {
            dark_btn: isDark,
          })}
        >
          {" "}
          {t("featured.veiw")} <img src={right} alt="" />
        </Link>
      </footer>
    </>
  );
};

export default FeaturedJobs;
