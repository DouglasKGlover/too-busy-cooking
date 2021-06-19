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
      >
        <img
          :src="image.thumbnail"
          :alt="image.description"
          class="img-fluid"
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
          <li v-for="ingredient in recipe.ingredientsCollection.items">
            {{ ingredient.amount }} {{ ingredient.type }}
            {{ ingredient.ingredient.title }}
          </li>
        </ul>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-md-3">
        <h2>Steps</h2>
      </div>
      <div class="col-md">
        <ol>
          <li v-for="step in recipe.steps">
            {{ step }}
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
      title: "Too busy cooking " + this.recipe.title,
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

<style></style>
