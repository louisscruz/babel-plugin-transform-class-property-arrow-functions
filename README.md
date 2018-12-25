[![npm version](https://badge.fury.io/js/babel-plugin-transform-class-property-arrow-functions.svg)](https://badge.fury.io/js/babel-plugin-transform-class-property-arrow-functions)
[![Build Status](https://travis-ci.com/louisscruz/babel-plugin-transform-class-property-arrow-functions.svg?branch=master)](https://travis-ci.com/louisscruz/babel-plugin-transform-class-property-arrow-functions)
[![codecov](https://codecov.io/gh/louisscruz/babel-plugin-transform-class-property-arrow-functions/branch/master/graph/badge.svg)](https://codecov.io/gh/louisscruz/babel-plugin-transform-class-property-arrow-functions)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

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

## Installation

`npm install --save-dev babel-plugin-transform-class-property-arrow-functions`

`yarn add -D babel-plugin-transform-class-property-arrow-functions`

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
