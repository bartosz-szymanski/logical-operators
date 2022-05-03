import { Operand } from '../../types/Operand';
import { BooleanValues } from '../ConstantsCreator/NewConstant/utils';

export enum CreationActions {
  Variable = 'Variable',
  Constant = 'Constant',
  Operation = 'Operation'
}

export type Identity = number;
export type ArgumentValueType =  Operand | BooleanValues | string;

export interface ArgumentControl {
  id: Identity;
  type: CreationActions,
  value: ArgumentValueType;
  arguments: ArgumentControl[];
}

export type UpdateStructureFn = (id: Identity, newValue: ArgumentControl) => void;
