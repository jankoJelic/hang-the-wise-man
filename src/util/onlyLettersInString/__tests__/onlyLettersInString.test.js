import onlyLettersInString from "../onlyLettersInString";

test("checks if a string contains only alphabet letters", () => {
  expect(onlyLettersInString("jankojelic")).toBeTruthy();
  expect(onlyLettersInString("jankojelic99")).toBeFalsy();
  expect(onlyLettersInString("jankojelic.")).toBeFalsy();
});
