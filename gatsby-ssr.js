import 'styles/global.css';
import React from 'react';
import 'lib/i18n';
import I18nWrapper from 'components/templates/I18nWrapper';

export const wrapPageElement = ({ element, props }) => {
  return (
    <I18nWrapper path={props.uri} locale={props.pageContext.locale} ssr>
      {element}
    </I18nWrapper>
  );
};
