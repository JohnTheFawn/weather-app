import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('weather-detail-modal', 'Integration | Component | weather detail modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{weather-detail-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#weather-detail-modal}}
      template block text
    {{/weather-detail-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
