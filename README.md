# Rholang 🥳

This is the repository of the website [https://rholang.github.io/](https://rholang.github.io/).

# Pre-requisites

- Linux OS / Windows / Mac
- min. 8 GB RAM
- Node 12
- install globally
  - npm

# Quick install

- fork this repository and open with vscode (cd into /rholang.github.io/)
- \$ npm install
- \$ npm run develop
  - website is locally available

# Deploy

- Deploy to Github (gh-pages)

  - your github repository needs two branches: source and master
  - \$ npm run deploy

## Folder structure

- /content
  - all markdown files belong here
  - ! image size not larger than 2 MB
- /src/data
  - yaml files for indexing markdown files

## Algolia Docsearch

- fork from https://github.com/rholang/AlgoliaSearchRholang and follow instructions

# Contributing

This community driven project should bring all the awesome resources for Rholang and Rchain together. Feel free to make a Pull Request.

- if you only want to change some existing file, just edit the markdown file in /content
- if you want to add a markdown file, you have to add it to the yaml file in /src/data
- when the pull request is approved the website is automatically rebuild with CircleCI
