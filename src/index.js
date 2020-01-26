console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
window.addEventListener("load", () => {
  fetch(imgUrl).then(res => res.json()).then(data => insertImages(data.message));
  fetch(breedUrl).then(res => res.json()).then(data => insertBreads(data.message));
  document.querySelector("select").addEventListener("change", (e)=> handleFilter(e.target.value));
});


 function insertImages(images){
   const imgdiv = document.querySelector('#dog-image-container');
   images.forEach(img => {
     const imgTag = document.createElement("img");
     imgTag.src = img;
     imgTag.width = 50;
     imgTag.height = 50;
     imgdiv.appendChild(imgTag);
   });
 }

 function insertBreads(breads){
   const ul = document.querySelector('ul#dog-breeds');
   for(bread in breads ){
     const li = document.createElement("li");
     li.textContent = bread;
     ul.appendChild(li);
   }
   addEventToList();
 }

 function addEventToList(){
   const list = document.querySelectorAll('ul#dog-breeds li');
   for(const li of list){
     li.addEventListener("click" , (e) => handleClick(e));
   }
 }

 function handleClick(e){
   e.target.style.color == "red" ? e.target.style.color = "black" : e.target.style.color = "red"
 }

 function handleFilter(inputString){
   const breeds = document.querySelectorAll('ul#dog-breeds li');
   for(const li of breeds){
     if(li.textContent.charAt(0) == inputString){
       li.style.display = "list-item";
     }
     else{
       li.style.display = "none";
     }
   }
 }
