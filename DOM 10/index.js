// difference between innerHTML and innerText

// innerHTML returns the HTML content of an element, including any nested HTML tags. It allows you to access and manipulate the entire HTML structure within the element. For example, if you have a div with some nested elements, innerHTML will return the entire HTML code as a string.

// innerText, on the other hand, returns the visible text content of an element, excluding any HTML tags. It provides a way to access and manipulate only the text that is displayed to the user. If you have a div with nested elements, innerText will return only the text that is visible to the user, without any HTML tags.

// step1

function subscribe() {
  let changeElement = document.querySelector(".js-button");

  if (changeElement.innerHTML === "Subscribe") {
    changeElement.innerHTML = "Subscribed";
    changeElement.classList.add("is-subscribed");
  } else {
    changeElement.innerHTML = "Subscribe";
    changeElement.classList.remove("is-subscribed");
  }

  console.log(changeElement);

  console.log(changeElement.innerHTML);

  console.log(changeElement.innerText);
}

// step 2 create calculateShipping function to calculate the shipping cost based on the order price. If the order price is less than or equal to $40, the shipping cost is $10. If the order price is greater than or equal to $50, the shipping cost is free. Otherwise, it should display an error message.

function calculateShipping() {
  let num1 = Number(document.querySelector(".js-orderprice").value);

  // let num2 = parseFloat(document.querySelector(".js-higerprice").value);

  // let operator = document.querySelector(".finalresult").value;

  let result = "";

  if (num1 <= 40) {
    result = num1 + 10;

    console.log(result);
  } else if (num1 >= 41) {
    result = num1;
  } else {
    console.log("Invalid order price");
  }

  document.querySelector(".finalresult").innerHTML = `$${result}`;
}

// step 3

function handleCostkeydown(event) {
  if (event.key === "Enter") {
    calculateShipping();
  }
}
