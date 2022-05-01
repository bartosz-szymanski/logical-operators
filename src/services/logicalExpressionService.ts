import { LogicalExpression, RegularExpression } from '../types/LogicalExpresion';
import { isSimpleLogicalExpression } from '../types/utils';
import { Argument, SimpleArgument } from '../types/Argument';
import { isSimpleArgument, isVariable } from '../types/Argument/utils';
import { RawEvaluatedArguments } from '../types/Argument/RawEvaluatedArguments';
import { LOGICAL_OPERANDS_FUNCTIONS_MAP } from './logicalExpressionServiceUtils';

function evaluateSimpleArgument(argument: SimpleArgument): boolean {
  if (isVariable(argument)) {
    return argument;
  }

  return argument.value;
}

function evaluateRegularExpression(expression: RegularExpression): boolean {
  const rawEvaluatedArguments: RawEvaluatedArguments = [];
  const logicalOperandEvaluator = LOGICAL_OPERANDS_FUNCTIONS_MAP[expression.operand];

  expression.arguments.forEach((argument: Argument) => {
    if (isSimpleArgument(argument)) {
      rawEvaluatedArguments.push(evaluateSimpleArgument(argument));

      return;
    }

    rawEvaluatedArguments.push(evaluateLogicalExpression(argument));
  });

  return logicalOperandEvaluator(rawEvaluatedArguments);
}

export function evaluateLogicalExpression(expression: LogicalExpression): boolean {
  if (isSimpleLogicalExpression(expression)) {
    return evaluateSimpleArgument(expression.arguments)
  }

  return evaluateRegularExpression(expression);
}

