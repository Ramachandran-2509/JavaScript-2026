// first project todo list
let result = [];

function addnewList1() {
  let addElement = document.querySelector(".js-insert");
  let finalResult = document.querySelector(".js-showres");

  let res = addElement.value;

  result.push(res);

  let output = "";  
 

  for (let i = 0; i < result.length; i++) {
    output += `<p>${result[i]}</p>`;
    // console.log(output);
  }

  finalResult.innerHTML = output;

  addElement.value = "";
}

function clearList() {
  let finalResult = document.querySelector(".js-showres");
  // result = [];
  finalResult.innerHTML = "";
}






// final project todo list with date and name
let result2 = [];
function addnewList2() {
  let addElement = document.querySelector(".js-insert1");
  let addElement2 = document.querySelector(".js-insert2");
  let finalResult = document.querySelector(".js-showres1");

  let res = addElement.value;
  let res2 = addElement2.value;

  result2.push({ name: res, date: res2 });
  console.log(result2);

  let output = "";

  result2.forEach((item) => {
    output += `<p>${item.name} ${item.date} <button class="deletelist" 
    onclick="deleteItem(${result2.indexOf(item)})">Delete</button> </p>`;
  });


  // for (let i = 0; i < result2.length; i++) {
  //   output += `<p>${result2[i].name} ${result2[i].date} <button class="deletelist" onclick="deleteItem(${i})">Delete</button> </p>`;
  

  //   // console.log(output);
  // }

  finalResult.innerHTML = output;

  addElement.value = "";
  addElement2.value = "";

}

function deleteItem(index) {
  
  console.log(result2.splice(index, 1));  

  let finalResult = document.querySelector(".js-showres1");
  
  let output = "";
  

  // for (let i = 0; i < result2.length; i++) {
  //   output += `<div class="adding">${result2[i].name}</div> <div class="adding1">${result2[i].date}</div> <button class="deletelist" onclick="deleteItem(${i})">Delete</button>`;
  // } 
  // console.log(output);
  finalResult.innerHTML = output;


}




// function res(){

//   let user=[
//     {name:"John", age: 30},
//     {name:"Jane", age: 25},
//     {name:"Doe", age: 35}
//   ]

//   for(let i=0; i<user.length; i++){
//     if(user[i].age>=30){
//   console.log(user[i].name + " is " + user[i].age + " years old." );
//     }
    
//   }



// }
// res()


//  let users=[
//     {name:"John", age: 30},
//     {name:"Jane", age: 25},
//     {name:"Doe", age: 35}
//   ]


// users.forEach((user) => {
//   console.log(user.name, user.age);
// }) 

