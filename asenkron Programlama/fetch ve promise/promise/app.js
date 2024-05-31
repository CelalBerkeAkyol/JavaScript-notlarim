// bu işlemin çok benzerini callback ile yapmıştık bu iç içe geçen fonksiyonların sorun yaratabileceğinden buna çözüm olarak ise promise yapısından bahsedecektik :

console.log("işlem başladı");

// back-end aşağıdaki resolve - reject yani promise yapısını kurmakla mükellef bunları front-end kısmında daha az kullanacağız 
function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(serverStatus) resolve({ username: username, password: password });
        else reject("server offline ");
      
      // eğer sonuçta hata olmazsa resolve fonksiyonu çalışır.
    }, 1000);
  });
}

// post fonksiyonu
const getPostsByUsername = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3"]);
    }, 2000);
  });
};

// post details
const getPostDetails = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        title: "post title",
        içerik: "post içeriği",
      });
    }, 1000);
  });
};

// tüm fonksiyonları buradan çalıştıracağız
const user = login("celal berke", "1234", (user) => {
  // user değişkeni ile callback fonksiyonundan return edilen değer tutuluyor ve istenen değerler yazdırılıyor
  console.log(user.username);
  console.log(user.password);
  // kişiye özel postları almak için ek
  getPostsByUsername(user.name, (posts) => {
    //(posts) parametresi callback fonksiyonundan dönen değeri alır ve yazdırır
    console.log(posts);

    getPostDetails(posts[0], (details) => {
      console.log(details.title);
    });
  });
});


// front-end bu kısımla ilgileniyor 
login("celal berke akyol","12345")
.then(user=>{
    console.log(user);
    return getPostsByUsername(user.username);
})
.then(posts =>{
    console.log(posts);
    return getPostDetails(posts[0]);
})
.then(details => {
    console.log(details);
    console.log(details.title);
})
.catch(err=> console.log(err));