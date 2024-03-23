<template>
    <button 
        :class="btnClass"
        :style="{
            backgroundColor: isHovered ? colorHover : color,
            color: isHovered ? textColorHover : textColor
        }"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <i v-if="icon != ''" :class="icon"></i>
        {{ content }}
    </button>
</template>

<script>
import { colors } from '@/assets/variables/colors';

export default {
    name: 'CustomButton',
    props: {
        icon: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: colors.white
        },
        colorHover: {
            type: String,
            default: colors.primary
        },
        textColor: {
            type: String,
            default: colors.black
        },
        textColorHover: {
            type: String,
            default: colors.white
        },
        btnClass: {
            type: String,
            default: 'btn'
        },
    },
    data() {
        return {
            isHovered: false
        };
    },
}
</script>

<style scoped>
.btn {
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 3rem;
    padding-left: 3rem;
}
</style>  