// import: 从person模块中引入Person类
import { Person } from "./person.js";

export function promote() {}

// export: 导出Teacher类以便——>导入任何需要它的地方
export default class Teacher extends Person {
  constructor(name, degree) {
    // 在子类中构造函数时，必须用super关键字引用父类
    super(name);
    this.degree = degree; // 初始化degree
  }

  teach() {
    console.log("teach");
  }
}
