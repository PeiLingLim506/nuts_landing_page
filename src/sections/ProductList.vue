<template>
    <div class="section">
        <p class="new-product ps-2">New Product</p>
        <div class="row g-3 m-0">
            <CustomProduct v-for="(nut, index) in nuts" :key="index" :img="nut.imgLink" :title="nut.title" :price="nut.price" :rating="nut.rating" />
        </div>
        <div class="text-center mt-5">
            <CustomButton :content="'load more'" :color="colors.primary" :textColor="colors.white" :colorHover="colors.yellow" :btnClass="'btn me-3'" />
        </div>
    </div>
</template>

<script>
import CustomProduct from '@/components/CustomProduct.vue';
import CustomButton from '@/components/CustomButton.vue';
import { colors } from '@/assets/variables/colors';
import { nuts } from '@/assets/variables/nuts';

export default {
    name: 'ProductList',
    components: {
        CustomButton,
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
.new-product {
  font-size: 24px;
  font-weight: 800
}
</style>  