<template>
    <div class="section pb-5">
        <div class="text-center mb-4">
            <p class="subheading mb-4">Our Blog & Tips</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt</p>
        </div>

        <div class="owl-carousel owl-theme d-flex align-items-stretch px-5 px-xl-0">
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

<style>
.owl-dots {
    display: none;
}

.owl-prev {
    position: absolute;
    left: -7%;
    font-size: 25px !important;
    color: white !important;
    background-color: #8e6565 !important;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    box-shadow: 2px 3px 5px #8e6565;
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    .owl-prev {
        left: -1%;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .owl-prev {
        left: -3%;
    }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
    .owl-prev {
        left: -1%;
    }
}

@media screen and (max-width: 575px) {
    .owl-prev {
        left: 3%;
    }
}

.owl-next {
    position: absolute;
    right: -7%;
    font-size: 25px !important;
    color: white !important;
    background-color: #8e6565 !important;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40%;
    box-shadow: 2px 3px 5px #8e6565;
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
    .owl-next {
        right: -1%;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .owl-next {
        right: -3%;
    }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
    .owl-next {
        right: -1%;
    }
}

@media screen and (max-width: 575px) {
    .owl-next {
        right: 3%;
    }
}
</style>