import { Constant } from '../types/Argument/Constant';
import { Variable } from '../types/Argument/Variable';
import { LogicalExpression } from '../types/LogicalExpresion';
import { Operand } from '../types/Operand';

export const TRUTHY_VARIABLE: Variable = true;

export const FALSY_VARIABLE: Variable = false;

export const TRUTHY_CONSTANT: Constant = {
  name: 'TruthyConstant',
  value: true
}

export const FALSY_CONSTANT: Constant = {
  name: 'FalsyConstant',
  value: false
}

export const TRUTHY_OR_LOGICAL_EXPRESSION: LogicalExpression = {
  operand: Operand.Or,
  arguments: [TRUTHY_VARIABLE, TRUTHY_VARIABLE]
}

export const FALSY_OR_LOGICAL_EXPRESSION: LogicalExpression = {
  operand: Operand.Or,
  arguments: [FALSY_VARIABLE, FALSY_VARIABLE]
}

export const TRUTHY_AND_LOGICAL_EXPRESSION: LogicalExpression = {
  operand: Operand.And,
  arguments: [TRUTHY_VARIABLE, TRUTHY_VARIABLE]
}

export const FALSY_AND_LOGICAL_EXPRESSION: LogicalExpression = {
  operand: Operand.And,
  arguments: [FALSY_VARIABLE, FALSY_VARIABLE]
}
