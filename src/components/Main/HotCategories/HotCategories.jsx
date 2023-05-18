import useTheme from "../../../hooks/useTheme";
import cn from 'classnames'
import scss from "./HotCategories.module.scss";
import { HotCategoriesConst } from "../../../constants/HotCategoriesConst";
import HotCategoriesCard from "./HotCategoriesCard/HotCategoriesCard";
import ClearButton from "../../UI/Buttons/ClearButton";
import arrow from "../../../assets/images/HotCategories/arrow.svg";
import { useTranslation } from "react-i18next";

function HotCategories(props) {
  const { t } = useTranslation();
  const isDark = useTheme();

  return (
    <div className={scss.wrapper}>
      <h1
        className={cn({
          dark_text: isDark,
        })}>
        {t("hot.hhot")}
      </h1>
      <div className={scss.cards}>
        {HotCategoriesConst.map((item, index) => (
          <HotCategoriesCard key={`${item.image}_${index}`} {...item} />
        ))}
      </div>
      <div className={scss.button}>
        <ClearButton>
          <>
            <p className={cn({
                dark_text: isDark
            })}> {t("hot.all")}</p>
            <img src={arrow} alt="icon" />
          </>
        </ClearButton>
      </div>
    </div>
  );
}

export default HotCategories;
