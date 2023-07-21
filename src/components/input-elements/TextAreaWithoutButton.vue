<template>
  <div class="text-wrapper">
    <textarea
      :name="name"
      :id="id"
      :cols="cols"
      :rows="rows"
      :placeholder="placeholder"
      :value="inputData"
      @input="$emit('update:inputData', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  emits: ["update:inputData"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "Sende eine Nachricht ...",
    },
    cols: {
      type: String,
      default: "30",
    },
    rows: {
      type: String,
      default: "10",
    },
    inputData: {
      type: String,
    },
  },
};
</script>

<style scoped>
.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
textarea {
  width: 100%;
  margin-top: 1rem;
  background: var(--clr-sur-l);
  font-family: "Roboto", sans-serif;
  font-size: calc(var(--s-font) + 0.2rem);
  caret-color: var(--primary-middle);
  padding: 0.4rem;
  border-color: var(--clr-sur-d);
  resize: none;
}
textarea:active {
  border-color: red;
}
</style>
