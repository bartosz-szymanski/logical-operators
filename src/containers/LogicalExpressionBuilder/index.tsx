import React, { useContext, useState } from 'react';

import SectionLayout from '../../components/SectionLayout';
import { ArgumentControl, Identity } from './types';
import { getBooleanValue, getNewActionVariable } from './utils';
import NewActionRow from './components/Builder/NewActionRow';
import { updateStructureById } from '../../services/recursiveStructureService';
import { ConstantsContext } from '../ConstantsProvider';

const LogicalExpressionBuilder = () => {
  const { constants } = useContext(ConstantsContext);
  const [structure, setStructure] = useState<ArgumentControl>(() => getNewActionVariable());

  const updateArgumentInStructure = (id: Identity, newValue: ArgumentControl) => {
    const newStructure = updateStructureById(structure, id, newValue);

    setStructure(newStructure);
  }

  return (
    <SectionLayout label="Logical Expression Builder">
      <NewActionRow
        key="root"
        updateStructureById={updateArgumentInStructure}
        {...structure}
      />
      <span>RESULT: {getBooleanValue(structure, constants)?.toString()}</span>
    </SectionLayout>
  );
};

export default LogicalExpressionBuilder;
