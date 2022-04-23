// const amount = 2;

// if (amount < 10) {
//   console.log("small number");
// } else {
//   console.log("large number");
// }

// console.log(`hey its my first node app`);
// console.log(__filename);

// setInterval(() => {
//   console.log("something");
// }, 1000);
// const secret = "SUPER SECRET";
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//   console.log(`hello there ${name}`);
// };
// // imoport = require()
// const sayHi = require("./5-utils");
// const { john, peter } = require("./4-names");
// const data = require("./6-alternative-flavor");
// // console.log(data.singlePerson);
// require("./7-mind-grenade");
// sayHi("nikola");
// sayHi(john);
// sayHi(peter);

const os = require("os");

// info about current user

const user = os.userInfo();
console.log(user);
// method return system uptime in second

console.log(`the system uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
