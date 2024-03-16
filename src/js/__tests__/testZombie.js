import Zombie from '../zombie.js';

const checkObject = {
  name: 'Ivan',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};
test('create Zombie', () => {
  const result = new Zombie('Ivan', 'Zombie');
  expect(result).toEqual(checkObject);
});

test('check in Error', () => {
  expect(() => new Zombie('I', 'Zombie')).toThrow(Error);
  expect(() => new Zombie('Ivan', 'Zombi')).toThrow(Error);
});
