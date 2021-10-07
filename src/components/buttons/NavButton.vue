<template>
  <div class="btns small-padding">
    <b-button pill variant="light" v-on:click="goToPage()">{{btnName}}</b-button>
  </div>
</template>

<script>
export default {
  props: {
    routerName: String,
    btnName: String
  },
  date() {
      return {
      }
  },
  methods: {
    goToPage() {
      if (this.$router.currentRoute.name !== this.routerName) {
        this.$router.push(this.routerName);
      }
    },
  },
};
</script>

<style >
.btns button {
  width: 150px;
}

.small-padding {
  padding: 10px;
}

.btns {
  font-family:Arial, Helvetica, sans-serif;
  
}
</style>