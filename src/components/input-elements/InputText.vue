<template>
  <div class="capp-input__wrapper">
    <label class="capp-label__default" :for="inputId">
      <!-- Fallback Name for the slot -->
      <slot>Textfeld</slot>
    </label>

    <input
      class="capp-input__default"
      :type="inputType"
      name=""
      :id="inputId"
      :placeholder="inputPlaceholder"
    />
  </div>
</template>

<!-- NOTE: Beim nutzen von Password vielleicht noch autocomplete Attribute einfügen -->
<!-- required Attribute ebenfalls einfügen und die passenden CSS und JS dazupacken -->

<script>
export default {
  name: "InputText",
  props: {
    inputId: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
    inputPlaceholder: {
      type: String,
      default: "Type here...",
    },
  },
};
</script>

<style scoped>
.capp-label__default {
  display: block;
  color: var(--primary-dark);
  font-weight: bold;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}

.capp-input__default {
  display: block;
  border: 2px solid var(--clr-trans);
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: var(--clr-bg-main);
  box-shadow: inset 0 5px 5px -2px var(--secondary-dark);
  color: var(--font-color-dark);
}

.capp-input__default::placeholder {
  opacity: 0.8;
}

.capp-input__default:focus {
  outline-color: var(--primary-light);
}
</style>
