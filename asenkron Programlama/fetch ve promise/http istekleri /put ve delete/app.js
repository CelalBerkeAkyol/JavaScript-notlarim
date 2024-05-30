class Request {
  put(url, data) {
    fetch(url, {
      method: "PUT", // posttan farklı olarak burası put oldu
      body: JSON.stringify(data), // değiştirmek istediğimiz data
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }


  // ---- SİLMEK İÇİN ------
  delete(url) {
    fetch(url, {
      method: "DELETE",
    }).then(response => console.log("Başarılı bir şekilde silme işlemi yapıldı"));
  }
} // ----- > class bitiş
const request = new Request();
// fonksiyondaki parametreler yerine url ve datayı girince değişiyor
request.put("https://jsonplaceholder.typicode.com/albums/1", {
  userId: 1,
  id: 1,
  title: "ben Burayı değiştirdim",
});
request.delete("https://jsonplaceholder.typicode.com/albums/1");