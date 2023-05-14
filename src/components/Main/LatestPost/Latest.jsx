import useTheme from "../../../hooks/useTheme";
import cn from "classnames";
import { PostConst } from "../../../constants/PostConst";
import PostCard from "./PostCard/PostCard";
import scss from "./Latest.module.scss";
import depression from "../../../assets/images/PostImg/depression.svg";
import orangeArrow from "../../../assets/images/PostImg/orangeArrow.svg";
import { useTranslation } from "react-i18next";

function Latest(props) {
      const isDark = useTheme();
  const { t } = useTranslation();
  return (
      <div className={scss.wrapper}>
        <div className={scss.top}>
          <div className={scss.top__text}>
            <p className={scss.top__text_p}>{t("blogDetail.blog")}</p>
            <h1
              className={cn({
                dark_text: isDark,
              })}>
              {t("latest.news")}
            </h1>
            <p>{t("latest.desc")}</p>
          </div>
          <button>
            {t("latest.vAll")}
            <img src={orangeArrow} alt="img" />
          </button>
        </div>
        <div className={scss.bottom}>
          <a href="/CareerBlog">
            <div className={scss.post}>
              <img src={depression} alt="img" />
              <div className={scss.post__text}>
                <div className={scss.post__time}>
                  <p>{t("latest.date")}</p>
                  <div></div>
                  <p>{t("latest.min")}</p>
                </div>
                <h1>{t("latest.title")}</h1>
                <p>{t("latest.p")}</p>
              </div>
            </div>
          </a>
          <div className={scss.posts}>
            {PostConst.map((item, index) => (
              <PostCard key={`${item.image}_${index}`} {...item} />
            ))}
          </div>
        </div>
        <button className={scss.btnO}>
          {t("latest.vAll")}
          <img src={orangeArrow} alt="img" />
        </button>
      </div>
  );
}

export default Latest;
