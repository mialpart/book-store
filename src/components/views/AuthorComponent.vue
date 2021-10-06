<template>
    <div class="author-comp">
        <li v-if="author.firstName && author.lastName">
        {{author.firstName}} {{author.lastName}}
        </li>
    </div>
</template>

<script>
export default {
  name: "AuthorComponent",
  props: {
      authorProp: Object
  },
  beforeMount() {
    this.$store
      .dispatch("getAuthor", this.$router.currentRoute.params.index);
  },
  data() {
    return {
      author: this.authorProp,
    };
  },
  computed: {
    getBookFromStore() {
      return this.$store.state.author;
    },
    storeHasBook() {
      return this.$store.state.author !== null;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
  },
}
</script>

<style>
.page-margin {
    margin: 50px;
}

.author-comp li {
    text-align: left;
    list-style: circle;
}

</style>