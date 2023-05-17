import React from 'react';
import scss from './Location.module.scss'
import { useTranslation } from 'react-i18next';


function Location(props) {
    const { t } = useTranslation()

    return (
        <div className={scss.wrap} style={{width : "100%"}}>
            <h1>{t("location.loc")}</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.3877622247555!2d74.59295271547174!3d42.84354487915743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb620e9c75a0b%3A0x75cc9f8c5cd22e08!2zMTMzINGD0LsuINCQ0YXRg9C90LHQsNC10LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1684325204050!5m2!1sru!2skg" width="100%" height="450"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Location;