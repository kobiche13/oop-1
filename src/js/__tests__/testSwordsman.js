import Swordsman from '../swordsman.js';

const checkObject = {
  name: 'Ivan',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};
test('create Swordsman', () => {
  const result = new Swordsman('Ivan', 'Swordsman');
  expect(result).toEqual(checkObject);
});

test('check in Error', () => {
  expect(() => new Swordsman('I', 'Swordsman')).toThrow(Error);
  expect(() => new Swordsman('Ivan', 'Swordsma')).toThrow(Error);
});
