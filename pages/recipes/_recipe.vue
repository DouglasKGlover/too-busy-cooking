<template>
  <main class="container" :key="recipe.sys.id">
    <div class="row">
      <div class="col-sm mb-4">
        <h1 class="title">I'm too busy cooking...</h1>
        <h2 class="display-3">{{ recipe.title }}</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <p>{{ recipe.description }}</p>
      </div>
    </div>

    <hr />

    <div class="row">
      <div
        class="col-sm-6 col-md-4"
        v-for="image in recipe.imagesCollection.items"
        :key="`recipe-image-${image.sys.id}`"
      >
        <img
          :src="image.thumbnail"
          :alt="image.description"
          class="img-fluid bg-secondary"
          width="350"
          height="210"
        />
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-md-3">
        <h2>Ingredients</h2>
      </div>
      <div class="col-md">
        <ul>
          <li
            v-for="(ingredient, index) in recipe.ingredientsList"
            :key="`ingredient-${index + 1}`"
          >
            <ChecklistItem
              handle="ingredient"
              :item="ingredient"
              :index="index"
            />
          </li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-md-3">
        <h2>Directions</h2>
      </div>
      <div class="col-md">
        <ol>
          <li
            v-for="(direction, index) in recipe.directions"
            :key="`direction-${index + 1}`"
          >
            <ChecklistItem
              handle="direction"
              :item="direction"
              :index="index"
            />
          </li>
        </ol>
      </div>
    </div>
  </main>
</template>

<script>
import { recipeBySlug } from "~/graphql/recipeBySlug.gql";
export default {
  async asyncData({ $graphql, params }) {
    let slug = params.recipe;
    if (slug.charAt(slug.length - 1) == "/") {
      slug = slug.slice(0, -1);
    }
    const query = recipeBySlug;
    const variables = { slug: slug };
    let recipe = await $graphql.default.request(query, variables);
    recipe = recipe.recipeCollection.items[0];
    return { recipe };
  },
  head() {
    return {
      title: "Too Busy Cooking " + this.recipe.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.recipe.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
