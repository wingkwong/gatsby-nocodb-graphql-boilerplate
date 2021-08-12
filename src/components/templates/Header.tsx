/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <div className="w-full">
        <Toolbar>
          <Typography variant="h5">{t('title')}</Typography>
          <div className="absolute right-5">
            <Button color="inherit" onClick={() => changeLanguage('en')}>
              EN
            </Button>
            <Button color="inherit" onClick={() => changeLanguage('zh')}>
              繁
            </Button>
            <Button color="inherit" onClick={() => changeLanguage('ko')}>
              한국어
            </Button>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;
