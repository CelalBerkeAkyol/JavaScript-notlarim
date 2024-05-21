const cardBody = document.getElementsByClassName("card-body")[1];
// yeni buton tanımlaması 
// dinamik şekilde buton ekleme
const link = document.createElement('a');
link.id = "new-link";
link.classList.add('btn', 'btn-danger');
link.href= "https://www.google.com/"
link.append(document.createTextNode("Yeni link"));
cardBody.append(link);
// dinamik element silme 
const clearButton = document.getElementById("clear-todos"); // buton seçildi

clearButton.addEventListener('click',function(){
    const li= document.querySelectorAll('li'); // liste elemanları seçildi
    li.forEach(element => {
        
        element.remove();
    });

})

