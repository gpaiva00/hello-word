describe("Example Test", () => {
  test("Sum two numbers", () => {
    function sum(a, b) {
      return a + b;
    }

    const result = sum(1, 2);

    expect(result).toEqual(3);
  });
});
