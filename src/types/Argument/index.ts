import { Variable } from './Variable';
import { Constant } from './Constant';
import { LogicalExpression } from '../LogicalExpresion';

export type Argument = Variable | Constant | LogicalExpression;
