# lw-css-prefixer

[![npm version](https://img.shields.io/npm/v/lw-css-prefixer.svg)](https://www.npmjs.com/package/lw-css-prefixer)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/lw-css-prefixer)](https://bundlephobia.com/package/lw-css-prefixer)
[![build status](https://github.com/jsau-/lw-css-prefixer/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsau-/lw-css-prefixer/actions/workflows/ci.yml)
[![npm downloads](https://img.shields.io/npm/dm/lw-css-prefixer.svg)](https://www.npmjs.com/package/lw-css-prefixer)

**NOTE: This project is under active development and is _not_ considered
stable for production use. Exposed APIs are liable to change in major
ways before a 1.0.0 release. Expect issues if you use this in production.**

A lightweight auto-prefixer for CSS properties and values. Intended for
runtime use, e.g. in CSS-in-JS libraries where inclusion of a
fully-fledged solution like
[Autoprefixer](https://github.com/postcss/autoprefixer) is too big an
impact on your overall bundle size.

```
npm i lw-css-prefixer
```

## Code Samples

### Converting a property/value pair to a CSS string

```ts
import { prefixer } from 'lw-css-prefixer';

/*
 * To ensure the impact on your bundle size is as small as possible
 * plugins and propertyPrefixes must be loaded separately.
 *
 * If you're particularly conscious of your own bundle size it may
 * be sensible to define your own property prefix and plugins list in
 * line with your own needs, only supporting the minimum required set
 * of features.
 */
import { plugins } from 'lw-css-prefixer/dist/plugins';
import { propertyPrefixes } from 'lw-css-prefixer/dist/propertyPrefixes';

const pfx = prefixer(plugins, propertyPrefixes);

// [['-webkit-align-content', 'inherit'], ['align-content', 'inherit']]
const styles = pfx('align-content', 'inherit');

// '-webkit-align-content:inherit;align-content:inherit;'
const style = styles.map(([prop, val]) => `${prop}:${val};`).join('');
```

### With [Goober](https://github.com/cristianbote/goober)

```ts
import { setup } from 'goober';
import { prefixer } from 'lw-css-prefixer';

/*
 * To ensure the impact on your bundle size is as small as possible
 * plugins and propertyPrefixes must be loaded separately.
 *
 * If you're particularly conscious of your own bundle size it may
 * be sensible to define your own property prefix and plugins list in
 * line with your own needs, only supporting the minimum required set
 * of features.
 */
import { plugins } from 'lw-css-prefixer/dist/plugins';
import { propertyPrefixes } from 'lw-css-prefixer/dist/propertyPrefixes';

setup(React.createElement, prefixer(plugins, propertyPrefixes));
```

## Links

* [Documentation](https://jsau-.github.io/lw-css-prefixer)
* [Code Coverage Report](https://jsau-.github.io/lw-css-prefixer/coverage/lcov-report)

## Intended Browser Support

* IE10+
* Edge 12+
* Chrome 17+
* Firefox 17+
* Safari 7+

## Big missing features

* `transition`
* `grid`
* Short-hand properties (likely missing a _ton_ of shorthand behaviors)

## Contributing

While contributions are appreciated, they may be rejected if not in line
with the intended project direction. It's recommended to check before
undertaking a major piece of work and/or refactoring.

Contributions should be based off the `develop` branch, and any pull
requests made into `develop`.

### Useful Snippets

```sh
# Install dependencies
npm ci

# Run tests
npm run lint
npm run test

# Build the library
npm run build
```

## Feedback and Support

For suggestions, issues, and/or support raise a GitHub issue!

## Special Thanks

* [inline-style-prefixer](https://github.com/robinweser/inline-style-prefixer) for inspiring a large part of this library.

* This project is tested using [Browserstack](https://www.browserstack.com/).
