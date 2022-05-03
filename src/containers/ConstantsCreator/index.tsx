import React from 'react';

import SectionLayout from '../../components/SectionLayout';
import NewConstant from './NewConstant';
import CreatedConstants from './CreatedConstants';

const ConstantsCreator = () => {
  return (
    <SectionLayout label="Constants Creator">
      <NewConstant />
      <CreatedConstants />
    </SectionLayout>
  );
};

export default ConstantsCreator;
