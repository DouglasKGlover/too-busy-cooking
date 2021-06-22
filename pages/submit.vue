<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Submit a recipe</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <p>
            I love trying new things, so if there's a recipe
            <strong><em>you</em></strong> love, feel free to share it with me.
            Provide your name if you'd like me to credit you!
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <form name="recipe-submission" netlify>
            <div class="form-group">
              <label for="submission-name" class="font-weight-bold"
                >Name:</label
              >
              <input type="text" class="form-control" id="submission-name" />
            </div>

            <div class="form-group">
              <label for="submission-recipe" class="font-weight-bold"
                >Your Recipe:</label
              >
              <textarea
                class="form-control"
                id="submission-recipe"
                rows="3"
                required
              ></textarea>
            </div>

            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  required
                />
                <label class="form-check-label font-italic" for="defaultCheck1">
                  By checking this, you verify that you are submitting your own
                  recipe and not just copy-pasting from some random website or
                  something.
                </label>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
