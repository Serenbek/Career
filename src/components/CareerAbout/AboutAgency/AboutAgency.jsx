import React from 'react'
import scss from './AboutAgency.module.scss'
import { useTranslation } from 'react-i18next';

const AboutAgency = () => {
	const { t } = useTranslation();
  
  return (
    <div className={scss.wrapper}>
      <section className={scss.content}>
        <div>
          <h1>
            {t("about.agency")}
          </h1>
          <p>{t("about.agencyinfo")}</p>
        </div>
        <main className={scss.content_info}>
          <div>
            <h1>2m+</h1>
            <p>{t("about.jobs")}</p>
          </div>
          <div>
            <h1>500k+</h1>
            <p>{t("about.succ")}</p>
          </div>
          <div>
            <h1>250+</h1>
            <p>{t("about.partners")}</p>
          </div>
          <div>
            <h1>1,56k+</h1>
            <p>{t("about.emplayee")}</p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default AboutAgency