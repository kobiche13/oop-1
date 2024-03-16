import Undead from '../undead.js';

const checkObject = {
  name: 'Ivan',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};
test('create Undead', () => {
  const result = new Undead('Ivan', 'Undead');
  expect(result).toEqual(checkObject);
});

test('check in Error', () => {
  expect(() => new Undead('I', 'Undead')).toThrow(Error);
  expect(() => new Undead('Ivan', 'Undea')).toThrow(Error);
});
