export interface Constant {
  id: ConstantIdentifier;
  name: string;
  value: boolean;
}

type ConstantIdentifier = string;
