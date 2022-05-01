import React, { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { BooleanValues, getBooleanFromBooleanValues } from './utils';
import { ConstantsContext } from '../../ConstantsProvider';

//TODO: After interview add RHF and make components reusable with styling
const NewConstant = () => {
  const { addConstant } = useContext(ConstantsContext);
  const [name, setName] = useState<string>('');
  const [value, setValue] = useState<BooleanValues>(BooleanValues.True);

  const onSubmit = () => {
    addConstant({
      id: new Date().toISOString(),
      name,
      value: getBooleanFromBooleanValues(value)
    });

    setName('');
  }

  return (
    <Box>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        size="small"
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setName(event.target.value)}
        sx={{ margin: '0.5rem' }}
      />
      <FormControl sx={{ width: '10rem', margin: '0.5rem' }} size="small">
        <InputLabel id="select-label">Value</InputLabel>
        <Select
          labelId="select-label"
          value={value}
          label="Value"
          onChange={(event: SelectChangeEvent) => setValue(event.target.value as BooleanValues)}
        >
          <MenuItem value={BooleanValues.True}>True</MenuItem>
          <MenuItem value={BooleanValues.False}>False</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        disabled={name?.length < 1}
        onClick={onSubmit}
        sx={{ margin: '0.5rem' }}
      >
        Add
      </Button>
    </Box>
  );
};

export default NewConstant;
