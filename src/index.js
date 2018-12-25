const isClassPropertyAssignedToArrowFunction = require('./helpers')
  .isClassPropertyAssignedToArrowFunction;
const findClassConstructor = require('./helpers').findClassConstructor;
const prependClassBodyWithConstructor = require('./helpers').prependClassBodyWithConstructor;
const getIdentifierNameFromClassPropertyPath = require('./helpers')
  .getIdentifierNameFromClassPropertyPath;
const convertClassPropertyToMethod = require('./helpers').convertClassPropertyToMethod;
const appendMethodBindingToConstructor = require('./helpers').appendMethodBindingToConstructor;

function babelPluginTransformClassPropertyArrowFunctions({ types: t }) {
  return {
    name: 'babelPluginTransformClassPropertyArrowFunctions',
    visitor: {
      ClassDeclaration(currentClassDeclarationPath) {
        const classBodyPath = currentClassDeclarationPath.get('body');
        let classConstructorPath = null;

        classBodyPath.get('body').forEach(path => {
          if (isClassPropertyAssignedToArrowFunction(path)) {
            if (classConstructorPath === null) {
              classConstructorPath =
                findClassConstructor(classBodyPath) ||
                prependClassBodyWithConstructor(classBodyPath, t);
            }

            const identifierName = getIdentifierNameFromClassPropertyPath(path);
            convertClassPropertyToMethod(path, identifierName, t);
            appendMethodBindingToConstructor(classConstructorPath, identifierName, t);
          }
        });
      },
    },
  };
}

module.exports = babelPluginTransformClassPropertyArrowFunctions;
