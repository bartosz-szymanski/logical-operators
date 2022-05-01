import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ConstantsContext } from '../../ConstantsProvider';
import { Constant } from '../../../types/Argument/Constant';
import CreatedConstant from './CreatedConstant';

//TODO: After interview add RHF
const CreatedConstants = () => {
  const { constants, removeConstant } = useContext(ConstantsContext);

  return (
    <Box sx={{ margin: '1rem' }}>
      {constants.map((constant: Constant, index: number) => (
        <CreatedConstant
          key={`constant-${index}`}
          index={index}
          removeConstant={removeConstant}
          {...constant}
        />
      ))
      }
    </Box>
  );
};

export default CreatedConstants;
