import { Operand } from '../types/Operand';
import { RawEvaluatedArguments } from '../types/Argument/RawEvaluatedArguments';

function executeOrOperation(values: RawEvaluatedArguments): boolean {
  return values.some(Boolean);
}

function executeAndOperation(values: RawEvaluatedArguments): boolean {
  return values.every(Boolean);
}

export const LOGICAL_OPERANDS_FUNCTIONS_MAP: { [key in Operand]: (values: RawEvaluatedArguments) => boolean } = {
  [Operand.Or]: (values: RawEvaluatedArguments) => executeOrOperation(values),
  [Operand.And]: (values: RawEvaluatedArguments) => executeAndOperation(values),
}
