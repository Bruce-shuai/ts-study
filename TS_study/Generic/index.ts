/**
 * 泛型
 * 比较有意思的重点和难点
 */

/**
 * Demo1
 */
// 为了换两种类型，tm的写两个函数
function returnItem (para: number) : number {
  return para;
}

function returnItem2 (para: string) : string {
  return para;
} 
// 避免重复性操作，使用泛型  泛型就是加一个 <T>
function returnItem3<T>(para: T): T {
  return para;
}

/**
 * 泛型接口
 * 泛型也可用于接口声明
 */

interface ReturnItemFn<T> {
  (para: T): T
}
const returnItem4: ReturnItemFn<number> = para => para;
// -----------想想React.FC----------

type FC<P = {}> = FunctionComponent<P>;
interface FunctionComponent<P = {}> {
  // 这个FC好像就是一个对象，又好像不是一个对象。 而下面的这个函数是个匿名函数
  // (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;  // 这就是一个函数
  // propTypes?: WeakValidationMap<P>;
  // contextTypes?: ValidityState<P>;
}

/**
 * 泛型类
 */
// 其实加个泛型很简单，就增加个<T>就够了
class Stack<T> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}


/**
 * 泛型约束
 * 约束泛型的类型~
 * 约束方式： <T extends xx>
 */

type Params = number | string

class Stack2<T extends Params> {
  private arr: T[] = []
  public push(item: T) {
    this.arr.push(item)
  }

}