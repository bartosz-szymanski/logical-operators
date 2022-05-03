import React, { useContext } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ConstantsContext } from '../../../ConstantsProvider';
import { Constant } from '../../../../types/Argument/Constant';

interface Props {
  value: string;
  onChange: (value: string) => void;
}
const ConstantsSelector = ({value, onChange}: Props) => {
  const { constants } = useContext(ConstantsContext);

  return (
    <FormControl sx={{ width: '10rem', margin: '0.5rem' }} size="small">
      <InputLabel id="select-label">Constant</InputLabel>
      <Select
        labelId="select-label"
        value={value}
        label="Constant"
        disabled={constants.length < 1}
        onChange={(event: SelectChangeEvent) => onChange(event.target.value as string)}
      >
        {constants.map(({ id, name }: Constant) => (
          <MenuItem key={`action-${id}`} value={name}>{name}</MenuItem>
        ))
        }
      </Select>
    </FormControl>
  );
};

export default ConstantsSelector;
