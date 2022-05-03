import React from 'react';
import { Box } from '@mui/material';

import { ArgumentControl, ArgumentValueType, CreationActions, UpdateStructureFn } from '../../types';
import ActionSelector from '../Selects/ActionSelector';
import DynamicSelector from '../Selects/DynamicSelector';
import NewActionRowButton from './NewActionRowButton';
import { addNewChildArgument, changeActionType, changeActionValue } from './utils';
import InnerActionRows from './InnerActionRows';

interface Props extends ArgumentControl {
  updateStructureById: UpdateStructureFn;
}

const NewActionRow = ({ updateStructureById, ...currentArgument }: Props) => {
  const { type, value } = currentArgument;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <ActionSelector
        value={type}
        onChange={(action: CreationActions) => changeActionType(action, currentArgument, updateStructureById)}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <DynamicSelector
          type={type}
          value={value}
          onChange={(value: ArgumentValueType) => changeActionValue(value, currentArgument, updateStructureById)}
        />
        <InnerActionRows
          arguments={currentArgument.arguments}
          updateStructureById={updateStructureById}
        />
        <NewActionRowButton
          onClick={() => addNewChildArgument(currentArgument, updateStructureById)}
          type={type}
        />
      </Box>
    </Box>
  );
};

export default NewActionRow;
