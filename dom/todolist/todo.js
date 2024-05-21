const removeButton = document.querySelectorAll('.fa-remove');
const ul = document.querySelector('ul');
console.log(document.querySelector('li').classList);
console.log(document.querySelector('a').classList);

let count = 5; 

const ekle = document.querySelector('button');
ekle.addEventListener("click",function(){
    const li = document.createElement("li");
    const a = document.createElement("a");
    const i = document.createElement("i");

    li.textContent = "todo " + count;
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');

    a.setAttribute("href", "#");
    a.classList.add('delete-item');

    i.classList.add("fa",'fa-remove');

    a.append(i);
    li.append(a);
    ul.append(li);
    i.style.color = 'red';
    count++;
})


console.log(removeButton);
