<script>
import imageStore from '@/stores/image';

import { mapState } from 'pinia';

export default {
    name: 'DetailView',
    computed: {
        ...mapState(imageStore, ['g$detail']),
        detail() {
            return this.g$detail(this.$route.params.id);
        }
    },
};
</script>

<template>
    <article>
        <h2>{{ detail.title }}</h2>
        <img :src="detail.img" alt="">
        <p>{{detail.link}}</p>
    </article>
</template>
