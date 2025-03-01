// Creating an object 
// let obj = {
//     name : "Bilal",
//     age:21,
//     degree : "BCS",

//     myself : function(){
//         console.log("I am "+this.name+" and I am "+this.age+" years old.");
//     }
// }

// obj.myself();
// console.log(obj);

// // ***********************************************
// Creating an array

// let arr =[1,2,3,4,5];
// console.log(arr);
// let arr1 = new Array(1,2,3,4,5);
// console.log(arr1);
// console.log(arr[2]);

// // ***********************************************
// Pushing and poping in array

// let a1 = [1,2,3]
// a1.push(4);
// console.log(a1);
// a1.pop();
// console.log(a1);


// // ***********************************************
// Adding & Removing from left side
// let a1=[1,2,3];
// a1.unshift(0);
// a1.unshift(-1);
// a1.shift();
// console.log(a1);


// // ***********************************************
// Slicing an array and sorting it
// let a1 =[9,8,7,6,5,4,3,2,1]
// let a2 = a1.slice(4,9);
// console.log(a2);
// a2.sort();
// console.log(a2);

// // ***********************************************
// Splicing an array means adding and removing elements from array at any index

// let a1 = [1,2,3,4,5,6,7,8,9];
// a1.splice(4,2,10,11);
// console.log(a1);


// // ***********************************************
// Mapping an array

// let num =[10,20,30];
// let square = num.map((n , index)=>{
//     console.log(index);
//     return n*n;
// })
// console.log(square);

// // ***********************************************
// Filtering an array
// let a1 = [1,2,3,4,5,6,7,8,9];
// a2 = a1.filter((n)=>{
//     if(n%2==0){
//         console.log("Even number: "+n);
        
//     }
//     else{
//         console.log("Odd number: "+n);
//     }
// }
// )
// console.log(a2);


// // ***********************************************
// Finding an element in array
let a1 = [1,2,3,4,5,6,7,8,9];
let a2 = a1.find((n)=>{  
   console.log(n>5);
})   
console.log(a2);