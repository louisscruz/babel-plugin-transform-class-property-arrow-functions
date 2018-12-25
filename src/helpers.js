function isClassPropertyAssignedToArrowFunction(path) {
  const { node } = path;
  return (
    node &&
    node.type === 'ClassProperty' &&
    node.value &&
    node.value.type === 'ArrowFunctionExpression'
  );
}

function findClassConstructor(classBodyPath) {
  return classBodyPath
    .get('body')
    .find(({ node }) => node.type === 'ClassMethod' && node.kind === 'constructor');
}

function prependClassBodyWithConstructor(classBodyPath, t) {
  const newConstructor = t.classMethod(
    'constructor',
    t.identifier('constructor'),
    [],
    t.blockStatement([]),
    false,
    null
  );
  classBodyPath.unshiftContainer('body', newConstructor);
  return classBodyPath.get('body')[0];
}

function getIdentifierNameFromClassPropertyPath(classPropertyPath) {
  return classPropertyPath.node.key.name;
}

function appendMethodBindingToConstructor(classConstructorPath, identifierName, t) {
  const newBindingNode = t.expressionStatement(
    t.assignmentExpression(
      '=',
      t.memberExpression(t.thisExpression(), t.identifier(identifierName)),
      t.callExpression(
        t.memberExpression(
          t.memberExpression(t.thisExpression(), t.identifier(identifierName)),
          t.identifier('bind')
        ),
        [t.thisExpression()]
      )
    )
  );
  classConstructorPath.get('body').pushContainer('body', newBindingNode);
}

function convertClassPropertyToMethod(classPropertyPath, identifierName, t) {
  const isImplicitReturn = !t.isBlockStatement(classPropertyPath.node.value.body);
  const methodReturnBlock = isImplicitReturn
    ? t.blockStatement([t.returnStatement(classPropertyPath.node.value.body)])
    : t.blockStatement(classPropertyPath.node.value.body.body);
  const newMethod = t.classMethod(
    'method',
    t.identifier(identifierName),
    classPropertyPath.node.value.params,
    methodReturnBlock,
    false,
    null
  );
  classPropertyPath.replaceWith(newMethod);
}

module.exports = {
  isClassPropertyAssignedToArrowFunction,
  findClassConstructor,
  prependClassBodyWithConstructor,
  getIdentifierNameFromClassPropertyPath,
  appendMethodBindingToConstructor,
  convertClassPropertyToMethod,
};
