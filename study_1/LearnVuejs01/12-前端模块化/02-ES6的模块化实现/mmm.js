// 1. 导入{}中定义的变量
import {flag} from "./aaa.js";

if(flag){
  console.log('小明是天才，噶哈哈');
}

// 2. 直接导入export
import {num1,height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3. 导入export的function
import {mul,Person} from "./aaa.js"

console.log(mul(20, 30));
const p = new Person()
p.run();

// 4. export default
import addr from  "./aaa.js"

console.log(addr);

// 5. 统一导入
// import {flag,mul} from "./aaa.js"
import * as aaa from "./aaa.js"

console.log(aaa.flag);