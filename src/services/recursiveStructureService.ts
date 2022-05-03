import { ArgumentControl, Identity } from '../containers/LogicalExpressionBuilder/types';

export function findById(structure: ArgumentControl, id: Identity): ArgumentControl {
  if(structure.id === id) {
    return structure;
  }

  const results: (ArgumentControl | undefined)[] = []

  structure?.arguments?.forEach((innerStructure: ArgumentControl) => {
    results.push(findById(innerStructure, id));
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
