import React from 'react';

import { CreationActions } from '../../types';
import Select from '../../../../components/Select';

interface Props {
  value: CreationActions;
  onChange: (value: CreationActions) => void;
}

const ActionSelector = ({ value, onChange }: Props) => (
  <Select
    label="Argument"
    value={value}
    onChange={onChange}
    options={Object.values(CreationActions)}
  />
);

export default ActionSelector;
