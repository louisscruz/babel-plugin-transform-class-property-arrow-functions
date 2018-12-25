import pluginTester from 'babel-plugin-tester';

import babelPluginTransformClassPropertyArrowFunctions from '../src';

pluginTester({
  plugin: babelPluginTransformClassPropertyArrowFunctions,
  tests: [
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning an empty block is provided in a class with a constructor',
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
        'it handles scenarios where a class property without parameters assigned to a function returning an empty block is provided in a class without a constructor',
      code: `
        class A {
          a = () => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with a single parameter assigned to a function returning an empty block is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with multiple parameters assigned to a function returning an empty block is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning an implicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => 1;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning an implicit return is provided in a class without a constructor',
      code: `
        class A {
          a = () => 1;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with a single parameter assigned to a function returning an implicit return is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => parameterOne;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with multiple parameters assigned to a function returning an implicit return is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => parameterTwo;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning a void-returning block is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {
            console.log('hi');
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning a void-returning block is provided in a class without a constructor',
      code: `
        class A {
          a = () => {
            console.log('hi');
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with a single parameter assigned to a function returning a void-returning block is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => {
            console.log('hi');
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with multiple parameters assigned to a function returning a void-returning block is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => {
            console.log('hi');
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {
            const value = 1 + 2;
            return value;
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning an explicit return is provided in a class without a constructor',
      code: `
        class A {
          a = () => {
            const value = 1 + 2;
            return value;
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with a single parameter assigned to a function returning an explicit return is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => {
            const value = 1 + 2;
            return value;
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with multiple parameters assigned to a function returning an explicit return is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => {
            const value = 1 + 2;
            return value;
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property without parameters assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {
            const value = 1 + 2;
            return value;
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with a single parameter assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = parameterOne => {
            const value = 1 + 2;
            return value;
          };
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where a class property with multiple parameters assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = (parameterOne, parameterTwo) => {
            const value = 1 + 2;
            return value;
          };
        }
      `,
      snapshot: true,
    },
  ],
});
