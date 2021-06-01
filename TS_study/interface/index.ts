/** 
 * interface 接口 
 * interface像一个强类型语言的函数调用~
 * interface像一个说明书，内容需公开(私有属性不能写在这!)
 * 掘金小册：接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 **/

/**
 * Demo1
 * 问题环境：有一个函数，函数要接受一个User对象，并返回User对象的属性
 */

const getUserName = user => user.name;  // 在ts中必须!!为user参数定义类型，默认是any

// 我们使用interface来描述这个User对象的类型
interface User {
  name: string,
  age: number,    // age?: number  表示可选属性
  isMale: boolean, // readonly isMale: boolean  表示这个属性编程只读属性，无法被修改
  say: (words: string) => string,  // 第一种定义接口函数的形式(注意: 这里只能写 => 不能写:)
  say2: Say2,   // 第二种定义接口的形式, 这里也说明了接口与接口之间可以无障碍嵌套放置
}
interface Say2 {
  (word: string):string   // 这里只能写 : 不能写 =>
}
// 现在参数user的类型就是刚刚定义的User定义的结构，并且User的属性顺序是没有影响的
const getUserName2 = (user:User) => user.age

/**
 * Demo2
 */

 interface Config {
  width?: number;
}

function  CalculateAreas(config: Config): { area: number} {
  let square = 100;
  if (config.width) {
      square = config.width * config.width;
  }
  return {area: square};
}

// let mySquare = CalculateAreas({ widdth: 5 });  // 被报错， widdth不是width
// 解决办法1：类型断言
let mySquare = CalculateAreas({ widdth: 5 } as Config);
// 解决办法2：添加字符串索引签名：
interface Config2 {
  width?: number;
  [propName: string]: any;
}

/**
 * Demo3
 * 问题环境： 新接口需要老接口的属性，并额外增加新的属性
 * 解决方法： 继承接口
 */
// 单个接口继承
interface VIPUser extends User {
  broadcast: () => void
}
interface SupperUser {
  say: (word: string) => string
}

// 多个接口继承 (这个还是牛逼)
interface VIPUser extends User, SupperUser {
  broadcast: () => void
}


// 额外再提一嘴：  组合和继承 优先选组合