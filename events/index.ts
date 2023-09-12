import Event from "events"
import welcomeEvent from "./NewFs"
import School from "./NewFs"

// console.log(Event);


const emitter = new Event

// emitter.on("Money", () =>{
//     console.log(welcomeEvent);
    
// })


// setInterval(() =>{
//     emitter.emit("Money", "please get me rice 300 naira")
// }, 5000)
let num = [1,2,3,4,5,6]
const rand = Math.floor(Math.random() *num.length )
// console.log(rand);


const start = new Event

start.on("sch", () =>{
    console.log("welcome");    
})


start.emit("sch")