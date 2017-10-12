## HTML Best Practices

To ensure that our markup is easy to maintain we need to be aware of some of these practices when writing HTML:

* [Semantics](#semantics)
* [Accessibility](#accessibility)
* [Format](#format)

## Semantics

Proper HTML5 tags should be used to structure different areas (`header`, `main`, `section`, `footer`, etc.) in order to create a well-structured document outline.

```html
<body>
    <header>
        <a href="#">
            <img src="logo.png" alt="" />
        </a>
        <h1>Main Title</h1>
    </header>
    <main>
        <section>
            <h1>Another Title</h1>
            <time datetime="2017-03-01 23:00">X days ago</time>
            <p>Content...</p>
        </section>
        <section>
            <h1>Another Title</h1>
            <figure>
                <img src="image.png" alt="" />
                <figcaption>A description of image.png</figcaption>
            </figure>
            <p>Content...</p>
        </section>
        <aside>
            <nav>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </nav>
        </aside>
        <footer>
            <p>Content...</p>
        </footer>
    </main>
</body>
```

##### Links v. Buttons

If a piece of content (text, CTA, image) leads the user to another section or page you should use an anchor link: `<a href="#">...</a>`.

If you wish to perform an action after a user interacts with a piece of content (E.g clicks an element) you should use a `<button>...</button>`.

## Accessibility

A first step towards making content accessible is to make use of proper HTML tags as described in the [semantics section](#semantics) above.

To prevent content from displaying in all presentations you can make use of the `hidden` attribute. E.g `<p hidden>Some content</p>`. By default this element would be hidden in the browser and screen readers.

Make use of [ARIA attributes](http://w3c.github.io/aria-in-html/) when appropriate to indicate state changes or associate related elements on the page. Though it is important to avoid redundant use of these attributes. E.g `<div hidden aria-hidden="true" />` or `<button role="button">Submit</button>`.

## Format

To ensure that code is easier to read use four spaces to indent your HTML.

```html
<section>
    <h1>Title</h1>
    <figure>
        <img src="image.png" alt="" />
        <figcaption>A description of image.png</figcaption>
    </figure>
    <p>Content...</p>
    <footer>
        <ul>
            <li>...</li>
            <li>...</li>
        </ul>
    </footer>
</section>
```

Continue on to [CSS Best Practices →](../css-best-practices/#css-best-practices)