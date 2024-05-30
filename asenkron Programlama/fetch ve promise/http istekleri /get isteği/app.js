// bu uygulamada iki yöntem ile http isteği yapacağız 

// ------1) birinci yöntem 

// bir Request sınıfı oluşturuyoruz
class Request {
  // get fonksiyonunu fetch yardımı ile oluşturuyoruz
  get(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
// Request sınıfımızdan bir nesne oluşturuyoruz.
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums"); 




// ------2) ikinci yöntem 
class Request2 {
  // get fonksiyonunu fetch yardımı ile oluşturuyoruz
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
}


const reguest2 = new Request2();
let albums;
reguest2.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums);
})
.catch(err => console.log(err));

