const calc = (a: number, b: number) => a + b;

describe('calc', () => {
  it.each([
    { a: 1, b: 2, expected: 3 },
    { a: 1, b: 0, expected: 1 },
  ])('$a + $b = $expected', ({ a, b, expected }) => {
    // exercise
    const actual = calc(a, b);

    // verify
    expect(actual).toBe(expected);
  });
});
