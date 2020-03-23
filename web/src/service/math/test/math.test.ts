import { add } from '../math';

describe('Math', () => {
  it('test add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
