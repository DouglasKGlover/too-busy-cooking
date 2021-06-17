<template>
  <section class="row">
    <div class="col-md-4" v-for="recipe in recipes">
      <RecipeCard :recipe="recipe" :key="recipe.sys.id" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    recipes: Array,
  },
};
</script>

<style></style>
