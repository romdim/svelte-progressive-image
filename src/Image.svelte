<script lang="ts">
  export let name: string = 'default';
  export let widths: number[] = [
    254,
    338,
    389,
    518,
    676,
    777,
    892,
    960,
    1036,
    1280,
    1338,
    1382,
    1784,
    1920,
    2560
  ];
  export let defaultWidth: number = 676;
  // max browser width, image width percentage
  export let sizes: [number, number][] = [
    [375, 0.9],
    [576, 0.9],
    [768, 0.9],
    [992, 0.9]
  ];
  export let largestImageSize: number = 1280;
  // Should be left empty in these cases: https://www.w3.org/WAI/tutorials/images/decorative/
  export let alt: string = "";
  export let imageClass: string = null;

  const srcSetWebp: string = widths.map(width => `${name}@${width}.webp ${width}w`).join(', ') || null;
  const srcSetJpg: string = widths.map(width => `${name}@${width}.jpg ${width}w`).join(', ') || null;
  let responsiveSizes: string = sizes.map(sizeAndPercentage => {
    return `(max-width: ${sizeAndPercentage[0]}px) ${Math.round(sizeAndPercentage[0]*sizeAndPercentage[1])}px`;
  }).join(', ');
  responsiveSizes = largestImageSize ? (responsiveSizes ? responsiveSizes + `, ${largestImageSize}px` : `${largestImageSize}px`) : responsiveSizes;
</script>

<picture>
  <source 
    srcset = {srcSetWebp}
    sizes ={responsiveSizes}
    type = "image/webp"
    data-testid = "source"
  >
  
  <img 
    srcset = {srcSetJpg}
    sizes = {responsiveSizes}                    
    src = "{name}@{defaultWidth}.jpg"
    alt = {alt}
    class = {imageClass}
    data-testid="img"
  >
</picture>
