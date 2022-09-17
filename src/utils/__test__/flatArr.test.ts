import { flatArr } from ".."

test('测试数组是否正常', () => {
    expect(flatArr([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})

test('测试二维数组是否能变成一维数组', () => {
    expect(flatArr([1, [2, 3], 4])).toEqual([1, 2, 3, 4])
})

test('测试n维数组是否能变成一维数组', () => {
    expect(flatArr([1, [[2,3],4], 5,[6,[7]]])).toEqual([1, 2, 3, 4,5,6,7])
})