<template>
    <div class="section">
        <div class="about-us row bg-white g-0 m-2 p-5">
            <div class="col-5 text-center">
                <img class="nuts-img-2" src="https://naturesupply.eu/wp-content/uploads/2021/10/nuts-down.png" alt="">
            </div>
            <div class="col-6">
                <p class="subheading mb-4">About Us</p>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CustomPoint :text="'Lorem ipsum dolor sit amet'" />
                <CustomPoint :text="'Lorem ipsum dolor si'" />
                <CustomPoint :text="'Lorem ipsum dolor sit amet Lorem'" />
                <CustomPoint :text="'Lorem ipsum dolor sit amet'" />
            </div>
        </div>
    </div>
</template>

<script>
import { colors } from '@/assets/variables/colors';
import CustomPoint from '@/components/CustomPoint.vue';

export default {
    name: 'AboutUs',
    components: {
        CustomPoint,
    },
    data() {
        return {
            colors: colors
        }
    },
}
</script>

<style>
.about-us {
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;
}

.nuts-img-2 {
    width: 50%;
}
</style>