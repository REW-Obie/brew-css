## Comments

It is considered common courtesy to think about the designer that comes after you when writing code. Your goal should be to seamlessly transmit any ideas you had when writing CSS either through clean code and/or comments.

Good comments make for good collaboration.

This means that you are most likely to benefit from the use of comments in either of these situations:

* Writing hacky code
* Writing clever code
* Using [magic numbers](https://goo.gl/Bh3VFd)
* Using obscure properties, values, or selectors e.g `-webkit-overflow-scrolling: touch`, `backface-visibility: hidden`, `<div class="hid">...</div>`, `<div class="shd">...</div>`, `<div class="swh">...</div>`
* Documenting related styles e.g `position: relative` declared on a parent because of an absolutely positioned child element.

Some rules to keep in mind when writing comments:

* Place comments on a new line above their subject
* Keep line-length to a sensible maximum e.g 80 columns
* Make liberal use of comments to break CSS code into discrete sections
* Use "sentence case" comments and consistent text indentation
* Use spaces between comment markers and text e.g `/* A basic one line comment */`
* Break long comments into multiple lines e.g
```
/**
 * A description of a long multi line comment.
 * The long description is ideal for more detailed explanations and
 * documentation. It can include example HTML, URLs, or any other information
 * that is deemed necessary or useful.
 */
```
