import React from 'react';
import { Divider, Chip } from '@mui/material';

interface Props {
  label: string;
}

const ChipDivider = ({ label }: Props) => {
  return (
    <Divider>
      <Chip label={label}/>
    </Divider>
  );
};

export default ChipDivider;
