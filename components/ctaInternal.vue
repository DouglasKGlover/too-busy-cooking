<template>
  <NuxtLink class="btn btn-primary" :to="url">{{ copy }}</NuxtLink>
</template>

<script>
export default {
  props: {
    url: String,
    copy: String,
  },
};
</script>

<style></style>
