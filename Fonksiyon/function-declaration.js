
// ikinci yöntem ise farklı olarak fonksiyonun çağrıldığı kısımdan daha önce tanımlanması gerekiyor 
// function expression
const speak = function()
{
    console.log("Bu fonksiyon tanımlamanın ikinci yöntemi");
}
merhaba(); // birinci yöntemi çağırır 
speak(); // ikinci yöntemi çağırır


// Bu fonksiyon tanımlama yöntemi ile merhaba fonksiyonu satır olarak tanımlamadan önce çağrılsa bile hatasız bir şekilde çalışır 
// function declaration
function merhaba(){
    console.log("Merhaba dünya");
}

// parametreli fonksiyon 
const selamlama = function(name)
{
    console.log(`iyi günler ${name}`)
}
selamlama("celal berke");

//retrun fonksiyon 

const kareAlani = function(kenar)
{
    let area = kenar*kenar; 
    return area;
}
const sonuc = kareAlani(5);
console.log(`Karenin alanı = ${sonuc}`);

// arrow functions --- reactta çok fazla karşına çıkacak 
const kareAlaniHesapla = (kenar) =>{
    let area = kenar * kenar;
    console.log("Bu alan arrow function ile oluşturuldu " + area);
};
kareAlaniHesapla(10);
// arrow funcitonu kısaltarak bu şekilde yazabiliriz => işaretinden sonra gelen değer return edilir. Eğer bir değişken varsa parantez kullanmasanda olur. 
const merhabaDiyorum = (adınız) => `Merhaba ${adınız}`;
const personName = merhabaDiyorum("celal ");
console.log(personName);

// arrow vs normal function
const bill = function(products, tax)
{
    let total = 0 ; 
    for(let i = 0 ; i<products.length; i++){
        total += products[i] + products[i]*tax; 
    }
    return total; 
}
console.log(`your total bill is ${bill([10,15,30],0.2)}`);

const arrowBill = (products,tax) =>{

    for(let i = 0 ; i<products.length; i++){
        total += products[i] + products[i]*tax; 
    }

    }
    console.log(`your arrow total bill is ${bill([10,15,30],0.2)}`);