// constructor
function UI() {
  //
}


// filmler arayüze ekleniyor
UI.prototype.addFilmToUI = function (filmObjesi) {
  const filmList = document.getElementById("films");
  filmList.innerHTML += `
    
    <tr>
    <td><img src="${filmObjesi.url}" class="img-fluid img-thumbnail"></td>
    <td>${filmObjesi.title}</td>
    <td>${filmObjesi.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
   
    
    
    `;
};
// submit işlemi yapıldıktan sonra form inputları temizleniyor
UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};




// bilgilendirme mesajları eklenecek
UI.prototype.showMessage = function (alertType, alertMessage) {
  const bodyElement = document.querySelector(".card-body"); // buranın sonuna html kodları eklenecek
  const alert = document.createElement("div");
  if (alertType === "success") {
    // mesaj olarak success ve görünüş olarak succes kazaandır

    alert.innerHTML = `
      
      <div class="alert alert-success" role="alert">
      ${alertMessage}
      </div>

      `;
    console.log(alertMessage);
  } else {
    alert.innerHTML = `
    <div class="alert alert-danger" role="alert">
    ${alertMessage}
    </div>`;
    console.log(alertMessage);
  }
  bodyElement.appendChild(alert);
  // Set timeout
  setTimeout(function () {
    alert.remove();
  },2000);

  
};


// localde saklanan veriler sayfa ilk açıldığında yüklenecek 
UI.prototype.loadAllFilms = function(films){
  const filmList = document.getElementById("films");
  films.forEach(film => {
    filmList.innerHTML +=
      `
      <tr>
      <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
      <td>${film.title}</td>
      <td>${film.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>

      `
  })
}
// film silme arayüzden silme
UI.prototype.deleteFilmFromUI = function(element){
  element.parentElement.parentElement.remove();
}
