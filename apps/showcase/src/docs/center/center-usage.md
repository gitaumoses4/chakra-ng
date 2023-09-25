# Center

Center is a directive that centers an element's content within itself.

| Directive        | Description                                                                                                   |
|------------------|---------------------------------------------------------------------------------------------------------------|
| `center`         | Centers the content of the element.                                                                           |
| `square`         | Centers the content of the element and sets the width and height to be equal.                                 |
| `circle`         | Centers the content of the element and sets the width and height to be equal and the border-radius to be 50%. |
| `absoluteCenter` | Centers the content of the element using absolute positioning.                                                |

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
