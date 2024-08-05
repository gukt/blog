---
date: 2023/3/13 10:46:25
_path: /blog/javascript-inheritance-in-detail
tags: [xxx, yyy, zzz]
---

## 关于 JavaScript 的原型和原型链

## 什么是原型

JavaScript 中的原型，是指构造函数上的 `prototype` 属性，该属性是一个对象实例，声明函数后，JavaScript 就会自动为该函数添加 `prototype` 属性，因此，所有的函数永远都有一个默认的 prototype 属性。

```js
function Cat(name) {
  this.name = name
}
console.log(Cat.prototype)
// 输出结果：
// {
//   	constructor: f Cat(name),
//     __proto__: Object
// }
```

当成功创建一个对象后，对象的 `__proto__` 属性指向创建它的构造函数的 `prototype` 。

```js
let cat = new Cat('tom')
// 输出结果：
// {
//   	constructor: f Cat(name),
//     __proto__: Object
// }
cat.__proto__ === Cat.prototype // true
```

注意：`__proto__` 属性是非标准的，尽管它被很多浏览器支持。从 `ES6` 开始，可以使用 `Object.getPrototypeOf()` 方法来获取实例的原型对象。

```js
Object.getPrototypeOf(cat) === Cat.prototype // true
```

# 什么是原型链

`Cat.prototype` 也是一个对象实例，既然是对象，那么它也是其他构造函数构造出的，它也有 `__proto__` 属性（在下面输出结果中的 `#2` 处）。

```js
console.log(cat)
```

输出结果

```js
{
  	name: 'tom',
  	__proto__: { // #1
    	constructor: f Cat(name),
      __proto__: { // #2
        constructor: ƒ Object()
				hasOwnProperty: ƒ hasOwnProperty()
				isPrototypeOf: ƒ isPrototypeOf()
        ...
      }
  	}
}
```

`#1` 处的 `__proto__` 是 `cat` 实例的原型，`#2` 处的 `__proto__` 是 `cat` 实例的原型的原型。

目前为止，我们看到两个原型串起来了，这就是原型链。层层向上，直到一个对象的原型为 null 才结束。null 对象没有原型，它处于原型链的顶端。

几乎所有的 JavaScript 中的对象都是位于原型链顶端的 `Object` 实例，但这不是一定的，因为原型链可以人为的被打破。

# 基于原型链的继承

原型链继承模型即是缺点也是优点，我们可以用它来构建经典的继承模型。

缺点是，它足够灵活，以至于写的不好容易出问题、且不像基于“类”的语言那样，遵循严谨的继承规范。

## 原型链继承是如何工作的呢？

前面讲了原型链是如何产生并串联起来形成原型链的，但如何用原型链实现继承的呢？

实际上原型链上的每个原型对象都可以定义单独的属性。当我们要访问一个对象属性时，引擎会先搜索对象实例自身有没有该属性，如果没有，就顺着原型链层层向上查找，直到原型链的顶端。

```js
function Cat(name) {
  this.name = name
}
let cat = new Cat('tom')
console.log(cat.toString()) // [object Object]
```

cat 实例自身、以及 Cat.prototype 上，都没有定义过 toString ，所以要沿着原型链向上查找，直到发现 `Object.prototype` 上有这个方法，所以调用的实际上是 `Object.prototype.toString()` 。

```js
cat.__proto__.__proto__.toString() // [object Object]
```

如果找不到属性，会输出 undefined。

```js
console.log(cat.notFound) // undefined
```

## 属性继承

在原型对象上添加属性，所有的实例对象就会自动继承。

```js
function Cat(name) {
  this.name = name
}
Cat.prototype.a = 1
Cat.prototype.b = 2
let cat = new Cat('tom')
console.log(cat.a, cat.b) // 1, 2
```

注意，如果想要一次性添加多个属性时，不要这么写：

```js
Cat.prototype = { a: 1, b: 2 }
```

这样会打破原型链，`{ a: 1, b: 2}` 就会成为新的原型对象，且这个对象没有上级原型了。

可以使用 Object.assign() 方法（ES6 新增）。

```js
Object.assign(Cat.prototype, { a: 1, b: 2 })
```

## 方法继承

JavaScript 中并没有真正意义上的方法。所谓方法其实只是一个属性类型为 Function 的对象。

```js
function Cat(name) {
  this.name = name
}
// 在 Cat 原型上定义一个新的 say 方法，所有实例都可以访问到
Cat.prototype.say = function () {
  return 'meow'
}
let cat = new Cat('tom')
cat.say() // meow
```

当继承的函数被调用时，this 指向当前继承的对象，而不是继承的函数所在的原型对象。

```js
let animal = {
  name: 'none',
  greeting: function () {
    return 'I am ' + this.name
  },
}
let cat = Object.create(animal)
cat.name = 'tom'
cat.greeting() // I am tom
```

## 不同方式创建对象及原型链

在 JavaScript 中，我们常见的 Array、Object、Function（包括具名和匿名函数） 实际上都是构造函数。

在 JavaScript 中，构造函数其实就是普通函数，当使用 new 操作符时，就可以被称为构造函数，此时函数体内的 this 指向的是创建的对象实例。

```js
typeof Array // function
typeof Object // function
typeof Function // function
typeof function () {} // function
typeof function foo() {} // function
```

理解了这一点，就可以统一认识了。 实际上创建对象（包括字面量方式创建）都是通过相应构造函数创建的。

1、字面量方式创建对象，实际上调用的是 Object 构造函数

```js
let o = { foo: 'foo' }
console.log(o)
```

原型链如下：

```js
o -> Object.prototype -> null
```

2、字面量方式创建数组对象，实际上调用的是 Array 构造函数

```js
let a = [1, 2, 3]
```

原型链如下：

```js
a -> Array.prototype -> Object.prototype -> null
```

3、声明一个具名或匿名函数时，实际上调用的是 Function 构造函数

```js
function Foo(name) {
  return 'foo'
}
Foo.__proto__ === Function.prototype // true
```

原型链如下：

```js
Foo -> Function.prototype -> Object.prototype -> null
```

下面介绍一个容易迷惑的地方，由于 Foo 是一个函数，所以它也可以作为构造函数来构造实例。

```js
let foo1 = new Foo()
foo1.__proto__ === Foo.prototype // true
```

原型链如下：

```js
foo1 -> Foo.prototype -> Function.prototype -> Object.prototype -> null
```

# 调用父类构造函数

```js
function Animal(name) {
  this.name = name
}
function Cat(name, age) {
  Animal.call(this, name)
  this.age = age
}
```

# 属性覆盖

如果实例对象自身、或子类中定义了同名属性，则会覆盖上层原型链上定义的属性。

```js
function Cat(name) {
  this.name = name
}
cat.toString() // [object Object]
Cat.prototype.toString = function () {
  return `[Cat: ${this.name}]`
}
cat.toString() // [Cat:tom]
```

父类私有方法的实现

子类调用父类构造函数

# 关于 Javascript 的继承

## 遇到的设计难题

作者不想引入“类”的概念，因为它觉得那样会让脚本语言变得笨重，对初学者不友好（题外话：搞得很多初学者对 JavaScript 的继承机制更是雨里雾里，这样就友好了？）。

但是 JavaScript 语言里又都是对象，不引入类的概念，要如何实现继承呢？最终他引入了 C++、Java 等面向对象语言中的 new 关键字，使用它来创建实例对象。

我们知道在 Java 中，`Person p = new Person()` 这条语句中的 Person 是一个类。JavaScript 中没有类，那创建个锤子？

事实上，JavaScript 中写法是一样的，但概念不一样。

```js
let a = new Array()
```

以上的语句中，Array 不是类，而是构造函数，用于创建数组实例。

```js
typeof Array // "function"
```

构造函数就是一普通函数。

```js
function Foo(name) {
  this.name = name
}
let foo = new Foo()
```

我们称 foo 为对象实例。而 Foo 是用以创建 foo 实例的构造函数。构造函数中的 this 关键字指向的是实例对象。

## 如何共享属性和方法
