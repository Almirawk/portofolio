<script>
export default {
    name: 'CardComp',
    props: {
        data: Object,
    },
};
</script>

<template>
    <figure class="grid-item">
        <div class="img-container">
            <img class="grid-img" :src="data.img">
        </div>
        <figcaption>{{ data.title }}</figcaption>
    </figure>
</template>

<style lang="scss">
.grid-item {
    width: 100%;
    border: 1px solid gray;
    overflow: hidden;
    border-radius: 1rem;
    object-fit: cover;
    height: 250px;

    figcaption {
      padding: .25rem 1rem;
      text-align: center;
    }
}

.grid-img {
    width: 100%;
}
</style>