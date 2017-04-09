# Style Guider Demo

[![Greenkeeper badge](https://badges.greenkeeper.io/webdevian/style-guider-demo.svg)](https://greenkeeper.io/)
[![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Code Climate][codeclimate-image]][codeclimate-url]
> [View the demo](https://webdevian.github.io/style-guider-demo/)

A web framework and style guide built with Style Guider [NPM](https://www.npmjs.com/package/generator-style-guider) [GitHub](https://github.com/webdevian/generator-style-guider)

## Setup

Clone the project and use `npm install` to install dependencies

## Scripts

A few gulp scripts are included

### Build

Compile the JS/CSS and build the style guide html with `npm run build`. The documentation with live preview is generated as `index.html`

### Lint

Check the code style of JS, CSS and Pug files with `npm run lint`

### Watch

Combine the build and lint tasks and watch for file changes with `npm start`. A local server is also launched for previewing the style guide.

### Compile JS/CSS for distribution

Compile the JS/CSS in the dist folder with `npm run dist`

## Adding new components

To create new components, [Style Guider](https://www.npmjs.com/package/generator-style-guider) is required. First install it:

```bash
npm install -g yo
npm install -g generator-style-guider
```

Then add a new component using the prompt with:

```bash
yo style-guider:component
```

## Git Hooks

There are pre-commit and pre-push hooks for linting, and building the minified files in `dist/`

## Incorporating this framework in other projects

This project also acts as a web framework, with re-usable SCSS mixins, pug mixins and front-end javascript that can be included in other projects. Just add it as an npm dependency so it is stored in `node_modules` then the mixin endpoints (or minified dist files) will be available to your project code. 


[travis-image]: https://travis-ci.org/webdevian/style-guider-demo.svg?branch=master
[travis-url]: https://travis-ci.org/webdevian/style-guider-demo
[daviddm-image]: https://david-dm.org/webdevian/style-guider-demo.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/webdevian/style-guider-demo
[codeclimate-image]: https://codeclimate.com/github/webdevian/style-guider-demo/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/webdevian/style-guider-demo
