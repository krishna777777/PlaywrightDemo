// let arr2 = new Array(4, 5, 6)
// console.log(arr2[0])
// console.log(arr2)

// let arr3 = new Array(4)




// arr3.push(2)
// console.log(arr3)

// console.log(typeof(arr2))
// console.log(typeof(arr3))
// console.log(typeof(arr4))

// let arr4 = [10,20,30];

// for ( let i = 0 ;i<arr4.length ;i++)
// {
//     console.log(arr4[i])

// }

// arr4.forEach(item => console.log(item))


// let arr5 = [

//   { name: "Krishna", age: 27 },
//   { name: "Rahul", age: 22 },
//   { name: "Priya", age: 30 }
// ]

// let k = arr5.forEach(item=> item.name)
// console.log(k)

// let j = arr5.map(item=>item.name)
// console.log(j)

// let m = arr5.filter(item => item.name=='Krishna')
// console.log(m)


// let arr = [1,2,3,4,5]


// k = arr.reduce((sum , item) => sum+item,0)
// console.log(k)

// j = arr.filter(item =>item%2==0)

// console.log(j)


let arr = [2,4,6,1]
arr.sort()

let k = arr.map(item => item*2)

console.log(k)


final = k.reduce((sum ,item)=> sum+item ,0)
console.log(final)

let scores = [10 , 1, 11 , 9,2]

let m = scores.sort((a,b) =>(a-b))

console.log(m)