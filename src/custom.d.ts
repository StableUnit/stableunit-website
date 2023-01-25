declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module "*.png" {
  export default "" as string;
}
declare module "*.jpg" {
  export default "" as string;
}
declare module "*.jpeg" {
  export default "" as string;
}
declare module "*.gif" {
  export default "" as string;
}
declare module "*.bmp" {
  export default "" as string;
}
declare module "*.tiff" {
  export default "" as string;
}

declare module 'react-simple-dropdown' {
  const content: any;
  export default content;
}