import React from "react";
import scss from "./AboutTeam.module.scss";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import useTheme from "../../../hooks/useTheme";
import { TeamData } from "../../../constants/TeamData";

import fb from "../../../assets/team/facebookicon.svg";
import ins from "../../../assets/team/instagramicon.svg";
import link from "../../../assets/team/linkedinicon.svg";
import twit from "../../../assets/team/twittericon.svg";

function AboutTeam() {
  const { t } = useTranslation();
  const isDark = useTheme();
  return (
    <div className={scss.wrapper}>
      <header>
        <h1
          className={cn({
            dark_text: isDark,
          })}>
          {t("about.our")}
        </h1>
        <p>{t("about.agencyinfo")}</p>
      </header>
      <main className={scss.wrap_team}>
        {TeamData.map((img) => (
          <div key={img.id} className={scss.team_prof}>
            <img src={img.img} alt="" />
            <div className={scss.prof_hover}>
              <h6>{img.name}</h6>
              <p>{img.prof}</p>
              <div>
                <img src={fb} alt="" />
                <img src={ins} alt="" />
                <img src={link} alt="" />
                <img src={twit} alt="" />
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default AboutTeam;
