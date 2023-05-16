import React from 'react'
import scss from './AboutInfo.module.scss'
import { useTranslation } from "react-i18next";
import cn from "classnames";
import useTheme from '../../../hooks/useTheme';

import infoImg from '../../../assets/about/infoImg.png'


function AboutInfo() {
  const {t} = useTranslation()
  const isDark = useTheme();
  return (
    <div className={scss.wrapper}>
      <main>
        <h1
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.title2")}
        </h1>
        <p>{t("blogDetail.text")}</p>
      </main>
      <main className={scss.wrap_img}>
        <img src={infoImg} alt="ifono img" />
      </main>
      <main>
        <h1
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.title2")}
        </h1>
        <p>{t("blogDetail.text")}</p>
      </main>
    </div>
  );
}

export default AboutInfo