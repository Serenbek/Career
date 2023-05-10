import React from "react";
import cn from "classnames";
import css from "./ModalLogin.module.scss";
import { useTranslation } from "react-i18next";
import fb from "../../../assets/icon/fbDark.png";
import ins from "../../../assets/icon/insDark.png";
import inDark from "../../../assets/icon/inDark.png";
import twitDark from "../../../assets/icon/twitDark.png";
import face from "../../../assets/icon/facebook.svg";
import insta from "../../../assets/icon/insta.svg";
import IN from "../../../assets/icon/in.svg";
import twitter from "../../../assets/icon/twitter.svg";
import useTheme from "../../../hooks/useTheme";

const ModalLogin = ({setOpenLog, openLog}) => {
  const isDark = useTheme()
  const { t } = useTranslation(); 
  return (
    <div
      className={cn(css.wrapper_log, {
      dark: isDark,
      })}
    >
      <h3>
        {t("modalLogin.title")}
        <button
          className={cn({
            card_tour: isDark,
          })}
          onClick={() => setOpenLog(!openLog)}
        >
          X
        </button>
      </h3>
      <p>{t("modalLogin.loginTit")}</p>
      <input
        className={cn({
          dark_inp: isDark,
        })}
        type="text"
        placeholder={t("modalLogin.placholText")}
      />
      <p>{t("modalLogin.pass")}</p>
      <input
        className={cn(css.inpBorders, {
          dark_inp: isDark,
        })}
        placeholder={t("modalLogin.pass")}
        type="password"
      />
      <p>{t("modalLogin.or")}</p>
      {isDark ? (
        <div className={css.socials}>
          <img src={fb} alt="fb" />
          <img src={ins} alt="ins" />
          <img src={inDark} alt="inDark" />
          <img src={twitDark} alt="twitDark" />
        </div>
      ) : (
        <div className={css.socials}>
          <img src={face} alt="face" />
          <img src={insta} alt="ins" />
          <img src={IN} alt="IN" />
          <img src={twitter} alt="twitter" />
        </div>
      )}
      <button>{t("modalLogin.login")}</button>
    </div>
  );
};

export default ModalLogin;
