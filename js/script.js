console.log("A dżem dobry!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.94;
let USD = 4.55;

amountElement.focus();

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;

        case "USD":
            result = amount * USD;
            break;
    }
    resultElement.innerText = result.toFixed(2);

});



