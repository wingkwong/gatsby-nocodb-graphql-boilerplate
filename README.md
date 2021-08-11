# Gatsby with NocoDB (GraphQL) Boilerplate

This boilerplate is based on [gatsby-template](https://github.com/nandiheath/gatsby-template) originally and further integrated with [NocoDB](https://github.com/nocodb/nocodb) GraphQL.

# Features

- Integrated with NocoDB
- Integrated with i18n (with examples - EN, ZH and KO)
- Integrated with Google Analytics
- Integrated with frameworks such as Material UI, Styled Component & TailwindCSS
- Code Linting

# Prerequisites

- Node.js 12.13.0 or higher

    If you have ``nvm``, you can run ``nvm install 12.13.0`` to install and switch to the minimum version

# Getting Started

## Setup .env

```
cp .env.sample .env
# update .env
```

## Run locally 

```
npm run dev
```

View ``gatsby-nocodb-boilerplate`` in the browser

```
http://localhost:8000/
```

View GraphiQL

```
http://localhost:8000/___graphql
```

## Build

```
npm run build
```