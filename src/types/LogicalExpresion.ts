import { Operand } from './Operand';
import { Argument } from './Argument';

export interface LogicalExpression {
   operator: Operand;
   arguments: Argument[];
}



