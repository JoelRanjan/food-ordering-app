import { sum } from "../sum";

test("sum the given numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
