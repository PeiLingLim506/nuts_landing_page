<template>
    <div class="bg-black background py-5">
        <div class="section">
            <div class="row g-3 m-0">
                <div class="col-6 ps-2 position-relative">
                    <p class="heading text-white mb-5">The Nuts<br>is good for you!</p>
                    <p :style="{color: colors.secondary}"><span :style="{color: colors.brown}">Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor</p>
                    <div class="d-flex mt-5">
                        <CustomButton :content="'learn more'" :color="colors.primary" :textColor="colors.white" :colorHover="colors.yellow" :btnClass="'btn me-3'" />
                        <CustomButton :content="'get product'" :color="colors.brown" :textColor="colors.white" :colorHover="colors.yellow" />
                    </div>
                </div>
                <div class="col-6 position-relative">
                    <img class="nuts-img position-absolute w-p100" src="../assets/images/nuts.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { colors } from '@/assets/variables/colors';
import CustomButton from '@/components/CustomButton.vue';

export default {
    name: 'HeaderNav',
    components: {
        CustomButton,
    },
    data() {
        return {
            colors: colors
        }
    },
}
</script>

<style>
.background {
    border-bottom-left-radius: 125px;
}

.nuts-img {
    bottom: -110px;
    border-bottom-left-radius: 70px;
    border-top-right-radius: 70px;
}
</style>