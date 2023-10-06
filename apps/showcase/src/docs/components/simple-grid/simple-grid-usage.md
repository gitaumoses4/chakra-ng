# Simple Grid

Simple Grid provides a friendly interface to create responsive grid layouts with ease.

## Import

```typescript
import { LayoutModule } from "@chakra-ng/angular";
```

## Usage

Specifying the number of columns for the grid layout

### Responsive {#usage-responsive}

You can also make it responsive by passing array or object values into the `columns` property

### Auto-responsive Grid {#auto-responsive}

To make the grid responsive and adjust automatically without passing `columns`, simply pass the 
`minChildWidth` property to specify the `min-width` a child should have before adjusting the layout.

This uses css grid `auto-fit` and `minmax()` internally.

### Changing the spacing for columns and rows. {#change-spacing}

Simply pass the `spacing` property to change the row and column spacing between the grid items.
`SimpleGrid` also allows you to pass `spacingX` and `spacingY` properties to define the space between columns and rows respectively.

