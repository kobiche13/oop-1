import Magician from '../magic.js';

const checkObject = {
  name: 'Ivan',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};
test('create Magician', () => {
  const result = new Magician('Ivan', 'Magician');
  expect(result).toEqual(checkObject);
});

test('check in Error', () => {
  expect(() => new Magician('I', 'Magician')).toThrow(Error);
  expect(() => new Magician('Ivan', 'Magicia')).toThrow(Error);
});
