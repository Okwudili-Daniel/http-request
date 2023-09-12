import fs from "fs"
import path from "path"


const message = `welcome to codelab, you got in on `

// const welcomeEvent = async () => {
//     fs.mkdir("./Newfold", (error): void => {
//         if (error) {
//         console.log("error creating folder", error)
//         } else {
//             console.log("folder created successfully")
//     }
// })

//     fs.appendFile(path.join(__dirname, "../Newfold", "sean.txt"), message, (error): void =>{
//         if (error) {
//             console.log("error creating sean", error)
//         } else {
//             console.log("Sean appended successfully")
//         }
//     })
// }
// console.log(welcomeEvent())

// export default welcomeEvent;

const School = () =>{
    let num = [1,2,3,4,5,6]
    const rand = Math.floor(Math.random() *num.length )

    fs.mkdir("./Name", (error):void =>{
        if(error){
            console.log("created");            
        }else{
            console.log("Fail");            
        }
    })

    // fs.appendFile(path.join(__dirname, "../Name", "se.txt"), , (error): void =>{
    //             if (error) {
    //                 console.log("error creating sean", error)
    //             } else {
    //                 console.log("Sean appended successfully")
    //             }
    //         })
}
School()

export default School;