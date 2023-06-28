<template>
  <div class="capp-input__wrapper">
    <span>
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
      <p class="capp-input__invalid-input">Fehlerhafte Eingabe</p>
    </span>
    <div class="capp-input__help-wrapper">
      <button class="capp-input__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-question-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
          />
        </svg>
      </button>
      <article class="capp-input__help">
        <p>Erklärung für Valid Text, Großbuchstabe etc</p>
      </article>
    </div>
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
.capp-input__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
}
.capp-input__wrapper span {
  width: 100%;
}
.capp-label__default {
  display: block;
  color: var(--primary-dark);

  padding-block: calc(var(--s-font) / 2);
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
}

.capp-input__default {
  display: block;
  width: 100%;
  border: 2px solid var(--clr-trans);
  border-radius: 0.5rem;
  padding-inline: 0.5rem;
  padding-block: 1rem;
  font-size: var(--m-font);
  background: var(--clr-bg-main);
  box-shadow: inset 0 5px 5px -2px var(--secondary-dark);
  color: var(--font-color-dark);
}
.capp-input__default:hover {
  cursor: pointer;
}
.capp-input__default::placeholder {
  opacity: 0.5;
}

.capp-input__default:focus {
  outline-color: var(--primary-light);
}
.capp-input__invalid-input {
  color: var(--error-color);
  font-size: var(--s-font);
  width: 100%;
  height: max-content;
  text-align: right;
  padding-right: calc(var(--s-font) / 2);
  margin-top: calc(var(--s-font) / 1.5);
}
.input__valid {
  color: transparent;
}
.input__invalid {
  color: var(--error-color);
}

/*=====================*/
.capp-input__help-wrapper {
  position: relative;
}
.capp-input__btn {
  all: unset;
  width: calc(var(--s-font) * 2);
  aspect-ratio: 1;
}
.capp-input__btn:active > svg {
  fill: var(--primary-mid);
}
.capp-input__btn svg {
  fill: var(--secondary-default);
  position: relative;
}

.capp-input__help {
  position: absolute;
  top: 20p;
  left: 0;
  display: block;
  font-size: 1.2rem;
  background: var(--secondary-light);
  border: 1px solid var(--primary-dark);
  border-radius: 1rem;
  width: 20rem;
  height: auto;
  padding: 1rem;
  text-align: start;
}
/* .capp-input__help::after {
  content: "";
  display: block;
  position: absolute;
  top: -24px;
  left: 35px;
  width: 1rem;
  height: 1.5rem;
  background: var(--primary-dark);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
} */
</style>
