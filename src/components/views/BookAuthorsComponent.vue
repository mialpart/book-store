<template>
  <div class="box">
    <div v-if="!isLoading || bookAuthorsExist">
      <h2>Kirjailijat</h2>
      <ul v-for="(author, index) in getBookAuthors" v-bind:key="index">
        <AuthorComponent :authorProp="author"></AuthorComponent>
      </ul>
    </div>
  </div>
</template>

<script>
import AuthorComponent from "./AuthorComponent.vue";
export default {
  name: "BookAuthorsComponent",
  components: {
    AuthorComponent,
  },
  beforeMount() {
    
  },
  data() {
    return {
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    bookAuthorsExist() {
      if (this.isCorrectBookData()) {
        return true;
      }
      return false;
    },
    getBookAuthors() {
        return this.$store.state.bookAuthors;
    }
  },
  methods: {
    isCorrectBookData() {
        return this.$store.state.bookAuthors &&
        this.$store.state.bookAuthors.length > 0 &&
        this.$store.state.bookAuthors[0].idBook == this.$router.currentRoute.params.index;
    }
  },
};
</script>

<style>
.page-margin {
  margin: 50px;
}

.info {
  width: 300px;
  max-width: 300px;
  margin-bottom: 20px;
}

.box {
  box-shadow: rgba(50, 50, 93, 0.25) 1px 6px 12px 0px,
    rgba(0, 0, 0, 0.3) 1px 3px 7px 0px;
  border-radius: 0px;
  padding: 10px;
}
</style>