# Container

Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.

## Import

```typescript
import {LayoutModule} from "@chakra-ng/angular";
```

## Usage

To contain any piece of content, simply wrap it with an element with `container` directive.

## Container Size

By default, the `container` sets the `maxWidth` of the content to 60 characters (`60ch`).
You can customize this by passing custom maxWidth value or changing the size tokens defined in `theme.sizes.container`

> - About the default value: The `ch` unit is a relative unit defined by the
>   rendered typeface's "0" character width. This width varies by the shape and
>   style of the font.
> - If you are curious about the reason for this default value of `60`
>   characters, consider this explanation about
>   [line length](https://betterwebtype.com/articles/2019/06/16/5-keys-to-accessible-web-typography/#line-length)
>   from Better Web Type.

## Centering the children {#centering}

In some cases, the width of the content can be smaller than the container's
width. You can use the `centerContent` prop to center the content. It renders a
flexbox with `flexDirection` set to `column` and `alignItems` set to `center`.
