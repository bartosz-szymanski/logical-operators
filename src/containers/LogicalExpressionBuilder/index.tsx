import React, { useState } from 'react';

import SectionLayout from '../../components/SectionLayout';
import { ArgumentControl, Identity } from './types';
import { getNewActionVariable } from './utils';
import NewActionRow from './components/Builder/NewActionRow';
import { updateStructureById } from '../../services/recursiveStructureService';
import ResultBar from './components/ResultBar';

const LogicalExpressionBuilder = () => {
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
      <ResultBar structure={structure} />
    </SectionLayout>
  );
};

export default LogicalExpressionBuilder;
