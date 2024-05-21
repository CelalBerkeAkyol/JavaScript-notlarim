const button = document.querySelector('button');
const ul = document.querySelector('ul');
const lists = document.querySelectorAll('li');

// Tüm liste elemanlarına 'liste' class'ı eklendi ve tıklama olay dinleyicisi eklendi
lists.forEach(element => {
    element.classList.add('liste');
    element.addEventListener('click', e => {
        e.target.remove();
    });
});

button.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = "bu yeni bir görev";
    li.classList.add('liste');
    
    // Yeni eklenen 'li' elemanına tıklama olay dinleyicisi ekle
    li.addEventListener('click', e => {
        e.target.remove();
    });
    
    ul.append(li);
});
