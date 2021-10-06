<template>
  <div class="page-margin">
    <div v-if="!isLoading">
      <div v-if="storeHasBook">
        <div class="">
          <div v-if="getBook" class="wrap-text">
            <div class="grid">
                <BookInfoComponent class="box" :book="getBook"></BookInfoComponent>
                <BookAuthorsComponent class="info box"></BookAuthorsComponent>
            </div>
            <TextBox title="Kuvaus" :text="getBook.description"></TextBox>
            <TextBox title="Katkelma" :text="getBook.excerpt"></TextBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookInfoComponent from "./BookInfoComponent.vue";
import BookAuthorsComponent from "./BookAuthorsComponent.vue";
import TextBox from "./../elements/TextBox.vue";
export default {
  name: "BookComponent",
  components: {
    BookAuthorsComponent,
    BookInfoComponent,
    TextBox,
  },
  beforeCreate() {
    this.$store.commit("setIsLoading", true);
    this.$store
      .dispatch("getBook", this.$router.currentRoute.params.index)
      .then(() => {
        this.refreshBooks();
      });
    this.$store.dispatch("getBookCover", this.$router.currentRoute.params.index);
    this.$store.dispatch("getAuthorBookId", this.$router.currentRoute.params.index);
  },
  data() {
    return {
      book: this.$store.state.book,
    };
  },
  computed: {
    getBookFromStore() {
      return this.$store.state.book;
    },
    storeHasBook() {
      return this.$store.state.book !== null;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    getBook() {
      return this.$store.state.book;
    }
  },
  methods: {
    refreshBooks() {
      this.book = this.$store.state.book;
    },
  },
};
</script>

<style>

@media (min-width: 1000px) {
    .grid {
        display: grid;
        grid-template-columns: 50% 50%;
    }
}

@media (min-width: 700px) {

    .texts {
        margin: 20px;
        padding: 20px;
    }
    .wrap-text  {
        border-left: 1px solid;
        margin-left: 20px;
        box-shadow: -15px 0px 15px 5px #aaaaaa;
    }
}

@media (max-width: 700px) { 
    .wrap-text  {
        min-width: 350px;
    }
}


.bold p,
h2 {
  text-align: left;
}

.texts p {
  margin: 0px;
  text-align: left;
  font-family: serif;
}
.texts {
  margin: 20px;
  padding: 20px;
}

.wrap-text  {
    border-left: 1px solid;
    box-shadow: -15px 0px 15px 5px #aaaaaa;
}

.page-margin {
  margin: 60px;
}
</style>