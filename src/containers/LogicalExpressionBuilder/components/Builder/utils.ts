import { ArgumentControl, ArgumentValueType, CreationActions, UpdateStructureFn } from '../../types';
import { CREATION_ACTIONS_DEFAULT_VALUES_MAP, getNewActionVariable } from '../../utils';

export const changeActionType = (type: CreationActions, currentArgument: ArgumentControl, updateFunction: UpdateStructureFn) => {
  const updatedArgument: ArgumentControl = {
    ...currentArgument,
    type,
    value: CREATION_ACTIONS_DEFAULT_VALUES_MAP[type]
  }

  if (type === CreationActions.Operation && currentArgument.arguments.length === 0) {
    updatedArgument.arguments = [getNewActionVariable(), getNewActionVariable()];
  }

  if (type !== CreationActions.Operation && currentArgument.arguments.length > 0) {
    updatedArgument.arguments = [];
  }

  updateFunction(currentArgument.id, updatedArgument);
}


export const changeActionValue = (value: ArgumentValueType, currentArgument: ArgumentControl, updateFunction: UpdateStructureFn) => {
  updateFunction(currentArgument.id,
    {
      ...currentArgument,
      value
    });
}

export const addNewChildArgument = (currentArgument: ArgumentControl, updateFunction: UpdateStructureFn) => {
  updateFunction(currentArgument.id, {
    ...currentArgument,
    arguments: [...currentArgument.arguments, getNewActionVariable()]
  });
}
