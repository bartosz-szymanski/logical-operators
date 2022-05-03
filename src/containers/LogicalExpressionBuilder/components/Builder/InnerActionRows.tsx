import React from 'react';

import { ArgumentControl, UpdateStructureFn } from '../../types';
import NewActionRow from './NewActionRow';

interface Props  {
  arguments: ArgumentControl[];
  updateStructureById: UpdateStructureFn;
}

const InnerActionRows = ({ updateStructureById, ...currentArgument }: Props) => {
  return (
    <>
      {currentArgument.arguments.map((argumentControl: ArgumentControl, index: number) => (
        <NewActionRow
          key={`argument-${argumentControl.id}-${index}`}
          updateStructureById={updateStructureById}
          {...argumentControl}
        />
      ))}
    </>
  );
};

export default InnerActionRows;
