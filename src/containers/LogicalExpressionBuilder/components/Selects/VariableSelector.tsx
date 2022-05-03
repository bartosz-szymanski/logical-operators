import React from 'react';

import { BooleanValues } from '../../../ConstantsCreator/NewConstant/utils';
import Select from '../../../../components/Select';

interface Props {
  value: BooleanValues;
  onChange: (value: BooleanValues) => void;
}

const VariableSelector = ({ value, onChange }: Props) => (
  <Select
    label="Variable"
    value={value}
    onChange={onChange}
    options={Object.values(BooleanValues)}
  />
);

export default VariableSelector;
