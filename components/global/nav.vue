<template>
  <header class="mb-4">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Too busy cooking.</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/recipes">All Recipes</NuxtLink>
          </li>
          <!-- <li class="nav-item">
            <NuxtLink class="nav-link" to="/submit">Submit a Recipe</NuxtLink>
          </li> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: rgba(255, 255, 255, 1);
}

.nav-item.nav-item.nav-item a:hover {
  text-decoration: underline;
}
</style>
