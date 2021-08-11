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
        indexList(condition: { key: { eq: "title" } }) {
          en
          key
          zh
          id
        }
      }
    }
  `);
  return (
    <main>
      <Layout>
        {t('welcome')}
        <br />
        {data.nocodb.indexList[0][i18n.language]}
      </Layout>
    </main>
  );
};

export default IndexPage;
