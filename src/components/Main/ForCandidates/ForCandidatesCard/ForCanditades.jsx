import React from "react";
import scss from "./ForCandidatesCard.module.scss";
import { useTranslation } from "react-i18next";

function ForCandidatesCard({ image, step, title, desc }) {
  const { t } = useTranslation()
  return (
    <div className={scss.card}>
      <img src={image} alt="img" className={scss.card__img} />
      <div className={scss.card__text}>
        <p>{t("card.step")} {step}</p>
        <div className={scss.card__disc}>
          <h1>{t("card.title")}</h1>
          <p>{t("card.desc")}</p>
        </div>
      </div>
    </div>
  );
}

export default ForCandidatesCard;
