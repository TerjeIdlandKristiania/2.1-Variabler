const { arealAvKvadrat } = require('./arealAvKvadrat');

test('beregner arealet av kvadratet korrekt', () => {
  expect(arealAvKvadrat(6)).toBe(36);
});
