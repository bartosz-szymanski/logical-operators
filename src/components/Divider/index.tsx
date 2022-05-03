import React from 'react';
import { Chip, Divider } from '@mui/material';

interface Props {
  label: string;
}

const ChipDivider = ({ label }: Props) => (
  <Divider>
    <Chip label={label} />
  </Divider>
);

export default ChipDivider;
