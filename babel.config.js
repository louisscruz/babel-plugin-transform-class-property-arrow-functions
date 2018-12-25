const babelPluginTransformClassPropertyArrowFunctions = require('./src');

function babelConfiguration(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ];

  const plugins = [
    babelPluginTransformClassPropertyArrowFunctions,
    '@babel/plugin-proposal-class-properties',
  ];

  return {
    presets,
    plugins,
  };
}

module.exports = babelConfiguration;
