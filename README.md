# babel-plugin-transform-class-property-arrow-functions

This plugin transforms class properties assigned to arrow functions into class methods bound in the class' constructor.

Input code:

```
class App extends Base {
  handleClick = e => {
    this.props.doSomething();
  }

  handleHover = e => {
    this.props.doSomethingElse();
  }

  render() {
    return new SomeSubComponent(this.handleClick, this.handleHover);
  }
}
```

Output code:

```
class App extends Base {
  constructor() {
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  handleClick(e) {
    this.props.doSomething();
  }

  handleHover(e) {
    this.props.doSomethingElse();
  }

  render() {
    return new SomeSubComponent(this.handleClick, this.handleHover);
  }
}
```

## Why Use This?

[This Medium article](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1) walks through some reasons why class properties assigned to arrow functions might not be preferable.

## Usage

This plugin does not handle the transformation of class properties themselves.
For that, you will likely need to use [babel-plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties).

### Via `.babelrc` (Recommended)

```json
{
  "plugins": ["transform-class-property-arrow-functions"]
}
```

### Via CLI

```shell
babel --plugins transform-class-property-arrow-functions script.js
```

### Via Node API

```js
require('babel-core').transform('code', {
  plugins: ['transform-class-property-arrow-functions']
});
```
