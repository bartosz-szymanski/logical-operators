export enum BooleanValues {
  True = 'True',
  False = 'False'
}

export function getBooleanFromBooleanValues(value: BooleanValues): boolean {
  return value === BooleanValues.True;
}
