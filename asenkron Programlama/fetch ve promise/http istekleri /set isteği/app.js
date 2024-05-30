class Request {
  post(url, data) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
const request = new Request();
request.post("https://jsonplaceholder.typicode.com/albums", {
  userId: 10,
  id: 101,
  title: "benim adım serdar tezcan",
});

// ikinci yöntem olarak promise içerisinde bir dataya döndürülebilir. örn :

class Request2 {
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(err => reject(err));
    });
  }
}
const request2 = new Request2();
request2.post("https://jsonplaceholder.typicode.com/albums", {
  userId: 13,
  id: 101,
  title: "benim adım celal berke akyol",
})
.then(newAlbum => console.log(newAlbum))
.catch(err=>console.log(err));
