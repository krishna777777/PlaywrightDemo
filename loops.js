// const a = true

// if (!a)
// {
//     console.log("ram")
// }
// else
// {
//     console.log("heyraam")
// }


// let b = 10

// while(b<=20)
// {
//     console.log(b)
//     b++
// }

// do {
//     console.log(b)

// }while(b<20)


// var t = 20 

// for ( var i = 0 ;i<t;i++)
// {
//     console.log(i)
// }

let t = 50 

let a = 5
let b = 10 


let count = 0 
for (let i = 30 ;i<=t ;i++)
{

    if (i%a==0 || i%b ==0){
        count++
        
    if (count>3){
        break

    }
    console.log(i)
    }
}    