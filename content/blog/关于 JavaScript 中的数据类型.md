JavaScript 中一共有 7 种基本数据类型：`string`、`boolean`、`number`、`bigint`、`null`、`undefined`、symbol，和一个 `object` 类型。

在浏览器 Console 直接输入以下基本数据，**可以看到这些基本数据是没有属性和方法的**：

```javascript
> 1
<- 1
> 1n
<- 1n
> true
<- true
> 'a'
<- "a"
> Symbol('foo')
<- Symbol(foo)
> null
<- null
> undefined
<- undefined
```

**基本类型是不可以改变的，这很容易和变量赋值的概念混淆：**

```javascript
let s1 = 'a'
s1 = 'b'
```

新手会认为这里的 s1 不是被改变了吗？这是因为将变量和基本类型的概念搞混淆了，上面的例子中，`s1` 是变量，`'a', 'b'` 是 `string` 基本类型。`s1` 变量可以用不同的基本类型值去赋值，但基本类型本身是不可改变的。



## 类型值比较

两个不同基本类型之间比较是不相等的:

```javascript
1 === '1' // false, 因为是 number 和 string 进行比较
1 === 1n // false, 因为是 number 和 bitint 进行比较
1 === true // false
null === undefined // false
null === null // true
undefined === undefined // true
'foo' === Symbol('foo') // false
```

对于 number 类型有小数点的比较：

```javascript
1 === 1.0 // true
1 === 1.000000000000001 // false
1 === 1.0000000000000001 // true
```

Symbol 是ES6 新引入的基本数据类型，之前是 6 种，现在多了这货。两个同名 Symbol 比较是不等的：

```javascript
let s1 = Symbol('foo')
let s2 = Symbol('foo')
s1 === s2 // false
```



## 两个特殊的 number 值

主流浏览器的全局对象都会有两个属性 NaN、Infinity，分别指向两个特殊的 number 基本类型的值：NaN、Infinity

```javascript
> NaN
<-NaN
> Infinity
<-Infinity
> window.Infinity
<-Infinity
> window.NaN
<-NaN
typeof NaN // number
typeof window.NaN // number
typeof Infinity // number
typeof globalThis.NaN // number
```

然而，需要注意的是，NaN 不可以和自身进行比较，而 Infinity 可以：

```javascript
NaN === NaN // false
Infinity === Infinity // true
```



## typeof 运算符

使用 `typeof` 运算符，可以返回字符串形式表示的数据类型，先看下常见的 5 种基本类型的返回结果：

```javascript
typeof 'a' // string
typeof true // boolean 
typeof 1 // number
typeof 1n // bigint
typeof Symbol('s1') // symbol
typeof undefined // undefined
```

有个特殊的情况，既然 null 也是基本类型值，那么使用 typeof null 是不是也是像其他 6 种基本值一样应该返回字符串 null 呢？

```javascript
typeof null // object
```

实际上返回字符串 `object`，这让新手容易感到疑惑。不过不用疑惑，在 JavaScript 最早时期就这样了，`null` 用来表示一个对象指向一个空指针，因此 `typeof null` 返回字符串 `object`。**尽管有人向 ECMAScript 提议让 typeof null === 'null'，但是被驳回了**。

JavaScript 中常见的数组概念，其实并不是有真正对应的类型，它其实也是 `Object` 类型 ：

```javascript
typeof [] // object
typeof {} // object
```

对函数使用 `typeof`，返回字符串 function：

```javascript
typeof window.setTimeout  // function
typeof function() {} // function
typeof (()=>{}) // function
typeof class C {} // function, 实际上 class 定义的是一个构造函数
```



## instanceof 运算符

`instanceof` 操作符用来判断对象的具体类型，举个例子：

```javascript
function Cat(name) {
  this.name = name
}
let cat1 = new Cat('Tom')
cat1 instanceof Cat // true
cat1 instanceof Object //true

let s1 = 'a'
let s2 = new String('a')
s1 instanceof String // false, s1 指向的值是基本类型，不是对象，所以返回 false
s2 instanceof String // true，s2 是通过 Stirng 函数构造出来的，所以返回 true
```

`instanceof` 用来检测 `cat1` 的原型链存不存在 `Cat.prototype`：

```javascript
// 先看下 cat1 对象的原型：
cat1.__proto__
> {constructor: ƒ}
  > constructor: ƒ Cat(name)
  > __proto__: Object

// 再看下 Cat 的 prototype 属性  
Cat.prototype
>	{constructor: ƒ}
  > constructor: ƒ Cat(name)
  > __proto__: Object

cat1.__proto__ === Cat.prototype // true
```

发现是相等的，因此 `instanceof` 结果返回 `true`。

同理，对于 `cat1 instanceof Object`，需要沿着原型链往上找，因为所有对象都继承自 `Object`，所以当然 `cat1 instanceof Object` 也是返回 `true`。



### 与 typeof 的不同点

1. typeof 后面接操作数（operand），可以是一个基本类型值、变量、或表达式。而 instanceof 后面跟的是一个构造器。
2. typeof 返回字符串，而 instanceof 返回 boolean 值

```javascript
let n1 = 1
typeof 1 // number
typeof n1 // number
typeof n1 + 1 // number

cat instanceOf Cat // true
cat instanceOf Object // true
```



## 包装对象

除了 null、undefined 两种基本类型外，所有基本类型都有对应的包装对象：

* String

* Boolean

* Number

* BigInt

* Symbol

注意：基本类型和包装对象之间的比较是不相等的。

```javascript
let s1 = 'a'
let s2 = new String('a')
let s3 = String('a')
s1 === s2 // false (1)
s1 === s2.valueOf() // true (2)
s1 === s3 // true (3)
```

1. 使用 new 运算符，返回的是一个 String 对象，尽管值是相等，但实际上比较结果是 false。
2. 通过 String 对象的 valueOf() 方法可以获得基本类型，然后和另一个基本类型就可以比较值是否相等。
3. 不使用 new 运算符，而是直接使用 String 函数返回值，返回的是基本类型，所以 s1 === s3  的比较结果为 true。



## TODO 

JavaScript 中是不存在函数类型、数组类型等等的。尽管我们经常遇到并实际使用数组、函数、Map、Set 这些概念，但实际上他们都是 object 类型

```javascript
typeof {} // object
typeof [] // object
typeof window.setTimeout  // function
typeof function() {} // function
typeof (()=>{}) // function
typeof class C {} // function, 实际上 class 定义的是一个构造函数
```