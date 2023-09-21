# Button

The button component is a wrapper around the native element.

## Import

```javascript
import { ButtonComponent } from "@chakra-ng/angular";
```

## Usage

### Button Sizes

Use the `size` prop to change the size of the button. You can set the value to `xs`, `sm`, `md` or `lg`.

#### Button Props

It's important to note that the `button` component is a wrapper around the native `button` element. This means that any props that are not explicitly

## Accessibility

A button has a role of `button` and is keyboard focusable by default. If you need to disable the button, use the `disabled` prop or set the `disabled`
attribute to `true` or `disabled`.

### Button Variants

Use the `variant` prop to change the variant of the button. You can set the value to `primary`, `secondary`, `success`, `warning`, `danger`, `info`,

## Theming

The button component uses the `button` theme by default. You can change the theme using the `theme` prop or the `theme` attribute.
