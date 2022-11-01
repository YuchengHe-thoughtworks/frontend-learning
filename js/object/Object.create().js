// Object.create() 方法用于创建一个新对象，
// 使用现有的对象来作为新创建对象的原型（prototype）。

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

// 以现有对象person是 新对象me的 原型
const me = Object.create(person);

// "name" is a property set on "me", but not on "person"
me.name = 'Emma';
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// My name is Emma. Am I human? true


// 「用Object.create()实现Classical inheritance」
// Shape(形状) - superclass 父类
function Shape() {
  this.x = 0;
  this.y = 0;
}
// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
}

// Rectangle(矩形) - subclass 子类
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// 在子类中写构造器哈

// subclass extends superclass
/*Rectangle.prototype = Object.create(Shape.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});*/
Rectangle.prototype = Object.create(Shape.prototype, {
  constructor: {
    value: Rectangle,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

const rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
