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


const findValueByKey = (
  obj: Record<string, any>,
  searchKey: string
): string | null => {
  let foundValue: string | null = null;

  const search = (current: any, path: string[]) => {
    if (typeof current !== 'object' || current === null) return;

    for (const key in current) {
      const newPath = [...path, key];
      const fullKey = newPath.join('.');

      if (key === searchKey || fullKey === searchKey) {
        if (typeof current[key] === 'string') {
          foundValue = current[key];
          return;
        }
      }

      if (typeof current[key] === 'object') {
        search(current[key], newPath);
      }
    }
  };

  search(obj, []);
  return foundValue;
};

const useTranslationSearch = () => {
  const { t, i18n } = useTranslation();
  const [translations, setTranslations] = useState<Record<string, any>>(getTranslationFile(i18n.language));

  useEffect(() => {
    setTranslations(getTranslationFile(i18n.language));
  }, [i18n.language]);

  const getTranslationByKey = (key: string) => {
    const fallback = t(key, { defaultValue: '' });
    const found = findValueByKey(translations, key);
    return found || fallback || key;
  };


  const getKeyByValue = (searchValue: string): string | null => {
    return findKeyByValue(translations, searchValue);
  };

  return { getTranslationByKey, getKeyByValue};
};

export default useTranslationSearch;
