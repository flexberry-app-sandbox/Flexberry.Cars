import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-cars-car-l');
  this.route('i-i-s-cars-car-e',
  { path: 'i-i-s-cars-car-e/:id' });
  this.route('i-i-s-cars-car-e.new',
  { path: 'i-i-s-cars-car-e/new' });
  this.route('i-i-s-cars-driver-l');
  this.route('i-i-s-cars-driver-e',
  { path: 'i-i-s-cars-driver-e/:id' });
  this.route('i-i-s-cars-driver-e.new',
  { path: 'i-i-s-cars-driver-e/new' });
});

export default Router;
