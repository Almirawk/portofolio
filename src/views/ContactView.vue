<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "ContactView",
  components: { BaseInput },
  data: () => ({
    title: "Contact Me",
    input: {
      name: "",
      email: "",
      message: "",
    },
  }),
  methods: {
    handleSubmit() {
      console.log(this.input);
    },
  },
};
</script>

<template>
  <div class="Contact Me">
    <h1>{{ title }}</h1>
    <form @submit.prevent="handleSubmit">
      <BaseInput v-model="input.name" name="name" label="Name" type="text" />
      <BaseInput
        v-model="input.email"
        name="email"
        label="Email"
        type="email"
      />
      <BaseInput v-model="input.message" name="message" label="Message" type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Contact {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
}
</style>
