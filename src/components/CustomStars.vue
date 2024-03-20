<template>
    <div class="d-flex align-items-center">
        <div class="d-flex">
            <div class="pe-1" v-for="index in itemCount" :key="index">
                <i v-if="index < ratingVal" class="pi pi-star-fill" :style="{color: colors.yellow}"></i>
                <i v-else class="pi pi-star" :style="{color: colors.yellow}"></i>
            </div>
        </div>
        <div class="ps-1 rating" :style="{color: colors.secondary}">{{ ratingVal.toFixed(1) }}</div>
    </div>
</template>

<script>
import { colors } from '@/assets/variables/colors';

export default {
    name: 'CustomStars',
    props: {
        ratingVal: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            colors: colors
        }
    },
    computed: {
        itemCount() {
            return Array.from({ length: 5 }, (_, index) => index);
        }
    }
}
</script>

<style scoped>
.rating {
    font-size: 12px;
    font-weight: 600;
}
</style>  