import React from 'react';

import { ArgumentControl, RemoveFromStructureFn, UpdateStructureFn } from '../../types';
import NewActionRow from './NewActionRow';

interface Props {
  arguments: ArgumentControl[];
  updateStructureById: UpdateStructureFn;
  removeArgumentFromStructure: RemoveFromStructureFn;
}

const InnerActionRows = ({ updateStructureById, removeArgumentFromStructure, ...currentArgument }: Props) => {
  return (
    <>
      {currentArgument.arguments.map((argumentControl: ArgumentControl, index: number) => (
          <NewActionRow
            key={`argument-${argumentControl.id}-${index}`}
            updateStructureById={updateStructureById}
            removeArgumentFromStructure={removeArgumentFromStructure}
            argumentsInDepthAmount={currentArgument.arguments.length}
            {...argumentControl}
          />
      ))}
    </>
  );
};

export default InnerActionRows;
