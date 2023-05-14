import useTheme from "../../hooks/useTheme";
import cn from "classnames";
import scss from "./Footer.module.scss";
import logo from "../../assets/images/footerImg/Logo.svg";
import logodark from "../../assets/icon/Logodark.png";
import email from "../../assets/images/footerImg/Message.svg";
import map from "../../assets/images/footerImg/Map marker.svg";
import inn from "../../assets/images/footerImg/in.svg";
import inst from "../../assets/images/footerImg/inst.svg";
import fc from "../../assets/images/footerImg/fc.svg";
import twitter from "../../assets/images/footerImg/twitter.svg";
import arrow from "../../assets/images/footerImg/arrow.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer(props) {
  const { t } = useTranslation();
const isDark = useTheme()
  return (
    <div className='container'>
      <div className={scss.wrapper_content}>
        <section className={scss.left}>
          <Link
            className={cn(scss.no_hover, {
              dark_text: isDark,
            })}
            to="/">
            {isDark ? (
              <img className={scss.logo} src={logodark} alt="" />
            ) : (
              <img className={scss.logo} src={logo} alt="" />
            )}
          </Link>
          <p
            className={cn(scss.top__p, {
              dark_btn: isDark,
            })}>
            {t("footer.p")}
          </p>
          <div
            className={cn(scss.icons, {
              dark_btn: isDark,
            })}>
            <img src={fc} alt="icon" />
            <img src={inst} alt="icon" />
            <img src={inn} alt="icon" />
            <img src={twitter} alt="icon" />
          </div>
        </section>
        <section className={scss.middle}>
          <div
            className={cn({
              dark_btn: isDark,
            })}>
            <img src={email} alt="" />
            <p>info@example.com</p>
          </div>
          <div
            className={cn({
              dark_btn: isDark,
            })}>
            <img src={map} alt="" />

            <p>{t("footer.street")}</p>
          </div>
        </section>

        <section className={scss.right}>

            <input type="text" placeholder="Email address"/>
            <button>
              <img src={arrow} alt="" />
            </button>
        </section>
      </div>
      <footer className={scss.bot}>
        <p
          className={cn({
            dark_btn: isDark,
          })}>
          {t("footer.copy")}
        </p>
        <div
          className={cn({
            dark_btn: isDark,
          })}>
          <p>{t("footer.help")}</p>
          <p>{t("footer.pp")}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
