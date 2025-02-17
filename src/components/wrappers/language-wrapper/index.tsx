import { Fragment, ReactNode, Suspense, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { DEFAULT_LANG, STORAGE_KEY, SUPPORTED_LANGUAGES } from '../../../common/constants.ts'

export const LanguageWrapper = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState(i18next.language);

  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    const isLangValid = SUPPORTED_LANGUAGES.some(item => item === lang);
    const cleanPath = location.pathname.replace(/^\/(en|ua|de)/, "");

    if (!isLangValid) {
      navigate(`/${savedLang}/${cleanPath || '/'}`, { replace: true });
      return;
    }

    if (i18next.language !== lang) {
      i18next.changeLanguage(lang).catch(console.error);
    }

    localStorage.setItem(STORAGE_KEY, lang);
    setCurrentLang(lang);
  }, [lang, location.pathname, navigate]);

  useEffect(() => {
    i18next.on("languageChanged", setCurrentLang);
    return () => {
      i18next.off("languageChanged", setCurrentLang);
    };
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <Suspense fallback={<div>Loading translations...</div>}>
        <Fragment key={currentLang as string}>{children}</Fragment>
      </Suspense>
    </I18nextProvider>
  );
};
