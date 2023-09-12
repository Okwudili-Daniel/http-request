const os = require("os")
// console.log("hell");

const myOwn = os.cpus()
const result = myOwn[0].model.split(" ")[2]
// console.log(result);

const myArch = os.arch()
const myMemo = os.version()
console.log(myMemo);

// console.log(os.homedir());
// console.log(os.hostname());

let getAdd = os.networkInterfaces()
let x = []
for(let el in getAdd ){
    x.push(getAdd[el])
}
// console.log(x[0][1].address);

const total = os.totalmem()
const getGb = Math.floor(total/1000000000)
// console.log(getGb);

// if(result >= "3" && myArch === "*64" && getGb >=4){
//     console.log("welcome to codelab");
// }else if(result !== "3" && myArch === "*64" && getGb >4){
//     console.log("your os.cpus is low");

// }else if(result >= "3" && myArch !== "*64" && getGb >4){
// console.log("your os.arch is low");

// }else if(result >= "3" && myArch === "*64" && getGb !==4){
// console.log("your getGb is low");

// }else{
//     console.log("go and get a new laptop");
// }
// console.log(total);

/**classwork: write a condition that checks if a new intake's laptop matches the condition set by codelab
 * 
 * the laptop must have the following :
 * A: model must be i3 and above
 * B: the laptop arch must be *64 and above
 * C: the laptop must be 4 totalmem and above
 */

