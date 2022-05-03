import React, { useContext } from 'react';
import { Alert } from '@mui/material';

import { ArgumentControl } from '../../types';
import { getBooleanValue } from '../../utils';
import { ConstantsContext } from '../../../ConstantsProvider';

interface Props {
  structure: ArgumentControl;
}

const ResultBar = ({ structure }: Props) => {
  const { constants } = useContext(ConstantsContext);

  const value = getBooleanValue(structure, constants)

  if (value) {
    return (
      <Alert severity="success">True</Alert>
    )
  }
  return (
    <Alert severity="error">False</Alert>
  );
};

export default ResultBar;
