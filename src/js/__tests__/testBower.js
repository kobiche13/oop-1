import Bowerman from '../bower.js';

const checkObject = {
  name: 'Ivan',
  type: 'Bowerman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};
test('create Bowerman', () => {
  const result = new Bowerman('Ivan', 'Bowerman');
  expect(result).toEqual(checkObject);
});

test('check in Error', () => {
  expect(() => new Bowerman('I', 'Bowerman')).toThrow(Error);
  expect(() => new Bowerman('Ivan', 'Bowerm')).toThrow(Error);
});
