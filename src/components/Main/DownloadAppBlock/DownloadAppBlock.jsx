import useTheme from "../../../hooks/useTheme";
import cn from "classnames";
import scss from "./DownloadAppBlock.module.scss";
import bigPhone from "../../../assets/images/downloadApp/07.svg";
import apple from "../../../assets/images/downloadApp/apple.svg";
import googleP from "../../../assets/images/downloadApp/googleP.svg";
import { useTranslation } from "react-i18next";

function DownloadAppBlock() {
  const { t } = useTranslation();
  const isDark = useTheme();
  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        <div className={scss.info}>
          <h1
            className={cn({
              dark_text: isDark,
            })}>
            {t("downloadApp")}
          </h1>
          <p
            className={cn({
              dark_text: isDark,
            })}>
            {t("findingNewJob")}
          </p>
        </div>
        <div className={scss.btns}>
          <button>
            <img src={apple} alt="" />
            <div className={scss.btn__info}>
              <p>{t("downloadFrom")}</p>
              <h1>Apple Store</h1>
            </div>
          </button>
          <button>
            <img src={googleP} alt="" />
            <div className={scss.btn__info}>
              <p>{t("downloadOn")}</p>
              <h1>Google Play</h1>
            </div>
          </button>
        </div>
        <div className={scss.content_img}>
          <img className={scss.main__img} src={bigPhone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DownloadAppBlock;
