import React, { useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * this is a barebones component to allow changing the language at will
 * the languages are hard-coded as i have yet to figure out a clever way to get them (need to read the api better and not with one eye closed and one semi closed)
 * 
 */
const TranslationChanger = () => {
  const availableTranslations = ["en", "es", "pt"];
  const buttonLabels = [
    "Click me to change the language",
    "Click para mudares a linguagem",
    "Haz clic para cambiar el idioma",
  ];
  const { i18n } = useTranslation(["translation"]);
  const [currentTranslation, setCurrentTranslation] = useState(0);
  const changeLanguage = () => {
    if (currentTranslation >= 2) {
      setCurrentTranslation(0);
    } else {
      setCurrentTranslation(currentTranslation + 1);
    }
    i18n.changeLanguage(availableTranslations[currentTranslation]);
  };

  return (
    <>
      <button onClick={() => changeLanguage()}>
        {buttonLabels[currentTranslation]}
      </button>
    </>
  );
};

export default TranslationChanger;
