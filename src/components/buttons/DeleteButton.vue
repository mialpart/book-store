<template>
  <div class="btns">
    <b-button variant="danger" v-on:click="deleteItem(index)">Poista</b-button>
  </div>
</template>

<script>
export default {
    name:"DeleteButton",
    props: {
        deleteCommand: String,
        index: Number
    },
    methods: {
        deleteItem(index) {
            this.$store.dispatch(this.deleteCommand, index);
        }
    }
}
</script>

<style>
.btns {
  height: 50px;
}

</style>