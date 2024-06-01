export class Request {
  // yapıcı metot sınıftan obje oluşturulurken çalışır url nesne oluştururken girilecek. 
  constructor(url) {
    this.url = url;
  }
  // get fonksiyonu ile json verileri alınır 
  async get() {
    const response = await fetch(this.url);
    const responseData = await response.json();
    return responseData;
  }
  // post fonksiyonu ile json verileri servere gönderilir
  async post(data) {
    const response = await fetch(this.url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();

    return responseData;
  }
  // put fonksiyonu ile json verileri güncellenir 
  async put(id, data) {
    const response = await fetch(this.url + "/" + id, {
      method: "put",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();

    return responseData;
  };
    // delete fonksiyonu ile json verileri silinir 

  async delete(id) {
    const response = await fetch(this.url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return "veri silindi";
  }
}
