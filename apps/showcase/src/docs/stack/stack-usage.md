# Stack

Stack is a container that lays out its children vertically or horizontally and applies a space between them.

| Directive | Description                                     |
|-----------|-------------------------------------------------|
| `stack`   | Stacks the children vertically or horizontally. |
| `hStack`  | Sets the space between the children.            |
| `vStack`  | Sets the space between the children.            |

## Import

```js
import { LayoutModule } from "@chakra-ng/angular";
```

## Usage

Stack uses a modified version of the [CSS lobotomized own selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) to add spacing
between its children.

To stack elements in horizontal or vertical direction only, use the `chakraHStack` or `chakraVStack` directives respectively. You can also use the
`chakraStack` directive and pass the direction as an input.

## Responsive Direction

You can pass responsive values to the `chakraStack` directive to change the direction of the stack at different breakpoints.

## Stack Dividers

In some scenarios, you may want to add dividers between the children of a stack. Pass the divider template to the `chakraStack` directive to add
dividers.

## Stack items horizontally

Use the `chakraHStack` directive or pass `direction` to the `chakraStack` directive to stack items horizontally. Optionally, you can pass the `align`
and `justify` inputs to align and justify the items.

## Feature cards with Stack Layout {#stack-demo}

## Feature cards with HStack Layout {#hstack-demo}
