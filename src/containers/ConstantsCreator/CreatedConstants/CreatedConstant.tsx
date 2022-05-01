import React, { useContext } from 'react';
import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { BooleanValues } from '../NewConstant/utils';
import { Constant } from '../../../types/Argument/Constant';
import { ConstantsContext } from '../../ConstantsProvider';

const CreatedConstant = ({ id, name, value }: Constant) => {
  const { removeConstant } = useContext(ConstantsContext);

  return (
    <Box>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        size="small"
        sx={{ margin: '0.5rem' }}
        disabled
      />
      <FormControl sx={{ width: '10rem', margin: '0.5rem' }} size="small">
        <InputLabel id="select-label">Value</InputLabel>
        <Select
          labelId="select-label"
          value={value ? BooleanValues.True : BooleanValues.False}
          label="Value"
          disabled
        >
          <MenuItem value={BooleanValues.False}>False</MenuItem>
          <MenuItem value={BooleanValues.True}>True</MenuItem>
        </Select>
      </FormControl>
      <IconButton
        color="primary"
        onClick={() => removeConstant(id)}
      >
        <Delete/>
      </IconButton>
    </Box>
  );
};

export default CreatedConstant;
