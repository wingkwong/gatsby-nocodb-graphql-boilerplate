/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';

interface Props {
  children: React.ReactChildren;
}

const Layout = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="items-center flex flex-col h-full">
      <Header siteTitle={t('title')} />
      <div className="p-8 w-full lg:w-1/2 flex flex-col">
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
