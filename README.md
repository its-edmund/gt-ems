# Georgia Tech EMS Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/c92e0b08-4598-4e1e-8ff6-839af847ba01/deploy-status)](https://app.netlify.com/sites/gt-ems/deploys)

Repository for the GT EMS Website
## Development

### Setup

1. Run `yarn install`
2. Add `.env` file into root directory and ask me for environment variables.
3. Run `yarn start`
4. React will run a development server at `localhost:3000`, complete with hot reloading

### Commands

- `yarn start` - starts the development server at `localhost:3000`

### Other Notes

- Use `[NAME]/[ISSUE_NUMBER]-[SHORT_DESCRIPTION]` to label your feature branches

- Commit messages should follow format from [this page](https://www.conventionalcommits.org/en/v1.0.0/).

- Set up "Format on Save" on VSCode to save time

- Run lint often

## Deployment

This repository is set up with [Netlify](https://www.netlify.com/), which creates preview deployments on every PR and deploys to the [main deployment site](https://gt-ems.netlify.app/) on pushes to `main`.

## Stack

- React.js - frontend components
- GraphQL - API Calls
- Contentful - content management
- eslint - linting
- prettier - formatting
- yarn - package management
