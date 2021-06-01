/**
 * TS 让 JS函数添加了额外的功能，使函数更加方便使用
 */

/**
 * 定义函数类型
 */
const add = (a: number, b: number) => a + b;

/**
 * 重载(Overload)
 */

// 先看一个问题：
// function assigned (a: number, b?: number, c?: number, d?: any) {
//   if (b === undefined && c === undefined && d === undefined) {
//     b = c = d = a
//   } else if (c === undefined && d === undefined) {
//     c = a
//     d = b
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   }
// }

// 重载
interface Direction {
  top: number,
  bottom?: number,
  left?: number,
  right?: number
}
function assigned(all: number): Direction
function assigned(topAndBottom: number, leftAndRight: number): Direction
function assigned(top: number, right: number, bottom: number, left: number): Direction

function assigned (a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}

assigned(1)
assigned(1,2)
// assigned(1,2,3)   // 会出错
assigned(1,2,3,4)