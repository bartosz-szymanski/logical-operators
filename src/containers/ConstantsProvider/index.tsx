import React, { createContext, PropsWithChildren, useState } from 'react';

import { Constant } from '../../types/Argument/Constant';
import { ConstantsProviderType } from './types';

export const ConstantsContext = createContext<ConstantsProviderType>({
  constants: [],
  addConstant: () => null,
  removeConstant: () => null,
} );

const ConstantsProvider = ({ children }: PropsWithChildren<any>) => {
  const [constants, setConstants] = useState<Constant[]>([]);
  const addConstant = (constant: Constant) => {
    setConstants((currentState: Constant[]) => [...currentState, constant]);
  };
  const removeConstant = (id: string) => {
    setConstants((currentState: Constant[]) => {
      return currentState.filter((constant: Constant) => constant.id !== id);
    })
  }

  return (
    <ConstantsContext.Provider value={{
      constants,
      addConstant,
      removeConstant
    }}>
      {children}
    </ConstantsContext.Provider>

  );
};

export default ConstantsProvider;
