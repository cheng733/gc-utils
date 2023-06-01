import { classnames } from "..";

test("两个classname 合并到一块", () => {
  expect(classnames("a", "b")).toEqual("a b");
});

test("把字符串和对象合并到一块", () => {
  expect(classnames("a", { b: true })).toEqual("a b");
});

test("对象为false不保留该classname", () => {
  expect(classnames("a", { b: false })).toEqual("a");
});
