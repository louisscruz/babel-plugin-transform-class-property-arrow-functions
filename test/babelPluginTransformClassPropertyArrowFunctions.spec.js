import pluginTester from 'babel-plugin-tester';

import babelPluginTransformClassPropertyArrowFunctions from '../src';

pluginTester({
  plugin: babelPluginTransformClassPropertyArrowFunctions,
  tests: [
    // All scenarios with single class properties:
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
    // All scenarios with multiple class properties:
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning an empty block is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {};

          b = () => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning an empty block is provided in a class without a constructor',
      code: `
        class A {
          a = () => {};

          b = () => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with a single parameter assigned to a function returning an empty block is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => {};

          b = parameterOne => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with multiple parameters assigned to a function returning an empty block is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => {};

          b = (parameterOne, parameterTwo) => {};
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning an implicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => 1;

          b = () => 2;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning an implicit return is provided in a class without a constructor',
      code: `
        class A {
          a = () => 1;

          b = () => 2;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with a single parameter assigned to a function returning an implicit return is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => parameterOne;

          b = parameterOne => parameterOne;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with multiple parameters assigned to a function returning an implicit return is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => parameterTwo;

          b = (parameterOne, parameterTwo) => parameterTwo;
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning a void-returning block is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {
            console.log('hi');
          };

          b = () => {
            console.log('hi again');
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning a void-returning block is provided in a class without a constructor',
      code: `
        class A {
          a = () => {
            console.log('hi');
          };

          b = () => {
            console.log('hi again');
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with a single parameter assigned to a function returning a void-returning block is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => {
            console.log('hi');
          };

          b = parameterOne => {
            console.log('hi again');
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with multiple parameters assigned to a function returning a void-returning block is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => {
            console.log('hi');
          };

          b = (parameterOne, parameterTwo) => {
            console.log('hi again');
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {
            const value = 1 + 2;
            return value;
          };

          b = () => {
            const value = 3 + 4;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning an explicit return is provided in a class without a constructor',
      code: `
        class A {
          a = () => {
            const value = 1 + 2;
            return value;
          };

          b = () => {
            const value = 3 + 4;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with a single parameter assigned to a function returning an explicit return is provided in a class without a constructor',
      code: `
        class A {
          a = parameterOne => {
            const value = 1 + 2;
            return value;
          };

          b = parameterOne => {
            const value = 3 + 4;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with multiple parameters assigned to a function returning an explicit return is provided in a class without a constructor',
      code: `
        class A {
          a = (parameterOne, parameterTwo) => {
            const value = 1 + 2;
            return value;
          };

          b = (parameterOne, parameterTwo) => {
            const value = 3 + 4;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties without parameters assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = () => {
            const value = 1 + 2;
            return value;
          };

          b = () => {
            const value = 3 + 4;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with a single parameter assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = parameterOne => {
            const value = 1 + 2;
            return value;
          };

          b = parameterOne => {
            const value = 3 + 4;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    {
      title:
        'it handles scenarios where multiple class properties with multiple parameters assigned to a function returning an explicit return is provided in a class with a constructor',
      code: `
        class A {
          constructor() {}

          a = (parameterOne, parameterTwo) => {
            const value = 1 + 2;
            return value;
          };

          b = (parameterOne, parameterTwo) => {
            const value = 3 + 4;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    // Sanity checks:
    {
      title: 'it does not alter class properties assigned to things other than arrow functions',
      code: `
        class A {
          constructor() {}

          a = 1;

          b = someFunction();
        }
      `,
      snapshot: true,
    },
    {
      title: 'it handles arrow functions when passed a variety of class property assignment types',
      code: `
        class A {
          constructor() {}

          a = 1;

          b = someFunction();

          c = () => {
            return 'hi';
          }

          d = 'd';
        }
      `,
      snapshot: true,
    },
    {
      title: 'it handles scenarios with many different class property assignments',
      code: `
        class A {
          constructor() {}

          a = (parameterOne, parameterTwo) => {
            const value = 1 + 2;
            return value;
          };

          b = (parameterOne, parameterTwo) => {
            const value = 3 + 4;
            return value;
          }

          c = (parameterOne, parameterTwo) => {
            const value = 5 + 6;
            return value;
          }

          d = (parameterOne, parameterTwo) => {
            const value = 7 + 8;
            return value;
          }

          e = (parameterOne, parameterTwo) => {
            const value = 9 + 10;
            return value;
          }
        }
      `,
      snapshot: true,
    },
    {
      title: 'it handles a typical React-style class with a constructor',
      code: `
        class App extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
              total: 0
            };
          }

          addOne = () => {
            this.setState(({ total: oldTotal }) => ({ total: oldTotal + 1 }));
          }

          subtractOne = () => {
            this.setState(({ total: oldTotal }) => ({ total: oldTotal - 1 }));
          }

          double = () => {
            this.setState(({ total: oldTotal }) => ({ total: oldTotal * 2 }));
          }

          halve = () => {
            this.setState(({ total: oldTotal }) => ({ total: oldTotal / 2 }));
          }

          render() {
            return React.createElement(SomeComponent, { addOne, subtractOne, double, halve });
          }
        }
      `,
      snapshot: true,
    },
    {
      title: 'it handles a typical React-style class without a constructor',
      code: `
        class App extends React.Component {
          addOne = () => {
            this.props.addOne();
          }

          subtractOne = () => {
            this.props.subtractOne();
          }

          double = () => {
            this.props.double();
          }

          halve = () => {
            this.props.halve();
          }

          render() {
            return React.createElement(SomeComponent, { addOne, subtractOne, double, halve });
          }
        }
      `,
      snapshot: true,
    },
  ],
});
