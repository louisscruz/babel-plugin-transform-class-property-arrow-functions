import pluginTester from 'babel-plugin-tester';

import babelPluginTransformClassPropertyArrowFunctions from '../src';

pluginTester({
  plugin: babelPluginTransformClassPropertyArrowFunctions,
  tests: [
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a block is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a block is provided in a class without a constructor',
      code: `
        class A {
          a = () => {};
        }
      `,
      snapshot: true,
    },
  ],
});
