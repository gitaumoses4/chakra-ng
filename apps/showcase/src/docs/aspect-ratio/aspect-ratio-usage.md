# Aspect Ratio

Aspect Ratio is a utility directive that allows you to maintain the aspect ratio of an element. <br/><br/>

| Directive     | Description                           |
|---------------|---------------------------------------|
| `aspectRatio` | Sets the aspect ratio of the element. |

## Import

```typescript
import { LayoutModule } from "@chakra-ng/angular";
```

## Embedding Content

### Embed Video

To embed a video with a specific aspect ratio, use an iframe with src pointing to the link of the video.

Pass `maxWidth` to `[chakraStyles]` to control the width of the video

### Embed Image

Here's how to embed an image that has a 4 by 3 aspect ratio

### Embed Map

Here's how to embed a responsive Google map using `[aspectRatio]`. To make the map take up the entire width, we can ignore the `maxWidth` property.
