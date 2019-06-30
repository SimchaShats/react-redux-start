import { routes as editRoutes } from './Edit/edit.js';
import { routes as reviewRoutes } from './Review/review.js';

export const routes = {
  ...editRoutes,
  ...reviewRoutes,
};