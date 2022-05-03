import React, { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import { BooleanValues, getBooleanFromBooleanValues } from './utils';
import { ConstantsContext } from '../../ConstantsProvider';
import Select from '../../../components/Select';

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
      <Select
        label="Value"
        value={value}
        onChange={(value) => setValue(value)}
        options={Object.values(BooleanValues)}
      />
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
