import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // index page has been added => 
  // but doesn't need any entry in the router.js
  this.route('about');
  this.route('contact');
  this.route('fill-in-form', { path: 'fill-form'});
  this.route('countries', function() {
    this.route('country', { path: ':country_id' });
  });
});

export default Router;
