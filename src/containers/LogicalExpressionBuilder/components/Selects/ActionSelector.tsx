import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { CreationActions } from '../../types';

interface Props {
  value: CreationActions;
  onChange: (value: CreationActions) => void;
}

const ActionSelector = ({ value, onChange }: Props) => {
  return (
    <FormControl sx={{ width: '10rem', margin: '0.5rem' }} size="small">
      <InputLabel id="select-label">Argument</InputLabel>
      <Select
        labelId="select-label"
        value={value}
        label="Argument"
        onChange={(event: SelectChangeEvent) => onChange(event.target.value as CreationActions)}
      >
        {Object.values(CreationActions).map((action: string) => (
          <MenuItem key={`action-${action}`} value={action}>{action}</MenuItem>
        ))
        }
      </Select>
    </FormControl>
  );
};

export default ActionSelector;
