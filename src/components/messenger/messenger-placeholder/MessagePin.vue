<template>
  <article
    role="Messenger-Card-User"
    class="msg-user__pin-wrapper"
    v-for="user in users"
    :key="user.id"
  >
    <section class="msg-img__pin-holder">
      <figure class="msg-img__pin-user">
        <div class="msg-user__pin-state"></div>
        <img :src="user.pinImg" alt="" />
      </figure>
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          id: 202,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 203,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 204,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 205,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 206,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 207,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 208,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 209,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
        {
          id: 201,
          pinImg:
            "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.msg-user__pin-wrapper {
  width: 100%;
  height: max-content;
}
.msg-user__pin-state {
  display: block;
  width: 1.2rem;
  aspect-ratio: 1;
  border-radius: 100%;
  border: 4px solid var(--clr-bg);
  z-index: 10;
  position: absolute;
  top: 0%;
  left: 320%;
  translate: -50% 0;
  background: red;
}

.msg-img__pin-holder {
  position: relative;
  width: 30%;
  height: max-content;
}
.msg-img__pin-user {
  width: max-content;
  height: max-content;
  display: grid;
  place-content: center;
  border-radius: 1.5rem;
  border: 10px solid var(--clr-bg);
  margin-right: -1.5rem;
}
.msg-img__pin-user > img {
  filter: saturate(0.3);
  border-radius: 1rem;
  height: 5rem;
  width: 7rem;
  object-fit: cover;
}
</style>
