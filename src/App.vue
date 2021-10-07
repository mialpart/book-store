<template>
  <div id="app">
    <div class="sidenav">
      <div class="nav-logo">
        <div class="toto">
          <h1>Oma kirjasto</h1>
        </div>
        <img alt="Vue logo" height="100px" src="./assets/open-book.png" />
      </div>
      <div class="nav-buttons btns-top-padding">
        <NavButton routerName="/authors" btnName="Kirjailijat">Kirjailijat</NavButton>
        <NavButton routerName="/books" btnName="Kirjat">Kirjat</NavButton>
      </div>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import NavButton from "./components/buttons/NavButton.vue";

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
@media (min-width: 700px) { 
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-left: 200px;
  } 
  .nav-buttons {
    position: relative;
  }
  .nav-logo {
    position: relative;
  }
}
@media (max-width: 700px) { 
    .sidenav {
    text-align: center;
    float: none;
    background-color: #111;
    height: 300px;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  } 
  .nav-buttons {
    position: absolute;
    left: 33%;
    top: 15%;
  }
  .nav-logo {
    position: absolute;
    left: 33%;
  }
}



.btns-top-padding {
  padding-top: 50px;
}

.toto {
  font-weight: bold;
  color: white;
  font-family:serif
}
</style>
