# svelte-progressive-image

Progressive image component using Svelte (granted that you already have the images).

[Demo](https://romdim.github.io/svelte-progressive-image/)

## Installation

Run `yarn add -D svelte-progressive-image`.

Then use it in your svelte files like that:

```svelte
<script>
  import Image from "svelte-progressive-image";

  let name = 'image-name';
</script>

<Image {name}>
```

## API

Check the `Image.svelte` for the exported variables, their types and defaults.
These include:

- The `name` of the image
- The `widths` that are used to create the srcSet attribute.
- The `defaultWidth` of the img to be shown if nothing else works.
- The `sizes` that makes the max-width media query for the screen-image.
- The `largestImageSize` which is the image size for the max window size.
- The `alt` attribute for alternative text for the image.
- The `imageClass` for any class that we need to style our component.

### Based upon

- [Opinionated Svelte Component Template](https://github.com/romdim/svelte-component-template)
- [Unsplash Svelte image by Ferenc Almasi](https://unsplash.com/photos/fhAfLtHToCs)
- [Practical HTML for responsive images in 2019 by Greg Ochab](https://highlandsolutions.com/blog/practical-html-for-responsive-images-in-2019)
