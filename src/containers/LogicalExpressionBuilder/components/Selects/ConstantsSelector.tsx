import React, { useContext } from 'react';

import { ConstantsContext } from '../../../ConstantsProvider';
import { Constant } from '../../../../types/Argument/Constant';
import Select from '../../../../components/Select';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const ConstantsSelector = ({value, onChange}: Props) => {
  const { constants } = useContext(ConstantsContext);

  return (
    <Select
      label="Constant"
      value={value}
      onChange={onChange}
      options={constants.map((constant: Constant) => constant.name)}
      disabled={constants.length < 1}
    />
  );
};

export default ConstantsSelector;
