/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'wowjs' {
  const WOW: any;
  export default WOW;
}

declare module 'waypoints/lib/noframework.waypoints' {
  const Waypoint: any;
  export default Waypoint;
}

declare module 'counterup2' {
  const counterUp: any;
  export default counterUp;
}

declare module './assets/js/main.js' {
  const main: any;
  export default main;
}

/* Extend JQuery interface to include owlCarousel */
import 'jquery';

declare module 'jquery' {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}
