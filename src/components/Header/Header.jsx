import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./Header.module.scss";
import logo from "../../assets/icon/logo.svg";
import logodark from "../../assets/icon/Logodark.png";
import sun from "../../assets/icon/free-icon-switch-786484.png";
import moon from "../../assets/icon/free-icon-switch-786486.png";
import burgerDark from "../../assets/icon/burger-menu-svgrepo-com.svg";
import burger from "../../assets/icon/burgerwhite.svg";
import cn from "classnames";
import ModalLogin from "./ModalLogin/ModalLogin";
import { useDispatch } from "react-redux";
import {switchTheme} from '../../redux/slices/ThemeSlice'
import useTheme from "../../hooks/useTheme";


const lngs = {
  en: { nativeName: "Eng" },
  ru: { nativeName: "Rus" },
};
function Header() {
  const { t, i18n } = useTranslation();
  const [openLog, setOpenLog] = useState(false);
  console.log(openLog)

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

const isDark = useTheme()
const dispatch = useDispatch();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modalRef = useRef(null);
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
    <div className="container">
      <div className={css.wrapper}>
        {/*burger menu*/}

        {isOpen && (
          <div className={css.modal}>
            <div
              className={cn(css.modal_content, {
                card_tour: isDark,
              })}
              ref={modalRef}
            >
              <div className={css.modal_header}>
                <button
                  className={cn({
                    dark_text: isDark,
                  })}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  X
                </button>
              </div>
              <div className={css.modal_body}>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/"
                >
                  {t("pagelandinglink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/Travelpage"
                >
                  {t("pagelistlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/detailspage"
                >
                  {t("pagedetailslink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/checkoutPage"
                >
                  {t("pagecheckoutlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/checkoutCompletePage"
                >
                  {t("pagecompletedlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/blogpage"
                >
                  {t("blog")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/travelblogpage"
                >
                  {t("travelblogpagelink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/aboutpage"
                >
                  {t("pageaboutlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/contactPage"
                >
                  {t("pagecontactslink")}
                </Link>
              </div>
            </div>
          </div>
        )}
        {/*burger menu end*/}

        <div className={css.left}>
          {isDark ? (
            <img className={css.logo} src={logodark} alt="" />
          ) : (
            <img className={css.logo} src={logo} alt="" />
          )}
          <Link to="/">{t("headHome")}</Link>
          <b>{t("headComp")}</b>
          <div className={css.dropdown}>
            <button className={css.dropbtn}>{t("headPage")}</button>
            <div
              className={cn(css.dropdowncontent, {
                card_tour: isDark,
              })}
            >
              <Link to="/">{t("pagelandinglink")}</Link>
              <Link to="/Travelpage">{t("pagelistlink")}</Link>
              <Link to="/detailspage">{t("pagedetailslink")}</Link>
              <Link to="/checkoutPage">{t("pagecheckoutlink")}</Link>
              <Link to="/checkoutCompletePage">{t("pagecompletedlink")}</Link>
              <Link to="/blogpage">{t("blog")}</Link>
              <Link to="/travelblogpage">{t("travelblogpagelink")}</Link>
              <Link to="/aboutpage">{t("pageaboutlink")}</Link>
              <Link to="/contactPage">{t("pagecontactslink")}</Link>
            </div>
          </div>
          <b>{t("headDocum")}</b>
        </div>
        <div className={css.right}>
          <div className={css.leftContent}>
            <div className={css.toogleTheme}>
              <button onClick={() => dispatch(switchTheme())}>
                {isDark ? (
                  <img src={moon} alt="moon" />
                ) : (
                  <img src={sun} alt="moon" />
                )}
              </button>
            </div>
            <div className={css.langButton}>
              {Object.keys(lngs).map((lng) => (
                <button
                  type="submit"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          </div>
          <button className={css.btn_burger} onClick={() => setIsOpen(true)}>
            {isDark ? (
              <img className={css.logo} src={burger} alt="burger" />
            ) : (
              <img className={css.logo} src={burgerDark} alt="burgerDark" />
            )}
          </button>
          {isDark ? (
            <button onClick={() => setOpenLog(!openLog)} className={css.login}>
              {t("headLogBtn")}
            </button>
          ) : (
            <button onClick={() => setOpenLog(!openLog)} className={css.login1}>
              {t("headLogBtn")}
            </button>
          )}
          {isDark ? (
            <button className={css.joinUs}>{t("headJoinBtn")}</button>
          ) : (
            <button className={css.joinUs1}>{t("headJoinBtn")}</button>
          )}
        </div>
      </div>
      {openLog && <ModalLogin setOpenLog={setOpenLog} openLog={openLog} />}
    </div>
  );
}

export default Header;
