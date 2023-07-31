<template>
  <article
    role="Messenger-Card-User"
    class="msg-user__wrapper"
    v-for="user in users"
    :key="user.id"
  >
    <section class="msg-img__holder">
      <figure class="msg-img__user">
        <div class="msg-user__state"></div>
        <img :src="user.userImg" alt="" />
      </figure>
    </section>
    <section class="msg-user__holder" :id="user.id">
      <p class="msg-user__name">{{ user.firstName + " " + user.lastName }}</p>
      <p class="msg-user__date">{{ user.lastMessage }}</p>
      <p class="msg-user__text">
        {{ user.text }}
      </p>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          firstName: "Luke",
          lastName: "Skywalker",
          lastMessage: "23.5.2123",
          text: "Ich wollte fix zu Cantina und bräuchte 'nen flotten Schlitten.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 2,
          firstName: "Bruce",
          lastName: "Wayne",
          lastMessage: "26.6.2023",
          text: "Mein Lamborghini ist grad in der Reinigung, muss aber schnell nach Metropolis.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 3,
          firstName: "Tim",
          lastName: "Bendzko",
          lastMessage: "31.7.2023",
          text: "Ich muss nur noch kurz die Welt retten. Bekomme ich Dein Auto?",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 4,
          firstName: "Paul",
          lastName: "McCartney",
          lastMessage: "19.6.2023",
          text: "Baby, you can drive my car.",
          userImg:
            "https://cdn.pixabay.com/photo/2020/01/10/11/39/girl-4755130_1280.jpg",
        },
        {
          id: 5,
          firstName: "Massive",
          lastName: "Töne",
          lastMessage: "08.7.2023",
          text: "Wir wollen doch nur cruisen...",
          userImg:
            "https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg",
        },
        {
          id: 6,
          firstName: "Tracy",
          lastName: "Chapman",
          lastMessage: "13.5.2023",
          text: "You got a fast car, I want a ticket to anywhere. Maybe we make a deal?",
          userImg:
            "https://cdn.pixabay.com/photo/2016/03/26/22/28/person-1281607_1280.jpg",
        },
        {
          id: 7,
          firstName: "Dr.",
          lastName: "Dre",
          lastMessage: "23.5.2023",
          text: "Let me ride",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 8,
          firstName: "Don",
          lastName: "Corleone",
          lastMessage: "26.6.2023",
          text: "Ich mache Dir ein Angebot, dass Du nicht ablehnen kannst.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 9,
          firstName: "Chris",
          lastName: "Rear",
          lastMessage: "24.12.2022",
          text: "Driving home for christmas...",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.msg-user__wrapper {
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: calc(var(--s-pad) / 2);
  padding-inline: 0.5rem;
  padding-block: 0.7rem;
  border-radius: 0.8rem;
  margin-bottom: var(--s-marg);
  background: linear-gradient(60deg, var(--sur-light-shd), var(--sur-dark-shd));
  border-left: var(--s-brd) solid var(--surface-light);
  border-top: var(--s-brd) solid var(--surface-light);
}
.msg-user__wrapper:nth-child(2) .msg-img__holder .msg-img__user div,
.msg-user__wrapper:nth-child(3) .msg-img__holder .msg-img__user div,
.msg-user__wrapper:nth-child(5) .msg-img__holder .msg-img__user div {
  background: var(--primary-middle);
}
.msg-user__wrapper:nth-child(4) .msg-img__holder .msg-img__user div,
.msg-user__wrapper:nth-child(7) .msg-img__holder .msg-img__user div,
.msg-user__wrapper:nth-child(9) .msg-img__holder .msg-img__user div {
  background: var(--list-color);
}
.msg-user__state {
  display: block;
  width: 1rem;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 4px solid var(--sur-light-shd);
  z-index: 10;
  position: absolute;
  top: 50px;
  left: 50px;
  background: var(--accent-color-light);
}
.msg-img__holder {
  position: relative;
  width: 30%;
  height: max-content;
  display: grid;
  place-content: center;
}
.msg-img__user {
  width: max-content;
  height: max-content;
  display: grid;
  place-content: center;

  filter: contrast(0.8) grayscale(0.3);
}
.msg-img__user > img {
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  border-radius: 0.8rem;
}
.msg-user__holder {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  width: 100%;
  padding-left: 0.5rem;
}
.msg-user__name {
  text-align: left;
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  font-weight: 600;
  color: var(--text-mid);
}

.msg-user__date {
  text-align: right;

  font-size: 0.9rem;
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  font-weight: var(--f-weight-m);
  color: var(--text-light);
  opacity: 0.8;
}
.msg-user__text {
  grid-column: 1/3;
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  color: var(--text-light);
  text-align: left;
  width: 100%;
  font-style: italic;
  opacity: 0.6;
  max-height: clamp(2rem, 3vw, 4rem);
  overflow: hidden;
}
</style>
