test("é um teste", () => {
  expect(1).toBe(1);
});

test("soma 1 + 2 para igualar a 3", () => {
  const soma = (a, b) => a + b;
  expect(soma(1, 2)).toBe(3);
}
);