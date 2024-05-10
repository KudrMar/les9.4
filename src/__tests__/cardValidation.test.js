import ValidatorsWidget from '../js/Validators-widget.js';
const validatorsWidget = new ValidatorsWidget('');

describe('Valid', () => {
    test.each([
      ['2200240751986825', true],
      ['2400240751986826', false]
    ])(('Valid'), (number, result) => {
      expect(validatorsWidget.isValid(number)).toBe(result);
    });
  });