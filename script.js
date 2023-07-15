
/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((data)=>{
    if(data.profession==='developer'){
      console.log("arr",data)
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((data)=>{
    if(data.profession==='developer'){
      console.log(data)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let member4 = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(member4);
    arr.map((data)=>{
      if(data.profession==='intern')
      {
        console.log(data)
      }
    })
}

function removeAdmin() {
  //Write your code here, just console.log

 //   1st way
    arr.map((data)=>{
      if(data.profession!=='admin'){
        console.log(data)
      }
    })

  //   2nd way without filter method
    //  newArr = [];
    //  arr.map((data)=>{
    //   if(data.profession!=='admin'){
    //     newArr.push(data)
    //   }
    // })
    // arr = newArr;
    // arr.map((d)=>{
    //   console.log(d)
    // })
}

function concatenateArray() {
  //Write your code here, just console.log 

  let arr2 = [
    {id: 4, name :"jack", age: 29, profession: "business Man"},
    {id :5, name: "John", age: 16, profession: "student"},
    {id: 6, name: "Marry", age:22, profession: "React Developer"}
  ]
 let combinedArr= arr.concat(arr2)
 combinedArr.map((data)=>{
   console.log(data)
 })

}
