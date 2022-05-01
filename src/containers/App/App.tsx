import React from 'react';
import { Box } from '@mui/material';

import LogicalExpressionBuilder from '../LogicalExpressionBuilder';
import ConstantsCreator from '../ConstantsCreator';
import ConstantsProvider from '../ConstantsProvider';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vw' }}>
      <ConstantsProvider>
        <LogicalExpressionBuilder/>
        <ConstantsCreator/>
      </ConstantsProvider>
    </Box>
  );
}

export default App;
