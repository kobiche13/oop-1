import Daemon from '../daemon.js';

const checkObject = {
  name: 'Ivan',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};
test('create Daemon', () => {
  const result = new Daemon('Ivan', 'Daemon');
  expect(result).toEqual(checkObject);
});

test('check in Error', () => {
  expect(() => new Daemon('I', 'Daemon')).toThrow(Error);
  expect(() => new Daemon('Ivan', 'Daemo')).toThrow(Error);
});
