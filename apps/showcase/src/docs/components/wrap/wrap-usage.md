# Wrap

Wrap is a layout used to add space between elements and wraps automatically if there isn't enough space.

## Import

```typescript
import {LayoutModule} from "@chakra-ng/angular";
```

## Usage

Think of `wrap` as a flex box container with `flex-wrap` and `spacing` support. It works really well with things like
dialog buttons, tags and chips.

In the example below, you see that the last `Box` is wrapped to the next line because there isn't enough space.

## Change the spacing

Pass the `spacing` prop to apply consistent spacing between each child, even if it wraps

> Pro Tip: You can pass responsive values for the `spacing`

## Change the alignment

### Cross Axis

Pass the `align` prop to change the alignment of the child along the cross axis.

### Main Axis

Pass the `justify` prop to change the alignment of the child along the main axis.
