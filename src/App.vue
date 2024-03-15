<template>
  <ProductList />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './sections/ProductList.vue';
import { colors } from './assets/variables/colors.js';

export default {
  name: 'App',
  components: {
    ProductList
  },
  data() {
      return {
          colors: colors
      }
  }
}
</script>

<style>
.d-flex {
  display: flex;
}

.w-p100 {
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F9EFDB;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}
</style>