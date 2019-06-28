import * as first from './First/first.js';
import * as second from './Second/second.js';

export const routes = {
  ...first.routes,
  ...second.routes,
};