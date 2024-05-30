function Storage(){

}
// filmleri storageye yükler 
Storage.prototype.addFilmToStorage = function (newFilm){
    let films = this.getFilmsFromStorage(); // burayı anlamadım neden this var 
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
    
}
// filmleri storageden çeker 
Storage.prototype.getFilmsFromStorage = function (){
    let films; 
    if(localStorage.getItem("films") === null){
        // local boş ise bir dizi oluşturur 
        films = []; 

    }
    else{
        // local dolu ise films değişkenine films dizisini dizi şekilde çeker 
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films; 
}
// filmi localden silme 
Storage.prototype.deleteFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title == filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}