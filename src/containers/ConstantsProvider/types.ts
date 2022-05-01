import { Constant } from '../../types/Argument/Constant';

export interface ConstantsProviderType {
  constants: Constant[],
  addConstant: (newConstant: Constant) => void,
  removeConstant: RemoveConstantFn
}

export type RemoveConstantFn = (indexOfConstantToRemove: number) => void;
