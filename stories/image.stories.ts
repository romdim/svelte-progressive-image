import Image from '../src/index';

const widths = [254, 338, 389, 518, 676, 777, 892, 960, 1036, 1280, 1338, 1382, 1784, 1920, 2560];

export default {
  title: 'Image',
  Component: Image,
  argTypes: {
    largestImageSize: {
      name: 'Largest Image Size',
      description: 'The image size that is used when window width > 992px',
      table: {
        type: { },
        defaultValue: {
          summary: 1280
        },
      },
      control: { 'type': 'number' }
    },
    widths: {
      name: 'Widths',
      description: 'The widths breakpoints that are used in order to create the image widths like: `hello@254.jpg 254w, hello@338.jpg 338w, ...`',
      table: {
        type: { },
        defaultValue: {
          summary: widths
        },
      },
      defaultValue: widths,
      control: {
        'type': 'check',
        'options': widths
      }
    }
  },
};

export const DefaultImage = (args) => ({
  Component: Image,
  props: {
    name: 'ferenc-almasi-unsplash/svelte',
    ...args
  }
});

export const SmallImage = (args) => ({
  Component: Image,
  props: {
    name: 'ferenc-almasi-unsplash/svelte',
    sizes: [],
    largestImageSize: 300,
    ...args
  }
});

export const LargeImage = (args) => ({
  Component: Image,
  props: {
    name: 'ferenc-almasi-unsplash/svelte',
    sizes: [],
    largestImageSize: 2560,
    ...args
  }
});
