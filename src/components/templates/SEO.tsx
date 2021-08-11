/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { PageProps } from 'gatsby';
import { useTranslation } from 'react-i18next';

type MetaProps = {
  [key: string]: string;
};

interface SEOProps extends PageProps {
  description: string;
  meta: MetaProps[];
  title: string;
}

function SEO({ description, meta, title }: SEOProps) {
  const metaDescription = description;
  const { t } = useTranslation();

  const defaultMeta: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: t('author'),
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{}}
      title={title}
      titleTemplate="%s | Title"
      meta={defaultMeta.concat(meta || [])}
    />
  );
}

export default SEO;
