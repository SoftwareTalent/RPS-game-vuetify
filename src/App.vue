<template>
  <div id="app">
    <score />
    <router-view/>
  </div>
</template>
<script>
import Score from './components/Score.vue'
export default {
  components: { Score },
  
}
</script>

<style lang="scss">

#app {
  background: radial-gradient(hsl(214, 47%, 23%) , hsl(237, 49%, 15%));
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
