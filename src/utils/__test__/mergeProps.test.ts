import { mergeProps } from "..";

test("测试两个对象合并有没问题", () => {
  expect(mergeProps({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
});

test("测试三个对象合并有没问题", () => {
  expect(mergeProps({ a: 1 }, { b: 2 }, { c: 3 })).toEqual({
    a: 1,
    b: 2,
    c: 3,
  });
});
