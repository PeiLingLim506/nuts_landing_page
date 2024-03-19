<template>
    <div class="col-4 col-md-3">
        <div class="product" :style="{backgroundColor: colors.white}">
            <div class="product-img-box d-flex align-items-center justify-content-center">
                <img class="product-img" :src="img" alt="">
            </div>
            <div class="px-4 pb-4">
                <p class="product-title" :style="{color: colors.black}">{{ title }}</p>
                <p class="product-title" :style="{color: colors.primary}">${{ price.toFixed(2) }}</p>
                <CustomStars :ratingVal="rating" />
                <CustomButton />
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
    height: 100%;
}

.product-title {
    font-size: 18px;
    font-weight: 800;
}
</style>  