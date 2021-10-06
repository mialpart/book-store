<template>
  <div class="box info">
    <div v-if="book != null" class="info bold">
        <div class="grid-book-info">
        <div v-if="bookCover">
            <img :alt="bookCover.url" align="left" height="150px" src="../../assets/kalevala.jpg" />
        </div>
        <div class="small-left-margin">
            <h2>Tiedot</h2>
            <p>Kirja: {{ book.title }}</p>
            <p>Sivumäärä: {{ book.pageCount }}</p>
            <p>Julkaistu: {{ this.$dateMonthYear(book.publishDate) }}</p>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookInfoComponent",
  props: {
    book: Object,
  },
  computed: {
      //Kuva asetettu staattisesta paikkaa. Alt:sta voi tarkistaa onko haku onnistunut.
      bookCover() {
          return this.$store.state.bookCover ? this.$store.state.bookCover[0] : "url";
      }
  }
};
</script>

<style>
.small-left-margin {
    padding-left: 5px;
}

.grid-book-info {
    display: grid;
    grid-template-columns: 120px 200px;
}

.info {
    max-width: 300px;
}

.box {
  box-shadow: rgba(50, 50, 93, 0.25) 1px 6px 12px 0px,
    rgba(0, 0, 0, 0.3) 1px 3px 7px 0px;
  border-radius: 0px;
  padding: 10px;
}

</style>