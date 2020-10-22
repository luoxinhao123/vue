const app = new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-2',
        price:59.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2008-10',
        price:39.00,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price:129.00,
        count:1
      }

    ]
  },
  methods:{
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      // 1.普通的for循环
      let price=0;
      for(let i=0;i<this.books.length;i++)
      {
        price += this.books[i].price * this.books[i].count;
      }
      return price;

      // 2.for(let i in this.books)  找出对象数组中的每一项的索引，通过索引值完成操作
      // let price=0;
      // for (let i in this.books){
      //   price += this.books[i].price * this.books[i].count
      // }
      // return price;

      // 3. for(let i of this.books)   找出对象数组中的每一项并命名item，通过item直接完成操作
      // let price=0;
      // for (let item of this.books){
      //   price += item.price * item.count
      // }
      // return price;
    }
  },
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  }
})

//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）

const nums=[10,20,111,222,456,39,65]

// 高级写法，一行代码实现三个需求
let total = nums.filter(function (n) {
  return n<100
}).map(function (n) {
  return n * 2
}).reduce(function (prevalue,n) {
  return prevalue + n
},0)
console.log(total);

// //最高级写法
// let total = nums.filter(n => n<100).map(n => n * 2).reduce((pre,n) => pre + n);
// console.log(total);

// // 1.需求：取出所有小于100的数字
// // let newNums = []
// // for(let n of nums){
// //   if (n<100){
// //     newNums.push(n)
// //   }
// // }
// // ①filter函数的使用
// // filter中的回调函数有一个要求：必须返回布尔值
// // true：当返回true时，函数内部会自动将这次回调的n加入新的数组
// // false：当返回false时，函数的内部会自动过滤掉这次的n
// let newNums = nums.filter(function (n) {
//   return n<100
// })
// console.log(newNums);
//
// // 2.需求：将所有小于100的数字转化：全部*2
// // let new2Nums = []
// // for(let n of newNums){
// //   new2Nums.push(n*2)
// // }
// // ②map函数的使用
// let new2Nums = newNums.map(function (n) {
//   return n * 2
// })
// console.log(new2Nums);
//
// // 3.需求：将所有new2Nums数字相加。得到最终的结果
// // let total=0
// // for (let n of new2Nums){
// //   total +=n
// // }
// // console.log(total);
// // ③reduce函数的使用
// // 两个参数：一个函数，一个初始值；函数中有两个参数，一个代表之前的值，另一个代表现在的值
// let total = new2Nums.reduce(function (prevalue,n) {
//   return prevalue + n
// },0)
// console.log(total);