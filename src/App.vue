<template>
  <ProductList />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './sections/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductList
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import 'primeicons/primeicons.css';

.d-flex {
  display: flex;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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