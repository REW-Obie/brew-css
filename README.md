# BREW

BREW is a front-end CSS/HTML framework for building real estate websites.

[![build status](https://git.rewhosting.com/rew-core/brew/badges/master/build.svg)](https://git.rewhosting.com/rew-core/brew/commits/master)
[![coverage report](https://git.rewhosting.com/rew-core/brew/badges/master/coverage.svg)](https://git.rewhosting.com/rew-core/brew/commits/master)

#### Installation

```bash
$ npm install
```


### Documentation
[React Styleguidist](https://github.com/styleguidist/react-styleguidist) is used to create the style guide. 

The [`styleguide.config.js`](/styleguide.config.js) file contains the settings.

The [`styleguide/`](/styleguide) is generated using the commands:

```bash
$ npm run docs:server # start doc server
$ npm run docs:build  # generate docs
```

#### Building assets

[Laravel Mix](https://github.com/JeffreyWay/laravel-mix) is used as a configuration wrapper around [Webpack](https://github.com/webpack/webpack).

The [`webpack.mix.js`](/webpack.mix.js) file defines exactly how the assets are compiled.

The [`dist/`](/dist) source code is generated using the commands:

```bash
$ npm run build # dev build
$ npm run ship # prod build
```

#### Watching for changes
Watch for changes made to [`src/*`](/src) and automatically re-build as needed:

```bash
$ npm run watch
```

### To-Do
 - [] Import BREW stylesheets
 - [] Define configuration variables
 - [] Setup style guide & documentation

#### Style guide generators
 - https://github.com/davidhund/styleguide-generators
 - http://livingstyleguide.devbridge.com/
 - https://react-styleguidist.js.org/
 - http://atomicdocs.io/
 - http://fbrctr.github.io/
 - http://fractal.build/
 - https://holidaypirates.github.io/nucleus/
 - http://hugeinc.github.io/styleguide/
 - https://sinnerschrader.github.io/patternplate-ui/
