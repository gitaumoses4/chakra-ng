# Center

Center is a directive that centers an element's content within itself.

## Import

```typescript
import { LayoutModule } from "@chakra-ng/angular";
```

## Usage

Put any child element inside a `div` with the `center` directive to center it.

### With Icons

Center can be used to create frames around icons or numbers.

### Square and Circle

To reducer boilerplate, we've created the `[square]` and `[circle]` directives that automatically center the content.

### Absolute Center

Used to horizontally and vertically center an element relative to its parent dimensions. Uses the `position: absolute` CSS property. 
Takes `axis` property which could be "both" (default), "horizontal" or "vertical".
