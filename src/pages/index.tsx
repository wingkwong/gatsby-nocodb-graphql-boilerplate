import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'components/templates/Layout';
import { useStaticQuery, graphql } from 'gatsby';

// markup
const IndexPage = () => {
  const { i18n, t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      nocodb {
        fooList {
          id
          en
          zh
          ko
        }
      }
    }
  `);
  return (
    <main>
      <Layout>
        {t('welcome')}
        <p>{data.nocodb.fooList[0][i18n.language]}</p>
      </Layout>
    </main>
  );
};

export default IndexPage;
