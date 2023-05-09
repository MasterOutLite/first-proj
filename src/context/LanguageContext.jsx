import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

const Language = (props) => {
  const [language, setLanguage] = useState("uk");

  const context = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={context}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default Language;
