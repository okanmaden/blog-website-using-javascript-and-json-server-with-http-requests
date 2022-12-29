class UI{
    static RenderUI(info){
        container.innerHTML+=`<div class="col-md-4 col-12 d-flex justify-content-center mb-2" id="blog_${info.id}">
                    <div class="card d-flex justify-content-center" style="width: 36rem;">
                        <img src="${info.img}" class="card-img-top imgsizecard img-fluid" id="card-lists" alt="blogcard">
                        <button class="btn btn-warning rounded-0">${info.category}</button>
                        <h5 class="card-title text-center mt-2">${info.title}</h5>
                        <div class="card-body">
                        <p class="card-text text-center  content">${info.content}</p>
                        <p id="adddate" class="text-start px-5 show"><strong>Ekleme/Düzenleme Tarihi:</strong> ${info.date}</p>
                        <p class="text-start px-5"><strong>Yazar:</strong> ${info.author} </p>   
                        <div class="d-flex justify-content-evenly">
                            <button class="btn btn-success bi bi-pencil" id="${info.id}">Düzenle</button>
                            <button type="button" class="bi bi-pencil btn btn-danger" data-bs-toggle="modal" data-bs-target="#editmodal_${info.id}">
                            Sil
                          </button>
                          <div class="modal fade" id="editmodal_${info.id}" tabindex="-1" aria-labelledby="editmodal_${info.id}" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="editmodal_${info.id}">UYARI</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  Blogu Silmek İstediğinize Emin Misiniz?
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn he btn-primary" data-bs-dismiss="modal">Hayır</button>
                                  <button class="btn btn-danger bi bi-trash2" id="${info.id}">Evet</button>
                                </div>
                              </div>
                            </div>
                          </div>
                            <button type="button" class="btn btn-primary bi bi-book" data-bs-toggle="modal" data-bs-target="#Modal_${info.id}">
                              Devamını Oku
                            </button>
                            <div class="modal fade" id="Modal_${info.id}" tabindex="-1" aria-labelledby="Modal_${info.id}Label" aria-hidden="true">
                              <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="Modal_${info.id}Label">${info.title}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body mt-3 d-flex flex-column justify-content-center">
                                      <img src="${info.img}" class="img-fluid" >
                                      <p class="mt-2">${info.content}</p>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>`
    }
    static ShowAlert(alert_type,alert_message){
        const flexdiv = document.createElement("div");
        flexdiv.className = "d-flex justify-content-center";
        const alertItem = document.createElement("div");
        alertItem.className = `mt-2 text-center text-dark w-25 alert alert-${alert_type}`;
        alertItem.textContent = alert_message;
        flexdiv.appendChild(alertItem);
        firstaccordion.appendChild(flexdiv);
        setTimeout(function(){
            alertItem.remove();
        }, 3000);
    }
}