import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';


interface Props {
  label: string;
  value: string;
  onChange: (value: any) => void;
  disabled?: boolean;
  options: string[]
}

const StyledSelect = ({ disabled, label, options, value, onChange }: Props) => (
  <FormControl sx={{ width: '10rem', margin: '0.5rem' }} size="small">
    <InputLabel id="select-label">{label}</InputLabel>
    <Select
      labelId="select-label"
      value={value}
      label={label}
      disabled={disabled}
      onChange={(event: SelectChangeEvent) => onChange(event.target.value)}
    >
      {options.map((option: string, index: number) => (
        <MenuItem key={`action-${index}`} value={option}>{option}</MenuItem>
      ))
      }
    </Select>
  </FormControl>
);

export default StyledSelect;
