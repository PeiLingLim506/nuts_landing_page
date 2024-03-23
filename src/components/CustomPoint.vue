<template>
    <div class="d-flex align-items-center mb-3">
        <i class="pi pi-check-circle me-3" :style="[{color: colors.primary}, {fontSize: '20px'}]"></i>
        <p><b>{{ text }}</b></p>
    </div>
</template>

<script>
import { colors } from '@/assets/variables/colors';

export default {
    name: 'CustomPoint',
    props: {
        text: {
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