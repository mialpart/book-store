import axios from "axios";

/* BookCover-service. Get/post/delete bookcover data */
export default {
    getBookCover(id) {
        let url = "https://fakerestapi.azurewebsites.net/api/v1/CoverPhotos/books/covers/" + id;
        return axios.get(url)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error while fetching book cover: " + error);
            throw error.message;
        });
    },
}