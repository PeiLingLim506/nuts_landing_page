<template>
  <HeaderNav />
  <ProductList />
  <AboutUs />
  <BlogTips />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './sections/HeaderNav.vue';
import ProductList from './sections/ProductList.vue';
import AboutUs from './sections/AboutUs.vue';
import BlogTips from './sections/BlogTips.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    ProductList,
    AboutUs,
    BlogTips
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import 'primeicons/primeicons.css';

.d-flex {
  display: flex;
}

.w-p100 {
  width: 100%
}

.h-p100 {
  height: 100%
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
  font-size: 30px;
  font-weight: 800
}

.owl-stage {
  display: flex
}

.section {
  margin-top: 3rem;
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
        padding-right: 3%;
        padding-left: 3%;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .section {
        padding-right: 6%;
        padding-left: 6%;
        margin-top: 1rem;
    }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
    .section {
        padding-right: 3%;
        padding-left: 3%;
        margin-top: 1rem;
    }
}

@media screen and (max-width: 575px) {
    .section {
        padding-right: 2%;
        padding-left: 2%;
        margin-top: 1rem;
    }
}
</style>