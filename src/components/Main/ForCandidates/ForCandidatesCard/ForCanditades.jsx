import React from "react";
import scss from "./ForCandidatesCard.module.scss";

function ForCandidatesCard({ image, step, title, desc }) {
  return (
    <div className={scss.card}>
      <img src={image} alt="image" className={scss.card__img} />
      <div className={scss.card__text}>
        <p>Step {step}</p>
        <div className={scss.card__disc}>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ForCandidatesCard;
