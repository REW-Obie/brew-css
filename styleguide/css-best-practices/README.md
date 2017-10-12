## CSS Best Practices

To write CSS that will be easier to customize over time we need to adopt best practices. Some practices to take note of include:

* [Selector Specificity](#tools)
* [Location Dependency](#location-dependency)
* [Class Naming Convention](#class-naming-convention)
* [Format](#format)

## Selector Specificity

The type of [selector](http://goo.gl/un4tz) used to style an element is an important factor in terms of future customization and reusability.

Write selectors that have a low [specificity](https://goo.gl/F8rZC0) so that your styles are easy to override later.

Avoid nesting and using complex selectors (`#primary_nav ul li a {...}`) whenever possible.

This means that you should always favor the use of a `.class` selector to apply styles and avoid `#id`'s in your stylesheets

You may also want to avoid over qualifying selectors when it is not necessary E.g `a.btn` `a.btn.strong` `button.strong`

## Location Dependency

You should be aware of any side effects that may occur when writing CSS selectors and ensure that you apply styles directly to a given element.

Side effects in CSS occur when an element gets styles that were intended to be applied to another element. In other words, your styles affect elements that you didn't intend to style. E.g

```css
.article .title {
    border-bottom: 1px solid;
    font-size: 22px;
}

...

.widget .title {
    color: gray;
}
```
```html
<article class="article">
    <h2 class="title">Article Title</h2>
    <div class="content">
        <p>Some paragraph text</p>
        ...
        <div class="widget">
            <h2 class="title">Widget Title</h2>
            <div>...</div>
        </div>
    </div>
</article>
```
In the example above, the widget title will have a `border-bottom` and `font-size` value of 22px though this may not have been the intention when writing the CSS. A simple solution would be to use a [naming convention](#class-naming-convention) E.g `.article-title` `.widget-title`.

Don't rely on the location of an element in HTML when applying styles.

These patterns should be avoided:

```css
#primary_nav .menu {...}
#head nav .top-level > a {...}
#sub-quicksearch .ac-input {...}
.search > ul > li > a {...}
#communities_1 .community-image {...}
#communities_1 table {...}
.mediaBodyRight .actions a {...}
.articleset article .body .details {...}
.articleset .listing .mediaImg {...}
.pg-agents .agents div.details h4 {...}
```

Because you want to be explicit when writing selectors and also you want some of those styles to be reusable in other parts of your project.

For instance one of the simpler looking selectors above: `#sub-quicksearch .ac-input` applies styles to the autocomplete field within an element with `#id` sub-quicksearch. But what if you have another autocomplete field on the site that's not in `sub-quicksearch`?

## Class Naming Convention

We use a standard naming convention that looks similar to CSS syntax (`block-element--modifier`) [where appropriate](https://goo.gl/HjZvuS)

This naming convention adopts [key concepts from BEM methodology](https://goo.gl/f0d8vF) and is intended to eliminate any side effects that are likely to occur due to the global nature of CSS.

A block may be referred to as the primary component that you intend to style E.g `.mnu`

An element is a sub-component that exists within the block E.g `.mnu-item`

A modifier is applied as a modification of a block E.g `.mnu .mnu--inline`

## Format

To ensure that stylesheets are easier to read we follow a specific format when writing CSS.

We also avoid the use of nested selectors.

Vendor prefixing is handled by [postcss-autoprefixer plugin](https://goo.gl/N9WXgU) and so we avoid writing any vendor prefixes in our stylesheets

You shouldn't need to use `!important` for any rule. If you find yourself in a situation where you think it may be required think about refactoring the related code.

All format rules can be found in the [lint configuration file](https://github.com/Real-Estate-Webmasters/brew/blob/master/.stylelintrc) but some notable formats include:

* Use four spaces to indent your code E.g

```css
.selector {
    property: value;
}
```
* Utilize spaces to make your code easier to read E.g

```css
/* Do */
.selector {
    overflow: visible;
    background-color: rgba(255, 0, 0, 0.5);
    transform: translate(-50%, -50%);
}

.selector {
    overflow: visible;
    background-color: rgba(255, 0, 0, 0.5);
    transform: translate(-50%, -50%);
}

/* Don't */
.selector{
    overflow:visible;
    background:rgba(255,0,0,0.5);
    transform:translate(-50%,-50%);
}
.selector{
    overflow:visible;
    background:rgba(255,0,0,0.5);
    transform:translate(-50%,-50%);
}
```
* Break multiple selectors onto a new line E.g

```css
/* Do */
.selector1,
.selector2 {
    overflow: visible;
}

/* Don't */
.selector1, .selector2 {
    overflow: visible;
}
```

* Avoid redundant values whenever possible E.g

```css
/* Do */
.selector {
    margin: 2px 5px;
    color: #eee;
}

/* Don't */
.selector {
    margin: 2px 5px 2px 5px;
    color: #eeeeee;
}
```
Continue on to [Customization and Theming Best Practices →](../customization-and-theming-best-practices/README.md)