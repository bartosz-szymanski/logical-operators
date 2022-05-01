import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { ConstantsContext } from '../../ConstantsProvider';
import { Constant } from '../../../types/Argument/Constant';
import CreatedConstant from './CreatedConstant';

const CreatedConstants = () => {
  const { constants } = useContext(ConstantsContext);

  return (
    <Box sx={{ margin: '1rem' }}>
      {constants.map((constant: Constant) => (
        <CreatedConstant
          key={`constant-${constant.id}`}
          {...constant}
        />
      ))
      }
    </Box>
  );
};

export default CreatedConstants;
