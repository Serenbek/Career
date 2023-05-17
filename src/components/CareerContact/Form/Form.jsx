import React from 'react';
import scss from './Form.module.scss'
import MyButton from '../../UI/Buttons/MyButton'
import { useTranslation } from 'react-i18next';


function Form(props) {
    const { t } = useTranslation()

    return (
        <div className={scss.wrapper}>
            <div className={scss.title}>
                <h1>{t("form.drop")}</h1>
                <p>{t("form.p")}</p>
            </div>
            <div>
                <input type="text" placeholder={t("form.name")} />
                <input type="text" placeholder={t("form.mail")} />
                <input type="text" placeholder={t("form.subject")} />
                <input type="text" placeholder={t("form.message")} />
            </div>
            <MyButton>
                <>
                {t("form.send")}
                </>
            </MyButton>
        </div>
    );
}

export default Form;