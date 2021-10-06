import axios from "axios";

/* Books-service. Get/post/delete book data */
export default {
    getBooks() {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/Books";
        return axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while fetching books: " + error);
            throw error.message;
        });
    },

    getBook(id) {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/Books/" + id;
        return axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while fetching book: " + error);
            throw error.message;
        });
    },

    deleteBook(id) {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/Books/" + id;
        return axios.delete(url, id)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while removing books: " + error);
            throw error.message;
        });
    },

    addBook(data) {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/Books/";
        return axios.post(url, data)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while adding books: " + error);
            throw error.message;
        });
    }
}