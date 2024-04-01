<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="product h-p100" :style="{backgroundColor: colors.white}">
            <div class="product-img-box d-flex align-items-center justify-content-center">
                <img class="product-img" :src="img" alt="">
            </div>
            <div class="px-4 pb-4">
                <p class="product-title" :style="{color: colors.black}">{{ title }}</p>
                <p class="product-title" :style="{color: colors.primary}">${{ price.toFixed(2) }}</p>
                <CustomStars :ratingVal="rating" />
                <div class="text-end">
                    <CustomButton :icon="'pi pi-shopping-cart'" :btnClass="'btn shadow px-3 py-2'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from './CustomButton.vue'
import CustomStars from './CustomStars.vue';
import { colors } from '@/assets/variables/colors';

export default {
    name: 'CustomProduct',
    components: {
        CustomButton,
        CustomStars
    },
    props: [
        'img',
        'title',
        'price',
        'rating'
    ],
    data() {
        return {
            colors: colors
        }
    },
}
</script>

<style scoped>
.product-img-box {
    height: 150px;
    max-width: 100%;
}

.product-img {
    height: 70%;
    max-width: 95%;
}

.product {
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
}

.product-title {
    font-size: 18px;
    font-weight: 800;
}
</style>  