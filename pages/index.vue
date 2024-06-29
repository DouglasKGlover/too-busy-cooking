<template>
  <main class="container">
    <div class="row">
      <div class="col-sm">
        <h1 class="title">I'm too busy cooking.</h1>
        <h2><small>Just the recipes. No time to write novels about 'em.</small></h2>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-sm">
        <h2>Latest Recipes</h2>
      </div>
    </div>

    <recipeCards :recipes="latestRecipes.recipeCollection.items" />
  </main>
</template>

<script>
import { latest3Recipes } from "~/graphql/latest3Recipes.gql";
export default {
  async asyncData({ $graphql }) {
    const query = latest3Recipes;

    const latestRecipes = await $graphql.default.request(query);
    return { latestRecipes };
  },
  head() {
    return {
      title: "Too Busy Cooking",
    };
  },
};
</script>

<style></style>
