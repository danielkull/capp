<template>
  <section class="menue-expand__outer-wrapper" id="use-rule">
    <header>
      <a href="#" class="back-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
          />
        </svg>
      </a>
      <h2 class="menue-expand__site-header">Nutzungsbedingungen</h2>
    </header>
    <div class="menue-expand__inner-wrapper">
      <section class="menue-expand__site-main">
        <!-------------------------------------------------------------------->

        <!----------Hier COntent--------->
        <TextContent :contentText="'user-use-content'" />
        <!-------------------------------------------------------------------->
      </section>
    </div>
  </section>
</template>

<script>
import TextContent from "@/components/main-component/expand-menu-components/ImpressumdatSecurText.vue";
export default {
  components: {
    TextContent,
  },
};
</script>

<style scoped>
section:target {
  translate: 0% 0;
}
.menue-expand__inner-wrapper,
.menue-expand__outer-wrapper {
  min-width: 100vw;
  min-width: 100dvw;
}

.menue-expand__outer-wrapper {
  display: block;
  overflow: hidden;
  position: absolute;
  z-index: 15;
  top: 0%;
  left: 0%;
  translate: -100% 0;
  min-height: 100vh;
  min-height: 100dvh;
  background: linear-gradient(to top, var(--clr-bg) 30%, transparent),
    linear-gradient(to right, var(--clr-prime-m) 40%, var(--clr-prime-vd));
  width: 0;
  transition: 0.2s;
}
.menue-expand__inner-wrapper {
  min-height: 95.5vh;
  min-height: 90.5dvh;
  display: flex;
  flex-direction: column;
  background: var(--menue-bg);
  margin-top: -1vh;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  box-shadow: inset 0 10px 20px var(--box-shd);
  border-top: 1px solid var(--brd-top);
}
.menue-expand__outer-wrapper header {
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--s-pad);
  margin-inline: auto;
}
header h2 {
  font-weight: 100;
  color: var(--logo-font-color);
  letter-spacing: 0.05em;
  font-size: var(--m-font);
  height: 100%;
}
.back-btn {
  width: max-content;
  height: max-content;
  translate: -20px 2px;
}
.back-btn > svg {
  width: 2rem;
  aspect-ratio: 1;
  fill: var(--clr-like-def);
}

.menue-expand__site-main {
  /*============Hintergund für DarkMode============*/
  display: block;
  width: 95%;
  height: 90.5vh;
  margin-top: 0.2rem;
  margin-inline: auto;
  padding-inline: var(--s-pad);
  border-radius: var(--s-brd-rad) var(--s-brd-rad) 0 0;
  background: var(--bg-content);

  overflow: scroll;
}
</style>
