<template>
    <div class="row g-3 m-0">
        <CustomProduct v-for="(nut, index) in nuts" :key="index" :img="nut.imgLink" />
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

</style>  