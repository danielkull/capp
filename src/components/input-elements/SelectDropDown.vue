<template>
  <div class="capp-input__wrapper">
    <label class="capp-label__default" :for="selectId">Template</label>
    <select
      class="capp-input__default"
      :name="selectId"
      :id="selectId"
      :value="selectedData"
      @input="$emit('update:selectedData', $event.target.value)"
      :required="isRequired"
    >
      <!-- puropse_name and id are not flexibel. Here you need to adjust! -->
      <option disabled value="">--For what do you need the car?</option>
      <option v-for="item in givenData" :value="item.id" :key="item.id">
        {{ item.purpose_name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectDropDown",
  props: {
    selectId: {
      type: String,
      default: "dropdown",
      required: true,
    },
    selectedData: {
      type: String,
      default: null,
    },
    givenData: {
      type: Array,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:selectedData"],
  data() {
    return {};
  },
};
</script>

<style scoped></style>
