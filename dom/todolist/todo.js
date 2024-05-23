// Değişkenler seçiliyor 
const form = document.getElementById('todo-form');
const todo = document.getElementById('todo');
const todoList = document.querySelector('.list-group');
const firstCardBody = document.getElementsByClassName('card-body')[0];
const secondCardBody = document.getElementsByClassName('card-body')[1];
const filter = document.getElementById('filter');
const clearButton = document.getElementById("clear-todos");
eventListener();

function eventListener() // Tüm eventler listelenir
{
    form.addEventListener('submit', addTodo);   
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAll);
}
// todoları silmeye yarayan fonksiyon
function deleteTodo(e){
    // class ismi fa fa-remove olan butona tıklandığı zaman (i) 2 üstü olan li elamanı bulunacak arayüzden ve localden silinecek
    if(e.target.className ==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteFromStorage(e.target.parentElement.parentElement.textContent); // localden silmeye yarar 

        showAlert("success","Başarılı ile silindi");
    }
}

// filtreleme işlemi yapacak bir fonks
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLocaleLowerCase();
        if(text.indexOf(filterValue)=== -1){
            listItem.setAttribute("style","display: none !important");

        }
        else{
            listItem.setAttribute("style","display:block");
        }
    });
}

// todo ekleme 
function addTodo(e)
{
    const newTodo = todo.value.trim(); // Todo inputu alınıp newTodo değişkenine atanıyor 

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin");
    } else {
        addTodoToUI(newTodo); // Arayüze yeni string newTodo değerini ekleyen fonksiyon 
        addTodoToStorage(newTodo); // Local storage'ye newTodo değerini ekleyen fonksiyon 
        showAlert("success", "Başarılı bir şekilde kayıt edildi");
    }
    e.preventDefault(); // Formu gönderdikten sonra sayfanın hemen yenilenmesini engelliyor 
}
// tüm todoları temizle 
function clearAll(){
    
    if(confirm("Tümünü silmek istediğinizden emin misiniz ?")){
        // arayüzden todoları temizleme 
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
    // localden todoları temizleme 
}
function showAlert(alertType, alertMessage)
{
    // Alert divi oluşturuluyor ve eklenecek className ve mesaj değişkeni gönderiliyor formun hemen altına ekleniyor 
    const alert = document.createElement('div');
    alert.className = `alert alert-${alertType}`;
    alert.textContent = alertMessage;
    firstCardBody.appendChild(alert);

    // Set timeout
    setTimeout(function(){
        alert.remove();
    }, 2000);
}

// Arayüze yeni string newTodo değerini ekleyen fonksiyon 
function addTodoToUI(newTodo)
{
    // List item oluşturma 
    const listItem = document.createElement('li');
    // Link oluştur ve attribute değerlerini gir
    const link = document.createElement('a');
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    // Text node ekleme 
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    // Todo list'e list item ekleme
    todoList.appendChild(listItem);

    console.log(newTodo); // Konsola newTodo değerini yazdırıyor. 

    // Input'u temizleme 
    todo.value = "";
}

// Değerleri local storage'dan çekiyor 
function getTodosFromStorage() {
    let todos;
    
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

// NewTodo değerini local storage'a ekliyor 
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage(); 
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
// NewTodoları localden sileceğiz. arayüzden silmemizi sağlayan fonksiyondaki parametre deletetodo olarak buraya aktarılıyor. 
function deleteFromStorage(deletetodo){
    let todos = getTodosFromStorage(); // localdeki todo array todos değişkeninde saklanıyor 
    // bu dizideki elemanlardan silmek istediğimiz todoyu indexi ile beraber buluyoruz. silmek istediğimiz (deletetodo) ile dizideki todo aynı ise silme işlemi gerçekleşiyor 
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1); 
        }
    });

    localStorage.setItem('todos',JSON.stringify(todos)); // değerler silindikten sonra localin güncellenmesi gerekiyor 
}

// sayfa yüklendiğinde localdeki değerler otomatik olarak yüklenir 
function loadAllTodosToUI()
{
    let todos = getTodosFromStorage();
    todos.forEach(todo => {
        addTodoToUI(todo);
    });
}