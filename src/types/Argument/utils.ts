import { Variable } from './Variable';
import { Constant } from './Constant';
import { SimpleArgument } from './index';

export function isVariable(possibleVariable: any): possibleVariable is Variable {
  return typeof possibleVariable === 'boolean';
}

export function isConstant(possibleConstant: any): possibleConstant is Constant {
  return typeof possibleConstant?.name === 'string' && typeof possibleConstant?.value === 'boolean' ;
}

export function isSimpleArgument(possibleSimpleArgument: any): possibleSimpleArgument is SimpleArgument {
  return isVariable(possibleSimpleArgument) || isConstant(possibleSimpleArgument);
}
