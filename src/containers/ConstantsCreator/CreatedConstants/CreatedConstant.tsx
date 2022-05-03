import React, { useContext } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';

import { BooleanValues } from '../NewConstant/utils';
import { Constant } from '../../../types/Argument/Constant';
import { ConstantsContext } from '../../ConstantsProvider';
import Select from '../../../components/Select';

const CreatedConstant = ({ id, name, value }: Constant) => {
  const { removeConstant } = useContext(ConstantsContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        size="small"
        sx={{ margin: '0.5rem' }}
        disabled
      />
      <Select
        disabled
        label="Value"
        value={value ? BooleanValues.True : BooleanValues.False}
        onChange={() => null}
        options={Object.values(BooleanValues)}
      />
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
