const dotenv = require('dotenv');
const csv2json = require('csvtojson');
const crypto = require('crypto');
const _ = require('lodash');
const fs = require('fs');

// Load the .env file if exists
dotenv.config();

exports.sourceNodes = async ({ actions, cache }) => {
  const { createNode } = actions;

  const data = await fs.readFileSync(`locale.csv`).toString();
  const records = await csv2json().fromString(data);

  const languages = Object.keys(_.omit(records[0], 'key'));
  const translations = {};
  languages.forEach((lang) => {
    translations[lang] = {};
  });

  records.forEach((r) => {
    languages.forEach((lang) => {
      translations[lang][r.key] = r[lang];
    });
  });

  createNode({
    key: 'languages',
    value: languages,
    id: `config-lang`,
    parent: null,
    children: [],
    internal: {
      type: 'Config',
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(translations))
        .digest('hex'),
    },
  });

  createNode({
    ...translations,
    id: `translations`,
    parent: null,
    children: [],
    internal: {
      type: 'Translation',
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(translations))
        .digest('hex'),
    },
  });

  languages.forEach((lang) => {
    fs.mkdirSync(`locales/${lang}`, { recursive: true });
    fs.writeFileSync(
      `locales/${lang}/translation.json`,
      JSON.stringify(translations[lang])
    );
  });

  // do all my sourceNode-y stuff.
  await cache.set('languages', languages);
};

exports.onCreatePage = async ({ cache, page, actions }) => {
  const languages = await cache.get('languages');
  const { createPage, createRedirect, deletePage } = actions;
  return new Promise((resolve) => {
    //
    deletePage(page);

    languages.forEach((lang, index) => {
      const isDefaultLang = index === 0;
      const path = isDefaultLang ? page.path : `/${lang}${page.path}`;
      createPage({
        ...page,
        path,
        context: {
          ...page.context,
          locale: lang,
        },
      });
      if (isDefaultLang) {
        createRedirect({
          fromPath: `/${lang}${page.path}`,
          toPath: page.path,
        });
      }
    });

    resolve();
  });
};
