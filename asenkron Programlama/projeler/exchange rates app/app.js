// elementleri seçme 
const amountelement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency")
const currency = new Currency("EUR","TRY");

eventListeners();

function eventListeners(){
    amountelement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){
      currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);

    };
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);

    };
}

function exchangeCurrency(){
    currency.changeAmount(amountelement.value);
    currency.exchange(); // Currency sınıfı içerisindeki exchange fonksiyonunu çağırır 
    
}