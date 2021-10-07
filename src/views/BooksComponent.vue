<template>
  <div class="page-margin box">
    <h1>Kirjallisuusluettelo</h1>
    <h4>Listaus saatavilla olevista kirjoista</h4>
    <b-button v-on:click="addNewBook">Lisää kirja</b-button>
    
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      :items="getBooks"
      :fields="fields"
      :busy="isLoading || isEmptyBooks(getBooks)"
      small
      striped
      hover
      responsive="sm"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(description)="row">
        <div>
          {{cutLength(row.item.description)}}
        </div>
      </template>
      <template v-slot:cell(publishDate)="row">
        <div>
          {{getPublishDate(row.item.publishDate)}}
        </div>
      </template>
      <template v-slot:cell(actions)="row">
        <div class="inline-flex">
          <DeleteButton
            deleteCommand="deleteBook"
            :index="row.item.id"
          ></DeleteButton>
          <div class="btns">
            <b-button variant="success" v-on:click="showBook(row.item.id)"
              >Info</b-button
            >
          </div>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import DeleteButton from "./../components/buttons/DeleteButton.vue";
import _ from "lodash";
export default {
  name: "BooksComponent",
  props: {
    msg: String,
  },
  components: {
    DeleteButton,
  },
  beforeMount() {
    if(this.$store.state.books && this.$store.state.books.length == 0) {
      this.$store.dispatch("getBooks").then(() => {
      });
    }
  },
  data() {
    return {
      books: this.$store.state.books,
      index: this.$router.currentRoute.params.index,
      fields: [
        { key: "title", label: "Kirja", sortable: true, tdClass: 'tdStyles' },
        { key: "pageCount", label: "Sivumäärä", sortable: true, tdClass: 'tdStyles' },
        { key: "publishDate", label: "Julkaisupäivä", sortable: true, tdClass: 'tdStyles' },
        { key: "description", label: "Kuvaus", sortable: false, tdClass: 'tdStyles' },
        { key: "actions", label: "Toiminnot", sortable: false },
      ],
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.$store.state.books.length;
    },
    getBooks() {
      return this.$store.state.books;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    cutLength(description) {
      if(description && description.length > 200) {
        return description.slice(0,200) + "...";
      }
      return description;

    },
    isEmptyBooks(books) {
      return _.isEmpty(books);
    },
    getPublishDate(date) {
      return this.$dateMonthYear(date);
    },
    showBook(id) {
      this.$router.push({ path: `/book/${id}` });
    },
    addNewBook() {
      this.$router.push({ path: `/book/add` });
    },

  },
};
</script>

<style>
.sr-only {
  display: none;
}

.page-margin {
    margin: 50px;
}

.tdStyles {
  font-family: serif;
  text-align: left;
}

.btns {
  width: 150px;
  height: 50px;
}
</style>