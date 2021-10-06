<template>
  <div id="app">
    <div class="sidenav">
      <div>
        <div class="toto">
          <h1>Oma kirjasto</h1>
        </div>
        <img alt="Vue logo" height="100px" src="./assets/open-book.png" />
      </div>
      <div class="btns-top-padding">
        <NavButton routerName="/authors" btnName="Kirjailijat">Kirjailijat</NavButton>
        <NavButton routerName="/books" btnName="Kirjat">Kirjat</NavButton>
      </div>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import NavButton from "./components/elements/NavButton.vue";

export default {
  name: "App",
  components: {
    NavButton
  },
  methods: {

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 200px;
} 
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  transition: 0.5s;
  padding-top: 0px;
  box-shadow: 2px 2px 10px 2px;
}

.btns-top-padding {
  padding-top: 50px;
}

.toto {
  font-weight: bold;
  color: white;
  font-family:monospace
}
</style>
