import { SimpleExpression } from './LogicalExpresion';

export function isSimpleLogicalExpression(logicalExpression: any): logicalExpression is SimpleExpression {
  return !logicalExpression.operand;
}

