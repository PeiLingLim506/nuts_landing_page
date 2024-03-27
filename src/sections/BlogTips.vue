<template>
    <div class="section">
        <div class="text-center">
            <p class="subheading mb-4">Our Blog & Tips</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt</p>
        </div>

        <div class="owl-carousel owl-theme d-flex align-items-stretch">
            <CustomBlog v-for="(blog, index) in blogs" :key="index" :title="blog.title" :img="blog.imgLink" :content="blog.content" />
        </div>
    </div>
</template>

<script>
import initOwlCarousel from '@/assets/js/owl_carousel';
import { blogs } from '@/assets/variables/blogs';
import CustomBlog from '@/components/CustomBlog.vue';

export default {
    name: 'BlogTips',
    components: {
        CustomBlog,
    },
    data() {
        return {
            blogs: blogs
        }
    },
    mounted() {
        initOwlCarousel()
    }
};
</script>