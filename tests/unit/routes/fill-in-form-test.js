import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fillInForm', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fill-in-form');
    assert.ok(route);
  });
});
