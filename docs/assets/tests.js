'use strict';

define('weather-app/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('weather-app/tests/components/weather-card.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/weather-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/weather-card.js should pass jshint.');
  });
});
define('weather-app/tests/components/weather-icon.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/weather-icon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/weather-icon.js should pass jshint.');
  });
});
define('weather-app/tests/controllers/main/weather.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/main/weather.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/main/weather.js should pass jshint.\ncontrollers/main/weather.js: line 42, col 10, Missing semicolon.\ncontrollers/main/weather.js: line 23, col 11, \'weathers\' is defined but never used.\ncontrollers/main/weather.js: line 153, col 17, \'i\' is already defined.\ncontrollers/main/weather.js: line 154, col 15, \'weatherObject\' is already defined.\ncontrollers/main/weather.js: line 181, col 17, \'i\' is already defined.\ncontrollers/main/weather.js: line 262, col 6, Missing semicolon.\n\n6 errors');
  });
});
define('weather-app/tests/helpers/convert-degrees-to-cardinal-friendly.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/convert-degrees-to-cardinal-friendly.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/convert-degrees-to-cardinal-friendly.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/convert-degrees-to-cardinal.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/convert-degrees-to-cardinal.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/convert-degrees-to-cardinal.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('weather-app/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/format-date-day-ending.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-date-day-ending.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-date-day-ending.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/format-date-day-of-week.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-date-day-of-week.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-date-day-of-week.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/format-date-day.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-date-day.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-date-day.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/format-date-month.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-date-month.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-date-month.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/format-time-suffix.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-time-suffix.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-time-suffix.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/format-time.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-time.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-time.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'weather-app/tests/helpers/start-app', 'weather-app/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _weatherAppTestsHelpersStartApp, _weatherAppTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _weatherAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _weatherAppTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('weather-app/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/resolver', ['exports', 'weather-app/resolver', 'weather-app/config/environment'], function (exports, _weatherAppResolver, _weatherAppConfigEnvironment) {

  var resolver = _weatherAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _weatherAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _weatherAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('weather-app/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/start-app', ['exports', 'ember', 'weather-app/app', 'weather-app/config/environment'], function (exports, _ember, _weatherAppApp, _weatherAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _weatherAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _weatherAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('weather-app/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('weather-app/tests/helpers/weather-icon-class.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/weather-icon-class.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/weather-icon-class.js should pass jshint.');
  });
});
define('weather-app/tests/integration/components/weather-card-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('weather-card', 'Integration | Component | weather card', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'weather-card', ['loc', [null, [1, 0], [1, 16]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'weather-card', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('weather-app/tests/integration/components/weather-card-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/weather-card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/weather-card-test.js should pass jshint.');
  });
});
define('weather-app/tests/integration/components/weather-icon-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('weather-icon', 'Integration | Component | weather icon', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'weather-icon', ['loc', [null, [1, 0], [1, 16]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@2.8.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@2.8.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'weather-icon', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('weather-app/tests/integration/components/weather-icon-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/weather-icon-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/weather-icon-test.js should pass jshint.');
  });
});
define('weather-app/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('weather-app/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('weather-app/tests/routes/main.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/main.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/main.js should pass jshint.');
  });
});
define('weather-app/tests/routes/main/weather.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/main/weather.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/main/weather.js should pass jshint.');
  });
});
define('weather-app/tests/test-helper', ['exports', 'weather-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _weatherAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_weatherAppTestsHelpersResolver['default']);
});
define('weather-app/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('weather-app/tests/unit/controllers/main/weather-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:main/weather', 'Unit | Controller | main/weather', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('weather-app/tests/unit/controllers/main/weather-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/main/weather-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/main/weather-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/convert-degrees-to-cardinal-friendly-test', ['exports', 'weather-app/helpers/convert-degrees-to-cardinal-friendly', 'qunit'], function (exports, _weatherAppHelpersConvertDegreesToCardinalFriendly, _qunit) {

  (0, _qunit.module)('Unit | Helper | convert degrees to cardinal friendly');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersConvertDegreesToCardinalFriendly.convertDegreesToCardinalFriendly)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/convert-degrees-to-cardinal-friendly-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/convert-degrees-to-cardinal-friendly-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/convert-degrees-to-cardinal-friendly-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/convert-degrees-to-cardinal-test', ['exports', 'weather-app/helpers/convert-degrees-to-cardinal', 'qunit'], function (exports, _weatherAppHelpersConvertDegreesToCardinal, _qunit) {

  (0, _qunit.module)('Unit | Helper | convert degrees to cardinal');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersConvertDegreesToCardinal.convertDegreesToCardinal)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/convert-degrees-to-cardinal-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/convert-degrees-to-cardinal-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/convert-degrees-to-cardinal-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/format-date-day-ending-test', ['exports', 'weather-app/helpers/format-date-day-ending', 'qunit'], function (exports, _weatherAppHelpersFormatDateDayEnding, _qunit) {

  (0, _qunit.module)('Unit | Helper | format date day ending');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersFormatDateDayEnding.formatDateDayEnding)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/format-date-day-ending-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-date-day-ending-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-date-day-ending-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/format-date-day-of-week-test', ['exports', 'weather-app/helpers/format-date-day-of-week', 'qunit'], function (exports, _weatherAppHelpersFormatDateDayOfWeek, _qunit) {

  (0, _qunit.module)('Unit | Helper | format date day of week');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersFormatDateDayOfWeek.formatDateDayOfWeek)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/format-date-day-of-week-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-date-day-of-week-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-date-day-of-week-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/format-date-day-test', ['exports', 'weather-app/helpers/format-date-day', 'qunit'], function (exports, _weatherAppHelpersFormatDateDay, _qunit) {

  (0, _qunit.module)('Unit | Helper | format date day');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersFormatDateDay.formatDateDay)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/format-date-day-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-date-day-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-date-day-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/format-date-month-test', ['exports', 'weather-app/helpers/format-date-month', 'qunit'], function (exports, _weatherAppHelpersFormatDateMonth, _qunit) {

  (0, _qunit.module)('Unit | Helper | format date month');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersFormatDateMonth.formatDateMonth)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/format-date-month-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-date-month-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-date-month-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/format-time-suffix-test', ['exports', 'weather-app/helpers/format-time-suffix', 'qunit'], function (exports, _weatherAppHelpersFormatTimeSuffix, _qunit) {

  (0, _qunit.module)('Unit | Helper | format time suffix');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersFormatTimeSuffix.formatTimeSuffix)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/format-time-suffix-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-time-suffix-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-time-suffix-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/format-time-test', ['exports', 'weather-app/helpers/format-time', 'qunit'], function (exports, _weatherAppHelpersFormatTime, _qunit) {

  (0, _qunit.module)('Unit | Helper | format time');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersFormatTime.formatTime)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/format-time-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-time-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-time-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/helpers/weather-icon-class-test', ['exports', 'weather-app/helpers/weather-icon-class', 'qunit'], function (exports, _weatherAppHelpersWeatherIconClass, _qunit) {

  (0, _qunit.module)('Unit | Helper | weather icon class');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _weatherAppHelpersWeatherIconClass.weatherIconClass)([42]);
    assert.ok(result);
  });
});
define('weather-app/tests/unit/helpers/weather-icon-class-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/weather-icon-class-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/weather-icon-class-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/routes/main-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:main', 'Unit | Route | main', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('weather-app/tests/unit/routes/main-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/main-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/main-test.js should pass jshint.');
  });
});
define('weather-app/tests/unit/routes/main/weather-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:main/weather', 'Unit | Route | main/weather', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('weather-app/tests/unit/routes/main/weather-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/main/weather-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/main/weather-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('weather-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
