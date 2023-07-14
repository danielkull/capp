<template>
  <section class="menue-expand__outer-wrapper" id="test-test">
    <div class="menue-expand__inner-wrapper">
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
            /></svg
        ></a>
        <h3 class="menue-expand__site-header">Platzhalter</h3>
      </header>
      <section class="menue-expand__site-main">
        <!-------------------------------------------------------------------->

        <!----------Hier COntent--------->

        <!-------------------------------------------------------------------->
      </section>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* :has(#teamsite:checked) ~ .testsite {
  translate: 50% 0;
} */
/* #teamsite:checked ~ svg {
  fill: red;
} */

section:target {
  width: 100%;
}
.menue-expand__outer-wrapper {
  display: block;
  position: absolute;
  z-index: 15;
  top: 0%;
  left: 0%;
  overflow: hidden;
  min-width: 0vw;
  min-width: 0dvw;
  min-height: 100vh;
  min-height: 100vh;
  background: linear-gradient(
    to right,
    var(--clr-prime-m) 40%,
    var(--clr-prime-vd)
  );
  width: 0;
  transition: 0.3s;
}
.menue-expand__inner-wrapper {
  min-width: 100vw;
  min-width: 100dvw;
  min-height: 90vh;
  min-height: 90vdh;
  display: flex;
  flex-direction: column;
  background: var(--menue-bg);
  margin-top: 10vh;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
}
.menue-expand__outer-wrapper header {
  width: 90%;
  height: 10%;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;

  margin-top: var(--s-marg);
  padding-inline: var(--s-pad);
  padding-block: var(--s-pad);
  border-bottom: 1px solid var(--text-light);
  margin-inline: auto;
}
.menue-expand__outer-wrapper header h3 {
  text-transform: uppercase;
  font-weight: 300;
  color: var(--text-mid);
  letter-spacing: 0.1em;
  font-size: calc(var(--m-font) * 1.2);
  margin-left: 1rem;
}
.back-btn {
  width: max-content;
  height: max-content;
}
.back-btn > svg {
  width: 2rem;
  aspect-ratio: 1;
  fill: var(--clr-like-def);
}

.menue-expand__site-main {
  width: 100%;
  height: 83vh;
  display: block;
  padding-inline: var(--s-pad);
  background: var(--menue-bg);
}
</style>
