# Button

The button component is a wrapper around the native element.

## Import

```javascript
import {ButtonComponent} from "@chakra-ng/angular";
```

## Usage

### Button Sizes

Use the `size` property to change the size of the button. The default size is `md`. You can set the value
to `xs`, `sm`, `md` or `lg`.

### Button Variants

Use the `variant` property to change the visual type of the button. You can set the value to `solid`, `outline`, `ghost`
or `link`.

### Button Colors

Use the `colorScheme` property to change the color of the button. You can set the value to any of the color scales from
your design system,
like `whiteAlpha`, `blackAlpha`, `gray`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `cyan`, `purple`, `pink` or
your custom color scale.

### Button with Icon {#button-icon}

You can add left and right icons to the button using the `leftIcon` and `rightIcon` properties.

### Button loading state {#button-loading}

Pass the `isLoading` property to show its loading state. By default, the button will show a spinner and leave the
button's width unchanged.

You can also pass the `loadingText` property to show a spinner and the loading text.

#### Customizing the spinner {#custom-spinner}

You can customize the spinner by passing a `spinner` property. The value should be a template ref of the spinner.

#### Spinner placement

When a `loadingText` is present, you can change the placement of the spinner element to `start` or `end`. It's `start`
by default.

### Social Buttons

We've included the colors for common social networks like Facebook, Twitter, WhatsApp, LinkedIn, and more. You can use
the `colorScheme` property to change the color of the button.
