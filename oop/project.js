const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const filmForm = document.getElementById("film-form");
const secondCardBody= document.querySelectorAll(".card-body")[1];



const ui = new UI(); // UI Objesi üretiilr 
const storage = new Storage(); // storage objesi üretilir 

eventListeners();

function eventListeners() {
  filmForm.addEventListener("submit", addFilm);
  // sayfa yüklendiğinde localdeki verileri yükler 
  document.addEventListener("DOMContentLoaded",function(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  })
  secondCardBody.addEventListener("click",deleteFilm);


}
// filmleri ekleme fonksiyonu 
function addFilm(e) {
  
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  const filmObjesi = new Film(title,director,url);
  

  // boş mu değil mi kontrol edilir 
  if(title === "" || director === "" || url === ""){
    ui.showMessage("danger","Lütfen seçili alanları doldurunuz"); 
  }
  else {
    // yeni film eklemesi yapılır 
    ui.showMessage(string = "success","başarılı bir şekilde eklendi");
    ui.addFilmToUI(filmObjesi); // bu fonksiyon ile ui film eklenir


    // filmleri local'e ekleme fonksiyonu 
    storage.addFilmToStorage(filmObjesi);
  }

  ui.clearInputs(titleElement,directorElement,urlElement);
  e.preventDefault();
}
// film silme fonksiyonu 
function deleteFilm(e){
  if(e.target.id == "delete-film" )
    {
     ui.deleteFilmFromUI(e.target);
      storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
      ui.showMessage("success","film başarılı bir şekilde silindi")
    }
    
    
}



