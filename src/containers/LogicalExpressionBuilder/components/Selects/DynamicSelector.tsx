import React from 'react';
import { CREATION_ACTIONS_CONTROLS_MAP } from '../../utils';
import { BooleanValues } from '../../../ConstantsCreator/NewConstant/utils';
import { Operand } from '../../../../types/Operand';
import { CreationActions } from '../../types';

interface Props {
  type: CreationActions;
  value: BooleanValues | Operand | string;
  onChange: (value: BooleanValues | Operand | string) => void;
}
const DynamicSelector = ({type, ...props}: Props) => {
  const Selector = CREATION_ACTIONS_CONTROLS_MAP[type]

  return (
    <Selector {...props} />
  );
};

export default DynamicSelector;
