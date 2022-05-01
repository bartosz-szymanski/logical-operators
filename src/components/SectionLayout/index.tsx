import React, { PropsWithChildren } from 'react';
import { Paper, Box } from '@mui/material';

import ChipDivider from '../Divider';

interface Props {
  label: string;
}

const SectionLayout = ({ label, children }: PropsWithChildren<Props>) => (
  <Box sx={{ margin: '1rem', minHeight: '20rem' }}>
    <ChipDivider label={label}/>
    <Paper
      elevation={2}
      sx={{
        padding: '0.5rem',
        marginTop: '1rem',
        minHeight: '10rem'
      }}
    >
      {children}
    </Paper>
  </Box>
);

export default SectionLayout;
