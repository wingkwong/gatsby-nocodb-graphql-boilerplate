import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactChildren;
  locale: string;
  ssr: boolean;
}

export default (props: Props) => {
  const { children, locale, ssr } = props;
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [i18n, locale]);

  // since ssr does not have useEffect.
  // a little bit hacky but welcome for a better solution
  if (ssr && i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  return <>{children}</>;
};
