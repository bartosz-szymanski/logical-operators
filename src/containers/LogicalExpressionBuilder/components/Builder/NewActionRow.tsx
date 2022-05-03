import React from 'react';
import { Box } from '@mui/material';

import { ArgumentControl, ArgumentValueType, CreationActions, RemoveFromStructureFn, UpdateStructureFn } from '../../types';
import ActionSelector from '../Selects/ActionSelector';
import DynamicSelector from '../Selects/DynamicSelector';
import NewActionRowButton from './NewActionRowButton';
import { addNewChildArgument, changeActionType, changeActionValue } from './utils';
import InnerActionRows from './InnerActionRows';
import DeleteActionRowButton from './DeleteActionRowButton';

interface Props extends ArgumentControl {
  isMainRoot?: boolean;
  argumentsInDepthAmount?: number;
  updateStructureById: UpdateStructureFn;
  removeArgumentFromStructure: RemoveFromStructureFn;
}

const NewActionRow = ({ updateStructureById, removeArgumentFromStructure, isMainRoot, argumentsInDepthAmount, ...currentArgument }: Props) => {
  const { type, value } = currentArgument;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <ActionSelector
        value={type}
        onChange={(action: CreationActions) => changeActionType(action, currentArgument, updateStructureById)}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <DynamicSelector
            type={type}
            value={value}
            onChange={(value: ArgumentValueType) => changeActionValue(value, currentArgument, updateStructureById)}
          />
          <NewActionRowButton
            onClick={() => addNewChildArgument(currentArgument, updateStructureById)}
            type={type}
          />
          <DeleteActionRowButton
            isMainRoot={isMainRoot}
            argumentsInDepthAmount={argumentsInDepthAmount}
            onClick={() => removeArgumentFromStructure(currentArgument.id, currentArgument,)}
          />
        </Box>
        <InnerActionRows
          arguments={currentArgument.arguments}
          updateStructureById={updateStructureById}
          removeArgumentFromStructure={removeArgumentFromStructure}
        />
      </Box>
    </Box>
  );
};

export default NewActionRow;
