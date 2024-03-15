<template>
    <div class="col-3" :style="{backgroundColor: colors.white}">
        <img class="product-img" :src="img" alt="">
        <p>hi</p>
        <CustomButton />
    </div>
</template>

<script>
import CustomButton from './CustomButton.vue'
import { colors } from '@/assets/variables/colors';

export default {
    name: 'CustomProduct',
    components: {
        CustomButton
    },
    props: [
        'img'
    ],
    data() {
        return {
            colors: colors
        }
    },
}
</script>

<style scoped>
.product-img {
    height: 200px;
    max-width: 100%;
}
</style>  