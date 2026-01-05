import { expect, test } from 'vitest'
import { foo } from '#Source/utils.ts';

test('foo is 42', () => {
  expect(foo).toBe(42);
});
