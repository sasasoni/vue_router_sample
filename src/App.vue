<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/products">商品情報</router-link>
    </div>
    <router-view />
    <!-- <pre>{{ $route.params }}</pre> -->
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-link-active {
  background: #ffc9c9;
}
</style>
