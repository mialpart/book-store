import axios from "axios";

/* Author-service. Get/post/delete author data */
export default {
    getAuthors() {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/Authors";
        return axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while fetching books: " + error);
            throw error.message;
        });
    },

    getAuthor(id) {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/Authors/" + id;
        return axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while fetching book: " + error);
            throw error.message;
        });
    },
    getAuthorBookId(id) {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/" + id;
        return axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while fetching book: " + error);
            throw error.message;
        });
    },

}