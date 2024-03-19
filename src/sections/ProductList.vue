<template>
    <div class="product-list row g-3 m-0">
        <CustomProduct v-for="(nut, index) in nuts" :key="index" :img="nut.imgLink" :title="nut.title" :price="nut.price" :rating="nut.rating" />
    </div>
</template>

<script>
import CustomProduct from '@/components/CustomProduct.vue';
import { colors } from '@/assets/variables/colors';
import { nuts } from '@/assets/variables/nuts';

export default {
    name: 'ProductList',
    components: {
        CustomProduct
    },
    data() {
        return {
            colors: colors,
            nuts: nuts
        }
    },
}
</script>

<style scoped>
@media screen and (min-width: 1400px) {
    .product-list {
        padding-right: 15%;
        padding-left: 15%;
    }
}

@media screen and (min-width: 1200px) {
    .product-list {
        padding-right: 10%;
        padding-left: 10%;
    }
}

@media screen and (min-width: 992px) {
    .product-list {
        padding-right: 6%;
        padding-left: 6%;
    }
}

@media screen and (min-width: 768px) {
    .product-list {
        padding-right: 1%;
        padding-left: 1%;
    }
}
</style>  