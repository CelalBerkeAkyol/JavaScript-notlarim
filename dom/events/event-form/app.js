// submit butonuna tıkladıkça consola yazı yazdıran bir blok 
const todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit',submitForm);
function submitForm(e){
    console.log('submit eventi');
    e.preventDefault();
}
// girilen metin ile headeri değiştiren blok 
const header = document.querySelector('.card-header');
const todoInput = document.querySelector('#todo');

todoInput.addEventListener('keyup',changeText);
function changeText(e){
    header.textContent = e.target.value;
}
// basılan tuşun aski değerlerini konsola yazdıran bir bölüm
document.addEventListener("keydown",run);
function run(e){
    console.log(e.which);
}
// mouse over and up events - header kısmına girince ve çıkınca konsola yazdırıyor 
header.addEventListener('mouseover',mouse);
header.addEventListener('mouseout',mouse);
function mouse(event){
    console.log(event.type);
    
}