// aşağıdaki bilgiler ile html kodlarını seçebilirisn

// ilk karşısına çıkan p yi seçer
var data = document.querySelector('p');
console.log(data);
// tüm p etiketine sahip olanları seçer 
var data = document.querySelectorAll('p'); // dizi döndürür 
console.log(data);
data.forEach(element => {
    console.log(element);
});
console.log("********************")
var spesifikData = document.querySelector('div#selector > p');
console.log(spesifikData);
const deneme = document.querySelector('#selector > p:nth-child(3)');
console.log(deneme);
// daha farklı yöntemleri deneme zamanı geldi 

const data2 = document.getElementsByTagName('p');
console.log(data2);
const spesifikData2 = document.getElementById('selector');
console.log(spesifikData2);
// ----------------------------------------------------------------
