# Flex

Flex is Box with display set to flex and comes with helpful style shorthand.

## Import

```javascript
import { FlexLayout } from "@quillar/angular";
```

## Usage

Using the Flex components, here are some helpful shorthand props:

- `flexDirection` is `direction`
- `flexWrap` is `wrap`
- `flexBasis` is `basis`
- `flexGrow` is `grow`
- `flexShrink` is `shrink`
- `alignItems` is `align`
- `justifyContent` is `justify`

While you can pass the verbose props, using the shorthand can save you some time.

## Using the Spacer

The `Spacer` component is a simple `div` with `flex-grow: 1` set. This means that it will take up all available space in the container.