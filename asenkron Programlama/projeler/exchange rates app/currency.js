// key = 076760090484e5955df800d590a115bd
class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency; 
        this.amount = null; 
    }

    exchange(){
        fetch("http://api.exchangeratesapi.io/v1/latest?access_key=API_KEY&base=EUR")
        .then(response =>response.json())
        .then(data => {
            const parity = data.rates[this.secondCurrency];
            const amount2 = Number(this.amount);

            let total = parity * amount2;
            console.log(total);
        })
        .catch(err => console.log(err));
    }
    changeAmount(amount){
        this.amount = amount; 
        
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
        
        
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
        
    }
}

