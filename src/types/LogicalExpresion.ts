import { Operand } from './Operand';
import { Argument, SimpleArgument } from './Argument';

export type LogicalExpression = SingleExpression | RegularExpression;

interface RegularExpression {
   operator: Operand;
   arguments: Argument[];
}

interface SingleExpression {
  arguments: SimpleArgument;
}



