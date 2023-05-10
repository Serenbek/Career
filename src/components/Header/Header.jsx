import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./Header.module.scss";
import logo from "../../assets/icon/logo.svg";
import ru from "../../assets/icon/russia.png";
import uk from "../../assets/icon/united-kingdom.png";
import logodark from "../../assets/icon/Logodark.png";
import sun from "../../assets/icon/bx-sun.svg";
import moon from "../../assets/icon/bx-moon.svg";
import burgerDark from "../../assets/icon/burger-menu-svgrepo-com.svg";
import burger from "../../assets/icon/burgerwhite.svg";
import cn from "classnames";
import ModalLogin from "./ModalLogin/ModalLogin";
import { useDispatch } from "react-redux";
import {switchTheme} from '../../redux/slices/ThemeSlice'
import useTheme from "../../hooks/useTheme";
import BurgerMenu from "./Burger/BurgerMenu";

const lngs = {
  en: { nativeName: uk},
  ru: { nativeName: ru },
};
function Header() {
  const { t, i18n } = useTranslation();
  const [openLog, setOpenLog] = useState(false);
const isDark = useTheme()
const dispatch = useDispatch();
const [isOpen, setIsOpen] = useState(false);
 const modalRef = useRef(null);
 const [isMounted, setIsMounted] = useState(false);
 useEffect(() => {
   setIsMounted(true);
 }, []);

 useEffect(() => {
   function handleClickOutside(event) {
     if (modalRef.current && !modalRef.current.contains(event.target)) {
       setIsOpen(false);
     }
   }

   if (isOpen) {
     document.addEventListener("mousedown", handleClickOutside);
   } else {
     document.removeEventListener("mousedown", handleClickOutside);
   }

   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, [isOpen]);
 if (!isMounted) {
   return null;
 }

  return (
    <div className={css.wrapper}>
      {isOpen && (
        <BurgerMenu isOPen={isOpen} setIsOpen={setIsOpen} modalRef={modalRef} />
      )}
      <Link
        className={cn(css.no_hover, {
          dark_text: isDark,
        })}
        to="/"
      >
        {isDark ? (
          <img className={css.logo} src={logodark} alt="" />
        ) : (
          <img className={css.logo} src={logo} alt="" />
        )}
      </Link>
      <div className={css.left}>
        <Link to="/CareerList">{t("header.navlist")}</Link>
        <Link to="/CareerDetails">{t("header.navdetail")}</Link>
        <div className={css.dropdown}>
          <button className={css.dropbtn}>{t("header.navpage")}</button>
          <div
            className={cn(css.dropdowncontent, {
              card_tour: isDark,
            })}
          >
            <Link to="/CareerBLogDetails">{t("header.info")}</Link>
            <Link to="/CareerAbout">{t("header.About")}</Link>
            <Link to="/CareerContact">{t("header.Contact")}</Link>
            <Link to="/CareerList">{t("header.navlist")}</Link>
          </div>
        </div>
        <Link to="/CareerBlog">{t("header.navblog")}</Link>
      </div>
      <div className={css.right}>
        <div className={css.leftContent}></div>
        {isDark ? (
          <button onClick={() => setOpenLog(!openLog)} className={css.login}>
            {t("header.loginlog")}
          </button>
        ) : (
          <button
            className={cn(css.login1, {
              dark_text: isDark,
            })}
            onClick={() => setOpenLog(!openLog)}
          >
            {t("header.loginlog")}
          </button>
        )}
        {isDark ? (
          <button className={css.joinUs}>{t("header.loginjoin")}</button>
        ) : (
          <button className={css.joinUs1}>{t("header.loginjoin")}</button>
        )}
      </div>
      <div className={css.langButton}>
        {Object.keys(lngs).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            <img src={lngs[lng].nativeName} alt="" />
          </button>
        ))}
        <div className={css.toogleTheme}>
          <label className={css.switch}>
            <input type="checkbox" onChange={() => dispatch(switchTheme())} />
            <span className={css.slider}>
              {isDark ? (
                <img src={moon} alt="moon" />
              ) : (
                <img src={sun} alt="sun" />
              )}
            </span>
          </label>
        </div>
      </div>
      <button className={css.btn_burger} onClick={() => setIsOpen(true)}>
        {isDark ? (
          <img className={css.logo} src={burger} alt="burger" />
        ) : (
          <img className={css.logo} src={burgerDark} alt="burgerDark" />
        )}
      </button>
      {openLog && <ModalLogin setOpenLog={setOpenLog} openLog={openLog} />}
    </div>
  );
}

export default Header;
