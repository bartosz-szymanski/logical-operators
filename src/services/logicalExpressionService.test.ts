import { LogicalExpression } from '../types/LogicalExpresion';
import { evaluateLogicalExpression } from './logicalExpressionService';
import {
  FALSY_AND_LOGICAL_EXPRESSION,
  FALSY_CONSTANT,
  FALSY_OR_LOGICAL_EXPRESSION,
  FALSY_VARIABLE,
  TRUTHY_AND_LOGICAL_EXPRESSION,
  TRUTHY_CONSTANT,
  TRUTHY_OR_LOGICAL_EXPRESSION,
  TRUTHY_VARIABLE
} from './logicalExpressionServiceTestsMocks';
import { Operand } from '../types/Operand';

//TODO: After interview change approach to DATA DRIVEN TESTS to simplify this suite
describe('evaluateLogicalExpression', () => {
  describe('for simple operations should return', () => {
    test('true for single truthy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        arguments: TRUTHY_VARIABLE
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for single falsy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        arguments: FALSY_VARIABLE
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for single truthy constant', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        arguments: TRUTHY_CONSTANT
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for single falsy constant', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        arguments: FALSY_CONSTANT
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('for mocks operations should return', () => {
    test('true for truthy mocked OR operation', () => {
      const expectedResult = true;

      const result = evaluateLogicalExpression(TRUTHY_OR_LOGICAL_EXPRESSION);

      expect(result).toEqual(expectedResult);
    })

    test('false for falsy mocked OR operation', () => {
      const expectedResult = false;

      const result = evaluateLogicalExpression(FALSY_OR_LOGICAL_EXPRESSION);

      expect(result).toEqual(expectedResult);
    })

    test('true for truthy mocked AND operation', () => {
      const expectedResult = true;

      const result = evaluateLogicalExpression(TRUTHY_AND_LOGICAL_EXPRESSION);

      expect(result).toEqual(expectedResult);
    })

    test('false for falsy mocked AND operation', () => {
      const expectedResult = false;

      const result = evaluateLogicalExpression(FALSY_AND_LOGICAL_EXPRESSION);

      expect(result).toEqual(expectedResult);
    })
  });

  describe('for simple OR operations should return', () => {
    test('true for OR expression with single true variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_VARIABLE, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with single true variable - reverted', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with both true variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_VARIABLE, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR expression with both false variables', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR expression with many false variables', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_VARIABLE, FALSY_VARIABLE, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with one true variable among many false variables', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_VARIABLE, FALSY_VARIABLE, FALSY_VARIABLE, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with single true constant', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_CONSTANT, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with single true constant - reverted', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_CONSTANT, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with both true constants', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_CONSTANT, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR expression with both false constants', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_CONSTANT, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR expression with many false constants', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_CONSTANT, FALSY_CONSTANT, FALSY_CONSTANT, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with one true constant among many false constants', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_CONSTANT, FALSY_CONSTANT, FALSY_CONSTANT, FALSY_CONSTANT, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with variables and constants', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_VARIABLE, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with variables and constants - reverted', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_CONSTANT, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with both true variable and constant', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_VARIABLE, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR expression with both false variable and constant', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR expression with both false variable and constant - reverted', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_CONSTANT, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR expression with many false variables and constants', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_CONSTANT, FALSY_VARIABLE, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with one true variable among many false variables and constants', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_CONSTANT, FALSY_VARIABLE, FALSY_CONSTANT, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR expression with one true constant among many false variables and constants', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_CONSTANT, FALSY_VARIABLE, FALSY_CONSTANT, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('for simple AND operations should return', () => {

    test('true for AND expression with both true variables', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with one true variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with one true variable - reverted', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_VARIABLE, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with both falsy variables', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_VARIABLE, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND expression with both truthy variable and constant', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND expression with both truthy variable and constant - reverted', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_CONSTANT, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with both truthy variable and falsy constant', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with both falsy variable and truthy constant', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_VARIABLE, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with both falsy constants', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_CONSTANT, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with triple falsy constants', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_CONSTANT, FALSY_CONSTANT, FALSY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with triple falsy constants with one truthy constant', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_CONSTANT, FALSY_CONSTANT, FALSY_CONSTANT, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND expression with triple falsy constants with one truthy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_CONSTANT, FALSY_CONSTANT, FALSY_CONSTANT, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND expression with triple truthy constant', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_CONSTANT, TRUTHY_CONSTANT, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND expression with triple truthy variables', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, TRUTHY_VARIABLE, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND expression with mixed truthy variables and constants', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, TRUTHY_VARIABLE, TRUTHY_VARIABLE, TRUTHY_CONSTANT]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('for nested operations should return', () => {
    test('true for OR operation with truthy nested OR operation and truthy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_VARIABLE, TRUTHY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR operation with truthy nested OR operation and falsy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, TRUTHY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR operation with truthy nested AND operation and falsy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, TRUTHY_AND_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR operation with falsy nested OR operation and truthy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [TRUTHY_VARIABLE, FALSY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR operation with falsy nested OR operation and falsy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_VARIABLE, FALSY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND operation with truthy nested OR operation and truthy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, TRUTHY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND operation with truthy nested OR operation and falsy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_VARIABLE, TRUTHY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND operation with falsy nested OR operation and truthy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_VARIABLE, FALSY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND operation with falsy nested OR operation and falsy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_VARIABLE, FALSY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND operation with falsy nested AND operation and falsy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [FALSY_VARIABLE, FALSY_AND_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND operation with two truthy OR operations', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_OR_LOGICAL_EXPRESSION, TRUTHY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND operation with two truthy OR and AND operations', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_OR_LOGICAL_EXPRESSION, TRUTHY_AND_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND operation with one truthy OR operation', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_OR_LOGICAL_EXPRESSION, FALSY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND operation with one truthy AND operation', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_AND_LOGICAL_EXPRESSION, FALSY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for OR operation with two falsy nested OR operations and falsy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_OR_LOGICAL_EXPRESSION, FALSY_OR_LOGICAL_EXPRESSION, FALSY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR operation with two falsy nested OR operations and falsy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [FALSY_OR_LOGICAL_EXPRESSION, FALSY_OR_LOGICAL_EXPRESSION, TRUTHY_VARIABLE]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND operation with truthy nested OR and AND operations and truthy variable', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_AND_LOGICAL_EXPRESSION, TRUTHY_VARIABLE, TRUTHY_OR_LOGICAL_EXPRESSION]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('false for AND operation with truthy nested OR and AND operations and falsy variable', () => {
      const expectedResult = false;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [TRUTHY_OR_LOGICAL_EXPRESSION, TRUTHY_AND_LOGICAL_EXPRESSION, FALSY_VARIABLE,]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for OR operation with dragons and princes right down there', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.Or,
        arguments: [
          FALSY_OR_LOGICAL_EXPRESSION,
          FALSY_AND_LOGICAL_EXPRESSION,
          {
            operand: Operand.And,
            arguments: [
              {
                operand: Operand.And,
                arguments: [TRUTHY_VARIABLE, TRUTHY_CONSTANT]
              },
              {
                operand: Operand.Or,
                arguments: [TRUTHY_VARIABLE, TRUTHY_CONSTANT]
              },
              {
                operand: Operand.Or,
                arguments: [FALSY_OR_LOGICAL_EXPRESSION, FALSY_AND_LOGICAL_EXPRESSION, FALSY_VARIABLE, FALSY_CONSTANT, true]
              },
            ]
          }
        ]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });

    test('true for AND operation with orcs and trolls right down there', () => {
      const expectedResult = true;
      const logicalExpression: LogicalExpression = {
        operand: Operand.And,
        arguments: [
          {
            operand: Operand.And,
            arguments: [
              TRUTHY_VARIABLE,
              TRUTHY_CONSTANT,
              true,
              {
                operand: Operand.And,
                arguments: [TRUTHY_VARIABLE, TRUTHY_CONSTANT, TRUTHY_AND_LOGICAL_EXPRESSION, TRUTHY_OR_LOGICAL_EXPRESSION]
              }
            ]
          },
          {
            operand: Operand.And,
            arguments: [
              {
                operand: Operand.And,
                arguments: [TRUTHY_VARIABLE, TRUTHY_CONSTANT]
              },
              {
                operand: Operand.Or,
                arguments: [TRUTHY_VARIABLE, TRUTHY_CONSTANT]
              },
              {
                operand: Operand.Or,
                arguments: [FALSY_OR_LOGICAL_EXPRESSION, FALSY_AND_LOGICAL_EXPRESSION, FALSY_VARIABLE, FALSY_CONSTANT, true]
              },
            ]
          }
        ]
      };

      const result = evaluateLogicalExpression(logicalExpression);

      expect(result).toEqual(expectedResult);
    });
  })
})
