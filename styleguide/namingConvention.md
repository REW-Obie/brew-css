# TODO: REVIEW NOTES

## Selector Modifiers


- Apply to styles that are likely to change

- [Descendant selectors](https://goo.gl/Blkft0) and multiple class selectors are used for styles that are less likely to change E.g Sizing (`.btn.S2`) and Positioning (`.tail.TR`)

- We use a standard naming convention that looks similar to CSS syntax (`block-element--modifier`) [where appropriate](https://goo.gl/HjZvuS)

### Modifier Classes

- Updated modifier classes for different use cases

- The modifier classes in brew are flexible E.g Breakpoints for positioning:

    By making use of modifiers we can wrap the selector in a media query to ensure that the float only occurs at a certain viewport width E.g

    ```css
    @media (--medium-viewport) {
        .L-md {
            float: left;
            margin-right: auto;
        }

        .R-md {
            float: right;
            margin-left: auto;
        }
    }
    ```

- To make things more flexible spacing values have been stored in [variables](https://goo.gl/7OLYg9)

- This way the spacing can be changed on a per project basis

- Also modifiers have been added to the classes for different sizes E.g

```css
.marL-sm {
    margin-left: var(--mar-sm);
}

.marL-md {
    margin-left: var(--mar-md);
}

.marL-lg {
    margin-left: var(--mar-lg);
}

.marL-xl {
    margin-left: var(--mar-xl);
}
```