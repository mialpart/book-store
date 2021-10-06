/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import BooksComponent from "./components/views/BooksComponent.vue";
import BookComponent from "./components/views/BookComponent.vue";
import AddBookForm from "./components/views/AddBookForm.vue";
import AuthorsComponent from "./components/views/AuthorsComponent.vue";
import {
  ButtonPlugin,
  FormDatepickerPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormPlugin,
  FormTextareaPlugin,
  PaginationPlugin,
  SpinnerPlugin,
  TablePlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import state from "./mocks/mock-data.json";
import BookService from "./services/BookService";
import BookCoverService from "./services/BookCoverService";
import AuthorService from "./services/AuthorService";
import DatePlugin from "./plugins/DatePlugin";

Vue.config.productionTip = false;

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(DatePlugin);
Vue.use(SpinnerPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(TablePlugin);
Vue.use(ButtonPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(PaginationPlugin);

//Mutationeille ja actioneille kannattaisi harkita omaa luokkaa
//Gettersien ja settersien lisäykset tulevaisuudessa
const store = new Vuex.Store({
  state: state,
  mutations: {
    deleteBook(state, id) {
      let filteredBooks = state.books.filter((item) => {
        return item.id != id;
      });
      state.books = filteredBooks;
    },
    deleteAuthor(state, id) {
      let filteredAuthors = state.authors.filter((author) => {
        return author.idBook != id;
      });
      state.authors = filteredAuthors;
    },
    addToBooks(state, data) {
      state.books.push(data);
    },
    setBookCover(state, data) {
      state.bookCover = data;
    },
    setBooks(state, data) {
      state.books = data;
    },
    setAuthors(state, data) {
      state.authors = data;
    },
    setAuthor(state, data) {
      state.author = data;
    },
    setBookAuthors(state, data) {
      state.bookAuthors = data;
    },
    setBook(state, data) {
      state.book = data;
    },
    setIsLoading(state, data) {
      state.isLoading = data;
    },
  },
  actions: {
    /* Tallenna kantaan ja vuex storeen */
    addBook({ commit }, data) {
      setTimeout(() => {
        BookService.addBook(data)
          .then((response) => {
            commit("addToBooks", response);
          })
          .catch((error) => {
            console.error("Error while committing getbooks: " + error);
          });
      }, 1000);
    },
    /* Lisää vain vuexin storeen */
    addBookToStore({ commit }, data) {
      setTimeout(() => {
          commit("addToBooks", data);
      }, 1000);
    },
    getBookCover({ commit }, id) {
      setTimeout(() => {
          BookCoverService.getBookCover(id).then(response => {
            commit("setBookCover", response);
          }).catch(error => {
            console.warn("Error while getting book coverage: " + error);
          })
          
      }, 1000);
    },
    getBooks({ commit }) {
      setTimeout(() => {
        commit("setIsLoading", true);
        BookService.getBooks()
          .then((response) => {
            commit("setBooks", response);
            commit("setIsLoading", false);
          })
          .catch((error) => {
            console.error("Error while committing getbooks: " + error);
          });
      }, 1000);
    },
    getBook({ commit }, id) {
      setTimeout(() => {
        commit("setIsLoading", true);
        BookService.getBook(id)
          .then((response) => {
            commit("setBook", response);
            commit("setIsLoading", false);
          })
          .catch((error) => {
            console.error("Error while committing getbook: " + error);
          });
      }, 1000);
    },
    getAuthors({ commit }) {
      setTimeout(() => {
        commit("setIsLoading", true);
        AuthorService.getAuthors()
          .then((response) => {
            commit("setAuthors", response);
            commit("setIsLoading", false);
          })
          .catch((error) => {
            console.error("Error while committing getAuthors: " + error);
          });
      }, 1000);
    },
    getAuthor({ commit }, id) {
      setTimeout(() => {
        AuthorService.getAuthor(id)
          .then((response) => {
            commit("setAuthor", response);
          })
          .catch((error) => {
            console.error("Error while committing getAuthor: " + error);
          });
      }, 1000);
    },
    getAuthorBookId({ commit }, id) {
      setTimeout(() => {
        commit("setIsLoading", true);
        AuthorService.getAuthorBookId(id)
          .then((response) => {
            commit("setBookAuthors", response);
            commit("setIsLoading", false);
          })
          .catch((error) => {
            console.error("Error while committing getAuthorBookId: " + error);
          });
      }, 1000);
    },
    deleteAuthor({ commit }, id) {
      setTimeout(() => {
        commit("setIsLoading", true);
        AuthorService.deleteAuthor(id)
          .then((response) => {
            commit("deleteAuthor", response);
            commit("setIsLoading", false);
          })
          .catch((error) => {
            console.error("Error while committing deleteAuthor: " + error);
          });
      }, 1000);
    },
    /* Poista kirja sekä siihen liittyvät kirjailijat */
    deleteBook({ commit }, id) {
      setTimeout(() => {
        commit("setIsLoading", true);
        BookService.deleteBook(id)
          .then((response) => {
            console.log(response);
            commit("setIsLoading", false);

            /* Tässä tulisi tehdä myös kutsu rajapintaan oikeessa softassa*/
            commit("deleteBook", id);
            commit("deleteAuthor", id);
          })
          .catch((error) => {
            console.error("Error while committing deletebooks: " + error);
          });
      }, 1000);
    },
  },
});

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "books",
      },
      component: BooksComponent,
    },
    {
      path: "/books",
      name: "books",
      component: BooksComponent,
    },
    {
      path: "/book/add",
      name: "addBook",
      component: AddBookForm,
    },
    {
      path: "/book/:index",
      name: "book",
      component: BookComponent,
    },
    {
      path: "/authors",
      name: "authors",
      component: AuthorsComponent,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  store: store,
  router: router,
}).$mount("#app");
