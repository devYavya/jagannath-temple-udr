import React from "react";
import "../../Styles/About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1 className="about-title">{t("about_title")}</h1>
      <p className="about-description">{t("about_description")}</p>

      <h2 className="about-subtitle">{t("spiritual_significance")}</h2>
      <p>{t("spiritual_text")}</p>

      <h2 className="about-subtitle">{t("architecture")}</h2>
      <p>{t("architecture_text")}</p>

      <h2 className="about-subtitle">{t("open_to_all")}</h2>
      <p>{t("open_text")}</p>

      <h2 className="about-subtitle">{t("our_mission")}</h2>
      <p>{t("mission_text")}</p>
    </div>
  );
}

export default About;
