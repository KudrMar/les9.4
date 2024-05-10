import CardType from '../js/CardType.js';

const cardType = new CardType;

describe('payment systems', () => {
    test.each([
      ['2200240751986825', 'mir'],
      ['2400240751986825', 'master'],
      ['3400240751986825', 'amex'],
      ['0000000000000000', '']
    ])(('payment systems'), (cardNumber, cardBrand) => {
      expect(cardType.getBrand(cardNumber).alias).toBe(cardBrand);
    });
  });