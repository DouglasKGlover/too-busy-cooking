<template>
  <div>
    <b-form-checkbox
      :id="'checkbox-step-' + (step.index + 1)"
      :name="'checkbox-step-' + (step.index + 1)"
      v-model="status"
      class="mb-3"
      :class="{ active: status }"
    >
      {{ step.step }}
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    step: Object,
  },
  data() {
    return {
      status: false,
    };
  },
};
</script>

<style scoped>
.active {
  opacity: 0.5;
}
</style>
