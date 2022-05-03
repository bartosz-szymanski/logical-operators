import { Operand } from './Operand';
import { Argument, SimpleArgument } from './Argument';

export type LogicalExpression = SimpleExpression | RegularExpression;

export interface RegularExpression {
   operand: Operand;
   arguments: Argument[];
}

export interface SimpleExpression {
  arguments: SimpleArgument;
}



