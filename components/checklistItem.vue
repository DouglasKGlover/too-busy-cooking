<template>
  <div>
    <b-form-checkbox
      :id="`${handle}-checklist-item-${index + 1}`"
      :name="`${handle}-checklist-item-${index + 1}`"
      v-model="status"
      class="mb-3"
      :class="{ active: status }"
    >
      {{ item }}
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    handle: String,
    item: String,
    index: Number,
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
