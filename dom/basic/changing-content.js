const para = document.querySelector('p'); // p tagına sahip ilk element seçilir 
console.log(para);
para.innerText = "İlk paragraf tagını değiştirdim";// seçilen tagın içeriğini değiştirir 
console.log(para);
// console.logların sırası farklı olsada ikisinde de ilk parag... yazısı çıktı 

// alttaki örnekte etiketleri değişitriebileceğimizi hatta bunun içindeki değerleri yani class name olsun, style olsun, href içisi veya buton tıklaması gibi özllikleri değiştirebiliriz. 
para.innerHTML = "<h1> İlk paragraf tagını değiştirdim </h1>"; // tagın html kodunu değiştirdik 

// a linkini seçip attirbutelerini değiştirebiliriz 
const link = document.querySelector('a'); 
console.log(link.getAttribute("href")); 
link.setAttribute("href","youtube.com");
link.innerText = "youtubeye git";


// class name ve style değiştirelim 
const hoşgeldiniz = document.querySelector("h1");
hoşgeldiniz.setAttribute("style","color: blue"); // h1 elementinin rengini mavi yaptık 
// hoşgeldiniz.style.color = "black"; ---> bu şekilde de style değiştirilebiliyor 
// - içeren durumlarda js bunu yanlış anlamasın diye camel case ile ifade ederiz font-size değil de fontSize gibi. 
//---------------------------
// adding and removing class 
const content = document.querySelector('.succes');
// classList kullanarak sınıfları listeleyebilir, ekleyebilir, çıkartabiliriz. 
content.classList.remove('succes');
content.classList.add('error');
content.innerText = " Başarısız";
