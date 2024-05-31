// callback fonksiyonu kendimizin isimlendirdiği amacı senkron işlemi bekletmek olan bir fonskyion
// örnek olarak bir kullanıcı login olduktan sonra postları görmesi gerekiyor

console.log("işlem başladı");
// eğer aşağıdaki callback parametresini kullanmazsak sistem cevap gelmesini beklemeden konsola login olmayı beklemeden işlemi bitiriyor bunun önüne geçmek için callback isimli bir parametre atıyoruz.

function login(username, password, callback) {
  setTimeout(() => {
     callback(
        { username: username, 
          password: password 
        }
    );
    // callback isimli bu fonksiyonun bitmesi bekleniyor sonrasında return ettiği değer çağrıldığı yerde tutulması gerekiyor
  }, 2000);
}
// post fonksiyonu 
const getPostsByUsername = (username,callback) =>{
  setTimeout(() => {
    callback(["post1","post2","post3"]);
  }, 2000);
}
// post details 
const getPostDetails = (post,callback) =>{
  setTimeout(() => {
      callback({
        title: "post title",
        içerik: "post içeriği"
      })
  }, 1000);
}



// tüm fonksiyonları buradan çalıştıracağız 
const user = login("celal berke", "1234", (user) => {
  // user değişkeni ile callback fonksiyonundan return edilen değer tutuluyor ve istenen değerler yazdırılıyor 
  console.log(user.username);
  console.log(user.password);
  // kişiye özel postları almak için ek
  getPostsByUsername(user.name, (posts)=>{
    //(posts) parametresi callback fonksiyonundan dönen değeri alır ve yazdırır 
    console.log(posts);

      getPostDetails(posts[0],(details)=>{
        console.log(details.title);
      })
  });
});


// bu örnekte şu anlık sıkıntı olmassa da callbacklerin iç içe kullanılması durumu karşımıza sıkıntı çıkartabilir buna callback hell deniyor bunu engellemek için promise yapısı karşımıza çıkacak 