import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import translationsEn from "../../i18n/en/translations.json";
import translationsDe from "../../i18n/de/translations.json";
import translationsUa from "../../i18n/ua/translations.json";

const getTranslationFile = (lang: string) => {
  switch (lang) {
    case "de":
      return translationsDe;
    case "ua":
      return translationsUa;
    default:
      return translationsEn;
  }
};

const findKeyByValue = (obj: Record<string, any>, value: string): string | null => {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const nestedKey = findKeyByValue(obj[key], value);
      if (nestedKey) return `${key}.${nestedKey}`;
    } else if (obj[key] === value) {
      return key;
    }
  }
  return null;
};

const useTranslationSearch = () => {
  const { t, i18n } = useTranslation();
  const [translations, setTranslations] = useState<Record<string, any>>(getTranslationFile(i18n.language));

  useEffect(() => {
    setTranslations(getTranslationFile(i18n.language));
  }, [i18n.language]);

  const getTranslationByKey = (key: string) => t(key);

  const getKeyByValue = (searchValue: string): string | null => {
    return findKeyByValue(translations, searchValue);
  };

  return { getTranslationByKey, getKeyByValue};
};

export default useTranslationSearch;
