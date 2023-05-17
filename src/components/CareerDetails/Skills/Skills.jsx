import React from 'react';
import scss from './Skills.module.scss'
import { useTranslation } from 'react-i18next';


function Skills(props) {
    const { t } = useTranslation()
    return (
        <div className={scss.wrapper}>
           <h1>{t("skills.job")} </h1> 
           <div>
            <div>
            <button>{t("skills.photo")}</button>
            <button>{t("skills.design")} </button>
            <button>{t("skills.art")}</button>
            <button>{t("skills.history")}</button>
            </div>
            <div>
            <button>{t("skills.museum")} </button>
            <button>{t("skills.creativ")} </button>
            <button>{t("skills.artHistory")} </button>
            </div>
           </div>
        </div>
    );
}

export default Skills;