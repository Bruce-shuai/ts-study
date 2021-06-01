/**
 * Class
 * es6中js的类缺少一些传统强类型语言中类的特性。
 * 比如 修饰符和抽象类...
 */

/**
 * 抽象类
 * 抽象类作为其他派生类的基类使用，一般不会被实例化~
 * 抽象类和接口的不同之处在于，抽象类可以包含成员的实现细节
 * 
 * abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法
 */

abstract class Animal {
  abstract makeSound(): void;   // 抽象函数
  move(): void {  // 这个操作有点神奇..
    console.log('roaming the earch...');
  }
}

// 抽象类不能实例化
// const animal = new Animal();  

// 我们不能直接实例化抽象类，通常需要我们创建子类继承基类，然后可以实例化子类
class Cat extends Animal {
  makeSound() {
    console.log('miao miao');
  }
}

const cat = new Cat();

cat.makeSound();   // miao miao
cat.move();        // roaming the earch...

/**
 * 访问限定符
 * ts有三类访问限定符  public private protected
 */

/**
 * class 作为接口，这在react中非常常用~
 */

