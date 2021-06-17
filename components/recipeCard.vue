<template>
  <article class="card">
    <img
      class="card-img-top"
      :src="recipe.imagesCollection.items[0].thumbnail"
      :alt="recipe.imagesCollection.items[0].description"
    />
    <div class="card-body">
      <h3 class="card-title">{{ recipe.title }}</h3>
      <p class="card-text">{{ recipe.description }}</p>
      <ctaInternal copy="Make it" :url="'/recipes/' + recipe.slug" />
    </div>
  </article>
</template>

<script>
export default {
  props: {
    recipe: Object,
  },
};
</script>

<style scoped>
.card-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
