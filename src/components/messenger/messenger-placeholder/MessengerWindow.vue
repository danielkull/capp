<template>
  <!-- <section class="live-msg-wrapper" id="live-msg__wrapper">
    <input type="checkbox" name="" id="chat-window" />
    <label for="chat-window">Chat</label>
    <MessageChat />
  </section> -->

  <section class="msg-view__wrapper">
    <span class="msg-header"
      ><h3>Angepinnt</h3>
      <div class="svg-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          class="bi bi-pin-angle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"
          />
        </svg>
      </div>
    </span>

    <section class="msg-view__pin-wrapper">
      <MessagePin />
    </section>
    <span class="msg-header"
      ><h3>Alle Nachrichten <span class="msg-shadow"></span></h3>
      <div class="svg-wrapper">
        <button @click="chatBtn"></button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          class="bi bi-mailbox2"
          viewBox="0 0 16 16"
        >
          <path
            d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"
          />
          <path
            d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"
          />
        </svg>
      </div>
    </span>
    <section class="msg-view__all-wrapper">
      <MessageSingle />
    </section>
  </section>
</template>

<script>
import MessageSingle from "@/components/messenger/messenger-placeholder/MessageSingle.vue";
import MessagePin from "@/components/messenger/messenger-placeholder/MessagePin.vue";

export default {
  emits: ["changeTranslate"],

  components: {
    MessageSingle,
    MessagePin,
  },
  methods: {
    chatBtn() {
      this.$emit("changeTranslate", "0% 0%");
    },
  },
};
</script>

<style scoped>
.msg-view__wrapper {
  width: 95%;
  height: 95%;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem;
  margin-inline: auto;
  background: var(--clr-bg);
}
.msg-view__pin-wrapper {
  background: var(--clr-bg);
  width: 100%;
  height: 20%;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-inline: auto;
  overflow: auto;
  white-space: nowrap;
}
.msg-view__all-wrapper {
  overflow: scroll;
  height: 70%;
  width: 100%;
}
.msg-header {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--primary-middle);
  background: transparent;
  /* box-shadow: 0 5px 40px rgba(0, 0, 0, 0.7); */
}
h3 {
  color: var(--text-light);
  font-size: 1.2rem;
  font-weight: 500;

  position: relative;
  /* padding-bottom: 1rem; */
}
.msg-header svg {
  fill: var(--text-light);
  width: 1.2rem;
  height: 1.2rem;
}
.svg-wrapper {
  border: 2px solid var(--text-light);
  border-radius: 0.5rem;
  display: grid;
  place-content: center;
  padding: 0.3rem;
  opacity: 0.8;
}

.msg-view__all-wrapper::-webkit-scrollbar {
  appearance: none;
  width: 0;
}
.msg-view__pin-wrapper::-webkit-scrollbar {
  appearance: none;
  width: 0;
}
/*=================================*/
section:target {
  translate: 0% 0;
}
/* .live-msg-wrapper {
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
  background: var(--clr-bg);
  background: red;
  position: absolute;
  z-index: 15;
  top: 0px;
  left: 0;
  transition: 0.3s ease-in-out;
  translate: 0% 0%;
}
.live-msg-wrapper input[type="checkbox"] {
  appearance: none;
  position: absolute;
  top: -9999px;
  width: 0;
}
label {
  font-size: 2rem;
  display: block;
  padding-inline: 3rem;
  height: 5rem;
  width: 100%;
  background: green;
}
#live-msg__wrapper:has(#chat-window:checked) {
  translate: 0% 0%;
} */
</style>
