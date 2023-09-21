# Stack

Stack is a container that lays out its children vertically or horizontally and applies a space between them.

## Import

```js
import { LayoutModule } from "@chakra-ng/angular";
```

## Usage

Stack uses a modified version of the [CSS lobotomized own selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) to add spacing
between its children.

To stack elements in horizontal or vertical direction only, use the `qHorizontalStack` or `qVerticalStack` directives respectively. You can also use
the `qStack` directive and pass the direction as an input.

## Responsive Direction

You can pass responsive values to the `qStack` directive to change the direction of the stack at different breakpoints.

## Stack Dividers

In some scenarios, you may want to add dividers between the children of a stack. Pass the divider template to the `qStack` directive to add dividers.

## Stack items horizontally

Use the `qHorizontalStack` directive or pass `direction` to the `qStack` directive to stack items horizontally. Optionally, you can pass the `align`
and `justify` inputs to align and justify the items.

## Feature cards with Stack Layout {#stack-demo}

## Feature cards with HStack Layout {#hstack-demo}
