import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Operand } from '../../../../types/Operand';

interface Props {
  value: Operand;
  onChange: (value: Operand) => void;
}

const OperationSelector = ({ value, onChange }: Props) => (
  <FormControl sx={{ width: '10rem', margin: '0.5rem' }} size="small">
    <InputLabel id="select-label">Operation</InputLabel>
    <Select
      labelId="select-label"
      value={value}
      label="Operation"
      onChange={(event: SelectChangeEvent) => onChange(event.target.value as Operand)}
    >
      {Object.values(Operand).map((action: string) => (
        <MenuItem key={`action-${action}`} value={action}>{action}</MenuItem>
      ))
      }
    </Select>
  </FormControl>
);

export default OperationSelector;
