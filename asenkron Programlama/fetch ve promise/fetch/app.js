function getTextFile(){
    // window objesinde bulunan fetch objesi ile ajaxda yaptığımız gibi asenkron bir istekte bulunuyoruz. Fetch objesine ait olan then ve catch metotları ile olumlu ve olumsuz sonuçları yakalıyoruz. İlk olumlu sonuç gelince then metodu çalışıyor response değişkenine isteğin sonucu geliyor ve arrow function çalışarak response değişkeninin içeriğini text metodu ile döndürülüyor. Sonuç ikinci then ile yakalanıp data isimli değişkende saklanıyor sonrasında bu değişken konsola yazdırılıyor. 
    fetch("example.txt")
    .then(response => response.text()) 
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
}

getTextFile();
// yukarıdaki örneği json dosyası ile oluşturalım
// localden json almak 
function getJsonFile(){
    fetch("employees.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .then(err=>console.log(err));

}
getJsonFile();

// Uzaktaki serberden alalım 

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    return response.json()
})
.then(data => console.log(data));


// sanırım promise dersinde bahsedildiği üzere promisin belli bir kısmı back-end işi bir kısmı front-end kısmı denilmişti bu front-end kısmında sadece then ve catch ile sonuçları elde edecektik. Fetch api olarak adlandırılıyorsa buradaki asıl mevzu catch ve then ile front-end için gerekli çıktıları almak önemli.