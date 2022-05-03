import VariableSelector from './components/Selects/VariableSelector';
import ConstantsSelector from './components/Selects/ConstantsSelector';
import OperationSelector from './components/Selects/OperationSelector';
import { FunctionComponent } from 'react';
import { ArgumentControl, ArgumentValueType, CreationActions, Identity } from './types';
import { BooleanValues } from '../ConstantsCreator/NewConstant/utils';
import { Operand } from '../../types/Operand';
import { convertUIStructureToLogicalExpression } from '../../services/recursiveStructureService';
import { Constant } from '../../types/Argument/Constant';
import { evaluateLogicalExpression } from '../../services/logicalExpressionService';

export const CREATION_ACTIONS_CONTROLS_MAP: { [key in CreationActions]: FunctionComponent<any> } = {
  [CreationActions.Variable]: VariableSelector,
  [CreationActions.Constant]: ConstantsSelector,
  [CreationActions.Operation]: OperationSelector,
}

export const CREATION_ACTIONS_DEFAULT_VALUES_MAP: { [key in CreationActions]: ArgumentValueType } = {
  [CreationActions.Variable]: BooleanValues.True,
  [CreationActions.Constant]: '',
  [CreationActions.Operation]: Operand.Or,
}

const NEW_ACTION_VARIABLE: Omit<ArgumentControl, 'id'> = {
  type: CreationActions.Variable,
  value: BooleanValues.True,
  arguments: []
}

export function getNewID(): Identity {
  return Math.floor(Math.random() * Date.now());
}

export function getNewActionVariable(): ArgumentControl {
  return {
    id: getNewID(),
    ...NEW_ACTION_VARIABLE
  };
}

export function getBooleanValue(structure: ArgumentControl, constants: Constant[]): boolean {
  const mappedStructure = convertUIStructureToLogicalExpression(structure, constants);

  console.log(evaluateLogicalExpression(mappedStructure), mappedStructure)

  return evaluateLogicalExpression(mappedStructure);
}
