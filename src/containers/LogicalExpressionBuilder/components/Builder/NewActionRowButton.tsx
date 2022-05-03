import React from 'react';
import { Button } from '@mui/material';

import { CreationActions } from '../../types';

interface Props {
  type: CreationActions;
  onClick: () => void;
}

const NewActionRowButton = ({ type, onClick }: Props) => {
  if (type !== CreationActions.Operation) {
    return null;
  }

  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ margin: '0.5rem', width: '10rem' }}
    >
      Add
    </Button>
  );
};

export default NewActionRowButton;
