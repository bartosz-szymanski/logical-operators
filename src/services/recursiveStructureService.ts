import { ArgumentControl, CreationActions, Identity } from '../containers/LogicalExpressionBuilder/types';
import { LogicalExpression } from '../types/LogicalExpresion';
import { Constant } from '../types/Argument/Constant';
import { Argument } from '../types/Argument';
import { Operand } from '../types/Operand';
import { BooleanValues } from '../containers/ConstantsCreator/NewConstant/utils';

export function findById(structure: ArgumentControl, id: Identity): ArgumentControl {
  if (structure.id === id) {
    return structure;
  }

  const results: (ArgumentControl | undefined)[] = []

  structure?.arguments?.forEach((innerStructure: ArgumentControl) => {
    results.push(findById(innerStructure, id));
  })

  return results.filter(Boolean)[0] as ArgumentControl;
}

function findParentByChildId(structure: ArgumentControl, id: Identity): ArgumentControl {
  if (structure.arguments?.findIndex((argument: ArgumentControl) => argument.id === id) > -1) {
    return structure;
  }
  const results: (ArgumentControl | undefined)[] = []

  structure?.arguments?.forEach((innerStructure: ArgumentControl) => {
    results.push(findParentByChildId(innerStructure, id));
  })

  return results.filter(Boolean)[0] as ArgumentControl;
}

export function updateStructureById(structure: ArgumentControl, id: Identity, newArgument: ArgumentControl): ArgumentControl {
  const argumentFromStructure = findById(structure, id)
  const currentArgument = JSON.stringify(argumentFromStructure);
  const currentStructure = JSON.stringify(structure);

  const newStructure = currentStructure.replace(currentArgument, JSON.stringify(newArgument))

  return JSON.parse(newStructure);
}

export function removeFromStructureById(structure: ArgumentControl, id: Identity): ArgumentControl {
  const currentStructure = JSON.stringify(structure);
  const parent = findParentByChildId(structure, id);
  const parentToReplace = JSON.stringify(parent);
  const parentWithoutChild = {
    ...parent,
    arguments: parent.arguments.filter((argument: ArgumentControl) => argument.id !== id)
  };

  const newStructure = currentStructure.replace(parentToReplace, JSON.stringify(parentWithoutChild))

  return JSON.parse(newStructure);
}

function getConstantByName(name: string, constants: Constant[]): Constant | undefined {
  return constants.find((constants: Constant) => constants.name === name)
}

export function convertUIStructureToLogicalExpression(argument: ArgumentControl, constants: Constant[]): LogicalExpression {
  if (argument.type === CreationActions.Variable) {
    return {
      arguments: argument.value === BooleanValues.True,
    }
  }

  if (argument.type === CreationActions.Constant) {
    const constant = getConstantByName(argument.value, constants);

    if (constant) {
      return {
        arguments: constant,
      }
    } else {
      return {
        arguments: false,
      }
    }
  }

  return {
    operand: argument.value as Operand,
    arguments: argument.arguments.map((argument: ArgumentControl) => getArgument(argument, constants))
  }
}

export function getArgument(argument: ArgumentControl, constants: Constant[]): Argument {
  if (argument.type === CreationActions.Variable) {
    return argument.value === BooleanValues.True;
  }

  if (argument.type === CreationActions.Constant) {
    const constant = getConstantByName(argument.value, constants);

    return constant || false;
  }

  return {
    operand: argument.value as unknown as Operand,
    arguments: argument.arguments.map((innerArgument: ArgumentControl) => getArgument(innerArgument, constants))
  }
}

