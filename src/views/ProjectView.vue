<script>
import BaseCard from '@/components/Base/CardComp.vue';

import imageStore from '@/stores/image';

import { mapState } from 'pinia';

export default {
  components: {
    BaseCard,
  },
  computed: {
    ...mapState(imageStore, ['g$list']),
  }
};
</script>

<template>
    <section>
  
      <div class="grid-container">
        <h1>Project : </h1>
        <br />
        <template v-for="(img, index) in g$list" :key="index">
          <RouterLink :to="{ name: 'detail', params: { id: img.slug }}">
            <BaseCard :data="img" />
          </RouterLink>
        </template>
      </div>
    </section>
  </template>
  
  <style lang="scss">
  
  section {
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .tentang {
    text-align: center;
    padding-top: 25px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  </style>