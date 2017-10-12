# TODO: REVIEW NOTES

## Z-Index Scale

- The default scale is a set of variables numbered from 1 - 9 E.g:

```css
/* Base z-index scale */

:root {
  --zIndex-1: 10;
  --zIndex-2: 20;
  --zIndex-3: 30;
  --zIndex-4: 40;
  --zIndex-5: 50;
  --zIndex-6: 60;
  --zIndex-7: 70;
  --zIndex-8: 80;
  --zIndex-9: 90;
}
```

- The numbers (1 - 9) represent different stacking levels E.g `--zIndex-9` is reserved for certain use cases such as a script forcing an element to the top level and shouldn't be required on an element

- Variables can be declared based on the default scale E.g

```css
/* App specific */

#app {
    --zIndex-base: var(--zIndex-1);
    --zIndex-overlay: var(--zIndex-4);
    --zIndex-modal: var(--zIndex-8);
}

/* Component specific */

.component {
    --zIndex-icon: var(--zIndex-2);
    --zIndex-popover: var(--zIndex-4);
    --zIndex-overlay: var(--zIndex-7);
}

/* Used as a property value */

.component .ovr {

    z-index: var(--zIndex-overlay);
}
```
- The variables explicitly define which levels are currently being used

- The different levels may consist of:

```css
:root {
  --zIndex-1: 10;   /* action buttons/icons */
  --zIndex-2: 20;   /* adjacent elements */
  --zIndex-3: 30;   /* tooltip */
  --zIndex-4: 40;   /* sidebar or off-canvas*/
  --zIndex-5: 50;   /* popover menus  */
  --zIndex-6: 60;   /* loading bar */
  --zIndex-7: 70;   /* overlay/modal block  */
  --zIndex-8: 80;   /*  windows  */
  --zIndex-9: 90;   /* reserved for "force to top" via script */
}
```
### Gotchas
- Look at the z-index values below and notice where the variable is declared:
```css
Input:

.tail {
    position: absolute;
    border: 8px solid transparent;
}

.tail::after {
    --zIndex-adjacent: var(--zIndex-2);
    content: " ";
    display: block;
    position: absolute;
    border: 7px solid transparent;
    z-index: calc(var(--zIndex-adjacent) - 1);
}

Output:

.tail {
    position: absolute;
    border: 8px solid transparent;
}
.tail::after {
    content: " ";
    display: block;
    position: absolute;
    border: 7px solid transparent;
    z-index: undefined;
}
.tail::after::after {
    z-index: calc(20 - 1);
}
```
VS
```css
Input:

.tail {
    --zIndex-adjacent: var(--zIndex-2);
    position: absolute;
    border: 8px solid transparent;
}

.tail::after {
    content: " ";
    display: block;
    position: absolute;
    border: 7px solid transparent;
    z-index: calc(var(--zIndex-adjacent) - 1);
}

Output:

.tail {
    position: absolute;
    border: 8px solid transparent;
}
.tail::after {
    content: " ";
    display: block;
    position: absolute;
    border: 7px solid transparent;
    z-index: calc(20 - 1);
}
```
- Based on the code above, when working with psuedo-elements the `z-index` variable should be declared within the `.class-name` block (which acts as the `:root` in this case) and then it can be passed as a value within the psuedo-element block (`.class-name::after`)

- Above we get `z-index: undefined` because the parser checks the root (`.tail`) for the variable and it doesn't exist, so it returns `undefined` and treats the psuedo block as the root and returns : `.tail::after::after`