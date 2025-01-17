import { module, test } from 'qunit';
import { setupTest } from '<%= dasherizedPackageName %>/tests/helpers';

module('<%= friendlyTestDescription %>', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('<%= dasherizedModuleName %>', {});
    assert.ok(model);
  });
});
