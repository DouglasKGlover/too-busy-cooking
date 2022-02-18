<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>All recipes</h1>
          <p>For now, literally just a list of <em>all</em> of my recipes.</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="list-group">
            <NuxtLink
              v-for="recipe in recipes"
              :to="'/recipes/' + recipe.slug"
              :key="recipe.sys.id"
              class="list-group-item list-group-item-action"
              >{{ recipe.title }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { allRecipes } from "~/graphql/allRecipes.gql";
export default {
  async asyncData({ $graphql }) {
    const query = allRecipes;
    let recipes = await $graphql.default.request(query);
    recipes = recipes.recipeCollection.items;
    return { recipes };
  },
  head() {
    return {
      title: "Too Busy Cooking All Of My Recipes",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A complete list of all my recipes in one place, with links to each.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ul {
  list-style-type: none;
} */
</style>
