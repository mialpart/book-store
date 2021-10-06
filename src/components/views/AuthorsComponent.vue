<template>
    <div class="page-margin box">
      <h1>Kirjailijat</h1>
      <h4>Listaus kirjailijoista ja teoksista</h4>
      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      :items="getAuthors"
      :fields="fields"
      :busy="isLoading || isEmptyAuthors(getAuthors)"
      striped
      small
      hover
      responsive="sm"
      no-border-collapse
    >
    <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    <template v-slot:cell(actions)="row">
          <div class="">
            <b-button variant="success" v-on:click="showBook(row.item.idBook)"
              >Info</b-button
            >
          </div>
      </template>
    </b-table>
    </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "AuthorsComponent",
  props: {
    msg: String,
  },
  components: {
  },
  beforeMount() {
    if(this.$store.state.authors && this.$store.state.authors.length == 0) {
      this.$store.dispatch("getAuthors").then(() => {
      });
    }
  },
  data() {
    return {
      authors: this.$store.state.authors,
      index: this.$router.currentRoute.params.index,
      fields: [
        { key: "firstName", label: "Etunimi", sortable: false, tdClass: 'tdStyles' },
        { key: "lastName", label: "Sukunimi", sortable: false, tdClass: 'tdStyles' },
        { key: "actions", label: "Kirja", sortable: false },
      ],
      perPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    rows() {
      return this.$store.state.authors.length;
    },
    getAuthors() {
      return this.$store.state.authors;
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
    isEmptyAuthors(authors) {
        return _.isEmpty(authors);
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

</style>