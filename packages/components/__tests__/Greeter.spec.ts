import { Greeter } from '../src/Greeter';
test('My Greeter', () => {
  expect(Greeter('John')).toBe('Hello John');
});