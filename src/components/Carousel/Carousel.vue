<template>
    <div class="w-carousel-container">
        
    </div>
</template>
<script>
export default {
    name: 'Carousel',
    props: {
        list: {
            type: Array,
            default() {
                return [];
            }
        }
    }
}
</script>