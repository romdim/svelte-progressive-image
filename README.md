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

## Result

The result looks like:

```html
<picture>
  <source 
    srcset="image-name@254.webp  254w,
            image-name@338.webp  338w,
            image-name@389.webp  389w,
            image-name@518.webp  518w,
            image-name@676.webp  676w,
            image-name@777.webp  777w,
            image-name@892.webp  892w,
            image-name@960.webp  960w,
            image-name@1036.webp 1036w,
            image-name@1280.webp 1280w,
            image-name@1338.webp 1338w,
            image-name@1382.webp 1382w,
            image-name@1784.webp 1784w,
            image-name@1920.webp 1920w,
            image-name@2560.webp 2560w"
            
    sizes="(max-width: 992px)   892px,
           (max-width: 768px)   691px,
           (max-width: 576px)   518px,
           (max-width: 375px)   338px,
           1280px"
           
    type="image/webp"
  >
  
  <img 
    srcset="image-name@254.jpg  254w,
            image-name@338.jpg  338w,
            image-name@389.jpg  389w,
            image-name@518.jpg  518w,
            image-name@676.jpg  676w,
            image-name@777.jpg  777w,
            image-name@892.jpg  892w,
            image-name@960.jpg  960w,
            image-name@1036.jpg 1036w,
            image-name@1280.jpg 1280w,
            image-name@1338.jpg 1338w,
            image-name@1382.jpg 1382w,
            image-name@1784.jpg 1784w,
            image-name@1920.jpg 1920w,
            image-name@2560.jpg 2560w"
            
    sizes="(max-width: 992px)   892px,
           (max-width: 768px)   691px,  
           (max-width: 576px)   518px,  
           (max-width: 375px)   338px,  
           1280px"                       
           
    src="image-name@676.jpg"
    
    alt="Alternative text"
    
    class="w-90-percent max-width-1280"
  >
</picture>
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
- [Practical HTML for responsive images in 2019 by Greg Ochab](https://highlandsolutions.com/blog/practical-html-for-responsive-images)
