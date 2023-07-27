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
  margin-top: var(--m-marg);
}
textarea {
  width: 100%;
  height: clamp(13vh, 3vh, 25vh);
  background: var(--clr-sur-l);
  font-family: "Roboto", sans-serif;
  font-size: var(--font-list-label-s);
  caret-color: var(--primary-middle);
  padding: var(--s-pad);
  outline: none;
  border-radius: var(--s-brd-rad);
  border: var(--s-brd) solid transparent;
  resize: none;
  color: var(--text-dark);
  font-weight: var(--f-weight-ligh);
}
textarea::placeholder {
  font-size: var(--font-list-label-s);
}

textarea:focus {
  border-color: var(--primary-middle);
  background: var(--clr-sur-d);
}
</style>
