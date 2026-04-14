// task 1 & 2 completed

// function changeText() {
//   let res= document.querySelector(".js-changetext");
//       res.innerHTML = "Loading...";
//     setTimeout(() => {
//       res.innerHTML = "Done";
//     }, 1000);

//   }

// function changeText() {
//   let res = document.querySelector(".js-newtext");

//   setTimeout(() => {
//     res.innerHTML = "Added";
//   }, 2000);
// }



// task 3 completed
// let timeoutId;

// function displayMessage() {
//   const messageElement = document.querySelector(".js-newtext");
//   messageElement.innerHTML = "Added";

//   // First, cancel the previous timeout so that
//   // it doesn't remove the message too quickly.
  
//  clearTimeout(timeoutId);
//   timeoutId = setTimeout(function () {
//     messageElement.innerHTML = "";
//   }, 2000);

  
// }


// task 4 completed


  let messageElement = document.querySelector(".js-textchange");
  let timeoutId=0;

  setInterval(() => {
    let k=messageElement.innerHTML = "Added";
      let p=timeoutId ++;    
      let res=`(${p}) ${k} `;
      messageElement.innerHTML = res;
  }, 1000);
// setInterval(function() {
//         if (document.title === 'App') {
//           document.title = '(2) New messages';
//         } else {
//           document.title = 'App';
//         }
//       }, 1000);

function displayMessage(){}