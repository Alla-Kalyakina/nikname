import Validator from '../app';

test.each([
  ['12Имя', false],
  ['Name1', false],
  ['Андрей', false],
  ['Name1234_test', false],
  ['Name12-3_test-', false],
  ['N', true],
  ['Na', true],
  ['Name123', false],
])(
  ('testValidateUsername()'),
  (name, expected) => {
    const validStr = new Validator(name);
    const received = validStr.validateUserName();
    expect(received).toBe(expected);
  },
);
