addbutton.addEventListener("click",function(e){
    if(titleinput.value.trim() === "" || authorinput.value.trim() === "" || imageinput.value.trim() === "" || contentinput.value.trim() === "" || categoryinput.value.trim === ""){
      UI.ShowAlert("danger","Lütfen Bütün Bilgileri Eksiksiz Girin")
    }
    else{
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ ' / ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      console.log(typeof date);
      const newPost = {
          "title" : titleinput.value.trim(),
          "author" : authorinput.value.trim(),
          "img" : imageinput.value.trim(),
          "category" : categoryinput.value.trim(),
          "content" : contentinput.value.trim(),
          "date": date,  
      }
      request.post(newPost)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      UI.ShowAlert("success","Blog Başarıyla Eklendi");
    }
    e.preventDefault();
})
request
  .get()
  .then((data) => data.forEach(function(info){
        UI.RenderUI(info);
    }) )
  .catch((err) => console.log("hata"));
container.addEventListener("click",function(e){
    if(e.target.className ==="btn btn-danger bi bi-trash2"){
        console.log(e.target.id);
        request.delete(e.target.id)
        .then((msg) => console.log(msg))
        .catch((err) => console.log(err));
    }
})
container.addEventListener("click",function(e){
    if(e.target.className === "btn btn-success bi bi-pencil"){
      for (const element of editbuttonhide) {
        element.style.display = 'none';
      }
       const editbutton = document.createElement("button");
       editbutton.className = "btn btn-dark";
       editbutton.innerHTML="Düzenle ve Kaydet";
       editpart.appendChild(editbutton); 
      request
      .get()
      .then((data) => data.forEach(function(info){
          if(e.target.id == info.id){
            editcontent.value = info.content;
            editauthor.value = info.author;
            edittitle.value = info.title;
            editcategory.value = info.category;
            editimage.value = info.img;
            editbutton.id = info.id;
          }
      accordion.classList.add("show");
      editaccordion.scrollIntoView({behavior: "smooth"});}))
      .catch((err) => console.log("hata"));     
    }
})
editpart.addEventListener("click",function(e){
    if(e.target.className === "btn btn-dark"){
      request
      .get()
      .then((data) => data.forEach(function(info){
          if(info.id == e.target.id){
            const cardid = info.id;
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            console.log(typeof date);
            const Deneme = {
              "title" : edittitle.value.trim(),
              "author" : editauthor.value.trim(),
              "img" : editimage.value.trim(),
              "category" : editcategory.value.trim(),
              "content" : editcontent.value.trim(),
              "date": date,  
          } 
            request.put(info.id,Deneme)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
          }
       }))
      .catch((err) => console.log("hata")); 
    }
    e.preventDefault();  
}
)
categorybuttondiv.addEventListener("click",function(e){
    if(e.target.className ==="btn btn-dark bi" || "btn btn-success bi" || "btn btn-primary bi"){ 
        container.innerHTML="";
        request.get()
        .then((data) => data.forEach(function(info){
            if(info.category.toLowerCase() === e.target.id.toLowerCase()){
                UI.RenderUI(info);
            }
        }))
        .catch((err) => console.log("hata"));   
    }
    if(e.target.className ==="btn btn-info bi"){ 
        container.innerHTML="";
        request.get()
        .then((data) => data.forEach(function(info){
            if(info.category.toLowerCase() !== "spor" && info.category.toLowerCase() !== "yemek" && info.category.toLowerCase() !== "teknoloji"){
                UI.RenderUI(info);
            }
        }))
        .catch((err) => console.log("hata"));   
    }
    if(e.target.className ==="btn btn-secondary bi"){ 
        container.innerHTML="";
        request.get()
        .then((data) => data.forEach(function(info){
            UI.RenderUI(info);
            
        }))
        .catch((err) => console.log("hata"));   
    }
})
search.addEventListener("keyup",function(e){
    container.innerHTML = "";
    if(search.value === ""){
        request
        .get()
        .then((data) =>data.forEach(function(info){
                    UI.RenderUI(info);
            }))
    }
    else{
        request.get()
    .then((data) => data.forEach(function(info){
        if(info.title.toLowerCase().indexOf(search.value.toLowerCase()) > -1 ){
                UI.RenderUI(info);
            }
        }))
        .catch((err) => console.log("hata"));
    } 
})