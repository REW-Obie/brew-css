## Introduction

This document outlines the way designers and developers are expected to write their CSS and HTML. By following these guidelines we can ensure that everyone adheres to best practices and writes code that is easy to maintain.  

## Table of Contents

* [Tools](#tools)
* [Philosophy & Structure](#philosophy--structure)


## Tools

* [Postcss](https://github.com/postcss/postcss) - We use [Postcss plugins](https://github.com/Real-Estate-Webmasters/brew/blob/master/package.json#L19-L22) to parse stylesheets
* [cssnext](https://github.com/MoOx/postcss-cssnext) - The Postcss-cssnext plugin is used to transform new CSS features into usable syntax
* [stylelint](https://github.com/stylelint/stylelint) is our preferred linter for CSS. Our linting rules can be found [here](https://github.com/Real-Estate-Webmasters/brew/blob/master/.stylelintrc)
* [Gulp](https://github.com/gulpjs/gulp) is used to build the stylesheet and docs

## Philosophy & Structure

Our goal is to improve the maintainability of REW sites by adopting a modular and component driven approach to the way we write CSS.

Code should be reusable and become easier to customize over time.

In the end, our code should be easy to maintain by anyone - especially for new people entering a project.

Our style directory structure is the first step towards realizing these goals:

```
/src
    /base
    /ui
    config.css
    brew.css
    mods.css
```

We try to write CSS in its simplest form and extend its functionality using [Postcss plugins](https://github.com/Real-Estate-Webmasters/brew/blob/master/package.json#L19-L22) when required.

Continue on to [HTML Best Practices →](../html-best-practices#html-best-practices)