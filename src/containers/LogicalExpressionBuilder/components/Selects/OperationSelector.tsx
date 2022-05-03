import React from 'react';

import { Operand } from '../../../../types/Operand';
import Select from '../../../../components/Select';

interface Props {
  value: Operand;
  onChange: (value: Operand) => void;
}

const OperationSelector = ({ value, onChange }: Props) => (
  <Select
    label="Operation"
    value={value}
    onChange={onChange}
    options={Object.values(Operand)}
  />
);

export default OperationSelector;
