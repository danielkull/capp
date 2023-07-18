<template>
  <article class="team-member__wrapper">
    <div class="team-member__top-bg">
      <div class="git-logo">
        <a
          v-if="teamMember === 'Stefan'"
          class="name"
          href="https://github.com/StefanH87"
          >Stefan Hiob</a
        >
        <a
          v-if="teamMember === 'Kirsten'"
          class="name"
          href="https://github.com/kiraGit67"
          >Kirsten Anders</a
        >
        <a
          v-if="teamMember === 'Daniel'"
          class="name"
          href="https://github.com/danielkull"
          >Daniel Kuhl</a
        >
        <a
          v-if="teamMember === 'Kerstin'"
          class="name"
          href="https://github.com/kerstin-m"
          >Kerstin Merk</a
        >
        <a href="https://github.com/StefanH87"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </div>
    </div>
    <section class="main-content">
      <p
        aria-name="Beschreibung des Teammitglieds"
        v-if="teamMember === 'Stefan'"
      >
        TeststefanTestStefanTestStefan
      </p>
      <p
        aria-name="Beschreibung des Teammitglieds"
        v-if="teamMember === 'Kirsten'"
      >
        TesteKirstenTestkirsten TesteKirstenTestkirsten TesteKirstenTestkirsten
      </p>
      <p
        aria-name="Beschreibung des Teammitglieds"
        v-if="teamMember === 'Daniel'"
      >
        TestDanielTestDanielTestDanielTestDanielTestDanielTestDanielTestDanielTestDaniel
      </p>
      <p
        aria-name="Beschreibung des Teammitglieds"
        v-if="teamMember === 'Kerstin'"
      >
        TestKerstinTestKerstinTestKerstinTestKerstinTestKerstinTestKerstinTestKerstin
      </p>
    </section>
    <section class="logo-wrapper">
      <span v-if="teamMember === 'Stefan'">
        <img src="@/assets\logos\Miro.png" alt="" />
        <img src="@/assets\logos\procerate.png" alt="" />
        <img src="@/assets\logos\Figma-logo.svg" alt="" />
        <img src="@/assets/logos/HTML5_logo_and_wordmark.svg.png" alt="" />
        <img src="@/assets/logos/CSS3_logo.svg.png" alt="" />
        <img src="@/assets/logos/JavaScript_logo_2.svg.png" alt="" />
      </span>

      <span v-if="teamMember === 'Kirsten'">
        <img src="@/assets/logos/HTML5_logo_and_wordmark.svg.png" alt="" />
        <img src="@/assets/logos/JavaScript_logo_2.svg.png" alt="" />
        <img
          src="@/assets/logos/supabase-logo-DCC676FFE2-seeklogo.com.png"
          alt=""
        />
      </span>

      <span v-if="teamMember === 'Daniel'">
        <img src="@/assets\logos\Miro.png" alt="" />
        <img src="@/assets/logos/HTML5_logo_and_wordmark.svg.png" alt="" />
        <img src="@/assets/logos/JavaScript_logo_2.svg.png" alt="" />
        <img src="@/assets\logos\Pinia.svg" alt="" />
        <img
          src="@/assets/logos/supabase-logo-DCC676FFE2-seeklogo.com.png"
          alt=""
        />
      </span>

      <span v-if="teamMember === 'Kerstin'">
        <img src="@/assets\logos\Miro.png" alt="" />

        <img src="@/assets/logos/HTML5_logo_and_wordmark.svg.png" alt="" />

        <img src="@/assets/logos/JavaScript_logo_2.svg.png" alt="" />
      </span>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    teamMember: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.team-member__wrapper {
  width: 100%;
  border-right: var(--m-brd) solid var(--primary-middle);
  border-bottom: var(--m-brd) solid var(--primary-middle);
  background: linear-gradient(
    to top,
    var(--menue-bg) 40%,
    var(--primary-middle) 40%
  );
  border-radius: 1.8rem;
  overflow: hidden;
  margin-top: 2rem;
}

.main-content :is(p, h5) {
  width: 90%;
  margin-inline: auto;
  margin-top: var(--s-marg);
  font-size: clamp(0.9rem, 3vw, 1.3rem);
  color: var(--text-dark);
}

img {
  width: max-content;
  height: 2rem;
}
.team-member__top-bg {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 80%;
  width: 100%;
  padding-inline: var(--s-pad);
}
.name {
  width: 85%;
}
.git-logo {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-inline: calc(var(--s-pad) / 2);
  padding-block: calc(var(--s-pad) / 2);
}
.git-logo a {
  text-decoration: none;
  font-size: clamp(1rem, 3vw, 1.4rem);
  font-weight: 600;
  letter-spacing: 0.015rem;
  color: var(--clr-iconsvg);
}
.link-svg__wrapper {
  border: 5px solid black;
  width: max-content;
}
svg {
  width: 2rem;
  aspect-ratio: 1;
  fill: var(--clr-iconsvg);
}

.main-content {
  background: var(--menue-bg);

  padding-top: 0.6rem;
  border-radius: 2rem 2rem 0 0;
  padding-bottom: 1.5rem;
}
.main-content p {
  width: 90%;
  margin-inline: auto;
  word-wrap: break-word;
}
.logo-wrapper {
  width: 100%;
  height: max-content;

  background: var(--menue-bg);
  box-shadow: 0 -10px 15px var(--shd-single-cards);
  padding-block: 0.8rem;
  border-radius: 1.5rem;
}
.logo-wrapper span {
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
