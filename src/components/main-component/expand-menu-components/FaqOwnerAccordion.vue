<template>
  <section class="faq-question__wrapper">
    <article name="faq-owner-questions">
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-1'"
        :faqId="'owner-question-1'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-2'"
        :faqId="'owner-question-2'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-3'"
        :faqId="'owner-question-3'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-4'"
        :faqId="'owner-question-4'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-5'"
        :faqId="'owner-question-5'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-6'"
        :faqId="'owner-question-6'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-7'"
        :faqId="'owner-question-5'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-8'"
        :faqId="'owner-question-6'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-9'"
        :faqId="'owner-question-5'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-10'"
        :faqId="'owner-question-6'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-11'"
        :faqId="'owner-question-5'"
      />
      <SingleQuestion
        :faqOwnerQuestion="'owner-question-12'"
        :faqId="'owner-question-6'"
      />
    </article>
  </section>
</template>
<script>
import SingleQuestion from "@/components/main-component/expand-menu-components/FaqSingleQuestion.vue";
export default {
  components: {
    SingleQuestion,
  },
};
</script>

<style scoped>
/* List Elements */
.faq-question__wrapper {
  overflow: hidden;
  width: 90%;
  margin-inline: auto;
}

.faq-question__header,
.faq-question__header::after {
  cursor: pointer;
}

.faq-question__header {
  --header-question-list: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  font-size: var(--header-question-list);
  color: var(--main-font-color-light);
  background: var(--surface-light);
}
.faq-list-check {
  all: unset;
  position: absolute;
  top: -9999px;
}

/*====================== dreieck ===================================*/
.faq-question__header::after {
  content: "";
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 1.5rem;
  top: 45%;
  right: calc(2% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.3s ease-out;
  background: var(--list-default);
}
/*====================== dreieck = Ende==================================*/
.faq-question > .faq-answer__holder > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  background: var(--surface-light);
  box-shadow: inset 0px 3px 5px var(--box-shadow-light);
}

.faq-answer__holder {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.faq-list-check:checked ~ .faq-answer__holder {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--surface-dark);
  padding-block: 0rem 1rem;
}
.faq-list-check:checked ~ .faq-question__header::after {
  background: var(--list-actv);
  rotate: 90deg;
}

.faq-question__header:hover {
  background: var(--surface-hover);
  color: var(--main-font-color-dark);
}
</style>
