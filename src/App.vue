<template>
  <HeaderNav />
  <ProductList />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './sections/HeaderNav.vue';
import ProductList from './sections/ProductList.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    ProductList,
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
}

body {
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
}

.heading {
  font-size: 45px;
  font-weight: 800
}

.subheading {
  font-size: 24px;
  font-weight: 800
}

@media screen and (min-width: 1400px) {
    .section {
        padding-right: 15%;
        padding-left: 15%;
    }
}

@media screen and (min-width: 1200px) and (max-width: 1399px) {
    .section {
        padding-right: 10%;
        padding-left: 10%;
    }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    .section {
        padding-right: 6%;
        padding-left: 6%;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .section {
        padding-right: 1%;
        padding-left: 1%;
    }
}
</style>