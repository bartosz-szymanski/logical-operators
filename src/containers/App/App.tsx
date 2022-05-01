import React from 'react';
import { Button, Box } from '@mui/material';
import LogicalExpressionBuilder from '../LogicalExpressionBuilder';
import ConstantsCreator from '../ConstantsCreator';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vw'}}>
      <LogicalExpressionBuilder />
      <ConstantsCreator />
    </Box>
  );
}

export default App;
