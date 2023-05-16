import useTheme from "../../../../hooks/useTheme";
import cn from "classnames";
import scss from "./PostCard.module.scss";
import { useTranslation } from "react-i18next";

function PostCard({ image, date, min, title }) {
  const { t } = useTranslation();
   const isDark = useTheme();
  return (
    <div className={scss.card}>
      <img src={image} alt="img" />
      <div className={scss.card__text}>
        <div className={scss.card__time}>
          <p>{t(date)}</p>
          <div className={scss.card__text_dot}></div>
          <p>{t(min)}</p>
        </div>
        <h1
          className={cn({
            dark_text: isDark,
          })}>
          {t(title)}
        </h1>
      </div>
    </div>
  );
}

export default PostCard;
