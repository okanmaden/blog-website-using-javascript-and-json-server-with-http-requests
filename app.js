class Request {
    constructor(url) {
      this.url = url;
    }
    get() {
      return new Promise((resolve, reject) => {
        fetch(this.url)
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
          fetch(`${this.url}/${id}`, {
            method: "DELETE",
          })
            .then((response) => resolve("Veri Silme Başarılı", response))
            .catch((err) => reject(err));
        });
      }
    post(data) {
        return new Promise((resolve, reject) => {
          fetch(this.url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
               "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
      }
      put(id, data) {
        return new Promise((resolve, reject) => {
          fetch(`${this.url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
      }
}
const request = new Request("http://localhost:3000/blogs");
