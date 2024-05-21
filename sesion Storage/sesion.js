// butonlar seçildi 
const addButton = document.querySelector('#add');
const deleteButton = document.querySelector('#delete');
const clearButton = document.querySelector('#clear');
// formlardan değerler alınacak 
const addkey = document.querySelector('#addkey');
const addvalue =  document.querySelector('#addvalue');
const deletekey =  document.querySelector('#deletekey');
// fonksiyonlar
addButton.addEventListener('click',addItem);
deleteButton.addEventListener('click',deleteItem);
clearButton.addEventListener('click',clearItem);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}
function clearItem(e){
    sessionStorage.clear();
}