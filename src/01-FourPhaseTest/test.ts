class TestClass {
  calc(a: number, b: number) {
    return a + b;
  }
}

describe('TestClass', () => {
  it('calc', () => {
    // setup
    const obj = new TestClass();

    // exercise
    const actual = obj.calc(1, 2);

    // verify
    expect(actual).toBe(3);
  });
});
