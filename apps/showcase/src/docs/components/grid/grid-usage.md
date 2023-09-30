# Grid

Gird is a layout for managing items in a grid.

## Import

```typescript
import {LayoutModule} from '@chakra-ng/angular';
```

## Template Columns

Here's an example of using grid template columns and applying a gap or space between the grid items.

## Spanning Columns

In some layouts, you may need certain grid items to span specific amount of columns or rows instead of an even
distribution.
To achieve this, you need to pas the `colSpan` property to the grid item and also the `rowSpan` property for row
spanning.
You also need to specify the `templateColumns` and `templateRows` properties on the grid container.

## Starting and ending lines {#start-end-lines}

Pass the `colStart` and `colEnd` prop to the grid item to specify where the item should start and end.

## Template Areas

The `templateAreas` prop specifies areas within the grid layout. Use template literals to name the area. Now you can
reference the area by passing `area` prop in the grid item.

