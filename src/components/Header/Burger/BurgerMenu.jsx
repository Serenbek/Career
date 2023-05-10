import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import scss from "./BurgerMenu.module.scss";
import cn from "classnames";

const BurgerMenu = ({ isOpen, setIsOpen, modalRef }) => {
  const { t } = useTranslation();
  const isDark = useTheme();

  return (
    <>
      <div className={scss.modal}></div>
      <div className={scss.modal_body}>
        <div
          className={cn(scss.modal_content, {
            card_tour: isDark,
          })}
          ref={modalRef}
        >
          <div className={scss.modal_header}>
            <button
              className={cn({
                dark_text: isDark,
              })}
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            <Link to="/CareerBLogDetails">{t("header.info")}</Link>
            <Link to="/CareerAbout">{t("header.About")}</Link>
            <Link to="/CareerContact">{t("header.Contact")}</Link>
            <Link to="/CareerList">{t("header.navlist")}</Link>
            <Link to="/CareerContact">{t("header.Contact")}</Link>
            <Link to="/CareerBlog">{t("header.navblog")}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
