// eğer async anahtar kelimesini yazdığımız foksiyonda promise yapısı oluşturmazsak otomatik olarak sistem promise yapısı oluşturur ve döndürdüğümüz değeri resolve olarak yazdırır.
async function test0(data) {
  return data;
}
console.log(test0("merhaba"));


// await kullanımına örnek verelim: 
async function test(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("olumlu mesaj");
    }, 5000);
  });
  console.log("naber1");
  console.log("naber2");
  let reponse = await promise; // promise gelene kadar bir sonraki satırları çalıştırmaz ( fonksiyon içindeki satılar etkilenir global satırlar çalışır )
  console.log(reponse);
  console.log("naber3");
} // --> fonksiyon bitişi 

test("Merhaba")

// async ve await fetch ile kullanılır. Bu kullanıma örnek oluşturalım : 
     // not fetch promise döndürür 
async function getCurrency(url){
    const response = await fetch(url); // RESPONSE OBJECT

    const data = await response.json() // json object 

    console.log(data);
}
getCurrency("http://api.exchangeratesapi.io/v1/latest?access_key=MY-ACCES-KEY");

