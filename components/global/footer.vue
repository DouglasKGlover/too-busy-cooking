<template>
  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="text-right text-small">
            <i>Doug Glover {{ currentYear }}</i>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      const d = new Date();
      const y = d.getFullYear();
      const startYear = 2021;
      if (y !== startYear) {
        return startYear + " - " + y;
      }

      return y;
    },
  },
};
</script>

<style></style>
