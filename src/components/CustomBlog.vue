<template>
    <div class="item h-p100 d-flex flex-column">
        <img class="blog-img w-p100" :src="img" alt="">
        <div class="blog-info p-4 pt-3 h-p100 d-flex flex-column" :style="{backgroundColor: colors.brown2}">
            <div class="flex-grow-1">
                <p class="blog-title mb-2">{{ title }}</p>
                <p class="mb-2" :style="{color: colors.brown3}">{{ content }}</p>
            </div>
            <a href="" :style="{color: colors.white}">Read more</a>
        </div>
    </div>
</template>

<script>
import { colors } from '@/assets/variables/colors';

export default {
    name: 'CustomBlog',
    props: {
        title: {
            type: String,
            default: 'Blog'
        },
        content: {
            type: String,
            default: 'asdf'
        },
        img: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            colors: colors
        }
    },
}
</script>

<style>
.blog-img {
    border-top-right-radius: 30px;
    min-height: 220px;
    max-height: 220px;
}

.blog-info {
    border-bottom-left-radius: 30px;
}

.blog-title {
    font-weight: 700;
    font-size: 18px;
}
</style>