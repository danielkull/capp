<template>
  <section class="chat__wrapper">
    <section class="chat-text__area">
      <article class="chat-text__other-user">
        <div class="text-user__other txt-user">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ad
          obcaecati deserunt id magnam sapiente iusto nulla, sit praesentium
        </div>
        <div class="text-user__other txt-user">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ad
          obcaecati deserunt id magnam sapiente iusto nulla, sit praesentium
          alias recusandae architecto quis dignissimos, illum doloremque aliquam
          corporis non nam.
        </div>
      </article>

      <article class="chat-text__own">
        <div class="text-user__own txt-user">Lorem ipsum dolor sit,</div>
        <div class="text-user__own txt-user">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ex
          atque quibusdam aut
        </div>
        <div class="text-user__own txt-user">
          Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,
        </div>
      </article>
    </section>

    <section class="chat-footer"></section>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/*===============================================*/
/*                    header                     */
/*===============================================*/
.chat__wrapper {
  display: block;
  width: 100%;
  height: 100%;
  /* border-radius: 1.5rem 1.5rem 0 0; */
  background: var(--clr-bg);
  /* border-top: 1px solid var(--list-color); */
}
/*===============================================*/
/*                     body                      */
/*===============================================*/
.chat-text__area,
article {
  display: flex;
  flex-direction: column;
}

.chat-text__area {
  border-radius: 1rem 1rem 0 0;
  background: green;
  overflow: scroll;
  width: 95%;
  height: 100%;
  margin-inline: auto;
}
article {
  border: 1px solid blue;
  width: 100%;
  height: max-content;
  margin-bottom: 1rem;
}
.chat-text__own {
  align-items: flex-end;
  padding-right: 2rem;
}
.chat-text__other-user {
  align-items: flex-start;
  padding-left: 2rem;
}

.txt-user {
  width: 85%;
  background: yellow;
  padding: 0.6rem;
  margin-bottom: 0.6rem;
}
/*===============================================*/
/*                   footer                      */
/*===============================================*/
.chat-footer {
  width: 100%;
  height: 4rem;
  background: red;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
