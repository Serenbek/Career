import React from 'react'
import { useTranslation } from 'react-i18next';
import cn from 'classnames'
import scss from './AboutHeader.module.scss'
import useTheme from '../../../hooks/useTheme';

const AboutHeader = () => {
	const { t } = useTranslation();
	const isDark = useTheme();
  return (
    <div className={scss.wrapper}>
      <section>
        <h5>
          {t("about.subtitle")}
        </h5>
        <h1
          className={cn({
            dark_text: isDark,
          })}>
          {t("about.title")}
        </h1>
      </section>
      <section>
        <p>
          {t("blogDetail.text")}
        </p>
      </section>
      <section>
        <p>
          {t("blogDetail.text")}
        </p>
      </section>
    </div>
  );
}

export default AboutHeader