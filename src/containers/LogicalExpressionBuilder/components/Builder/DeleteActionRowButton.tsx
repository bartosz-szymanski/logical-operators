import React from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Props {
  isMainRoot?: boolean;
  argumentsInDepthAmount?: number
  onClick: () => void;
}

const DeleteActionRowButton = ({ isMainRoot, argumentsInDepthAmount, onClick }: Props) => {
  if (isMainRoot) {
    return null;
  }

  return (
    <IconButton
      color="primary"
      onClick={onClick}
      disabled={!argumentsInDepthAmount || argumentsInDepthAmount <= 2}
    >
      <Delete/>
    </IconButton>
  );
};

export default DeleteActionRowButton;
