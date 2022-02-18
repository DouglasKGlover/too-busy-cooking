<template>
  <article class="card">
    <img
      class="card-img-top bg-secondary"
      :src="recipe.imagesCollection.items[0].thumbnail"
      :alt="recipe.imagesCollection.items[0].description"
      width="500"
      height="200"
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
.card-img-top {
  max-width: 100%;
  height: auto;
}

.card-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
