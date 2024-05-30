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


