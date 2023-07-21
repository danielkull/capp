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
          lastMessage: "23.5.2023",
          text: "Ich wollte fix zu Cantina und bräuchte nen floten Schlitten.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 2,
          firstName: "Bruce",
          lastName: "Wayne",
          lastMessage: "26.6.2023",
          text: "Mein Lamborgini ist grad in der Reinigung, muss aber schnell nach Metropolis.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 3,
          firstName: "Rick",
          lastName: "Deckard",
          lastMessage: "13.5.2123",
          text: "Mein Spinner fliegt nicht mehr. Muss aber irgendwie zur Tyrell Corp.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 4,
          firstName: "Luke",
          lastName: "Skywalker",
          lastMessage: "23.5.2023",
          text: "Ich wollte fix zu Cantina und bräuchte nen floten Schlitten.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 5,
          firstName: "Bruce",
          lastName: "Wayne",
          lastMessage: "26.6.2023",
          text: "Mein Lamborgini ist grad in der Reinigung, muss aber schnell nach Metropolis.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 6,
          firstName: "Rick",
          lastName: "Deckard",
          lastMessage: "13.5.2123",
          text: "Mein Spinner fliegt nicht mehr. Muss aber irgendwie zur Tyrell Corp.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 7,
          firstName: "Luke",
          lastName: "Skywalker",
          lastMessage: "23.5.2023",
          text: "Ich wollte fix zu Cantina und bräuchte nen floten Schlitten.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 8,
          firstName: "Bruce",
          lastName: "Wayne",
          lastMessage: "26.6.2023",
          text: "Mein Lamborgini ist grad in der Reinigung, muss aber schnell nach Metropolis.",
          userImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 9,
          firstName: "Rick",
          lastName: "Deckard",
          lastMessage: "13.5.2123",
          text: "Mein Spinner fliegt nicht mehr. Muss aber irgendwie zur Tyrell Corp.",
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
  background: linear-gradient(60deg, var(--clr-sur-d), var(--sur-dark-shd));
  margin-top: 0.5rem;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-inline: 0.5rem;
  padding-block: 0.7rem;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
}
.msg-user__state {
  display: block;
  width: 1rem;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 4px solid var(--clr-sur-d);
  z-index: 10;
  position: absolute;
  top: 80%;
  left: 80%;
  background: red;
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
  border: 1px solid black;
  border-radius: 0.7rem 0.7rem 0rem 0.7rem;
  overflow: hidden;
  filter: contrast(0.8) grayscale(0.3);
}
.msg-img__user > img {
  height: 4rem;
  width: 4rem;
  object-fit: cover;
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
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-mid);
}

.msg-user__date {
  text-align: right;

  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-light);
  opacity: 0.8;
}
.msg-user__text {
  grid-column: 1/3;
  font-size: 0.9rem;
  color: var(--text-light);
  text-align: left;
  width: 100%;
  font-style: italic;
  opacity: 0.6;
}
</style>
