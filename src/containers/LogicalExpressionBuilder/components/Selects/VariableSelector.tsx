import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { BooleanValues } from '../../../ConstantsCreator/NewConstant/utils';

interface Props {
  value: BooleanValues;
  onChange: (value: BooleanValues) => void;
}

const VariableSelector = ({ value, onChange }: Props) => (
  <FormControl sx={{ width: '10rem', margin: '0.5rem' }} size="small">
    <InputLabel id="select-label">Variable</InputLabel>
    <Select
      labelId="select-label"
      value={value}
      label="Variable"
      onChange={(event: SelectChangeEvent) => onChange(event.target.value as BooleanValues)}
    >
      {Object.values(BooleanValues).map((action: string) => (
        <MenuItem key={`action-${action}`} value={action}>{action}</MenuItem>
      ))
      }
    </Select>
  </FormControl>
);

export default VariableSelector;
