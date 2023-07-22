<template>
  <section class="chat__wrapper">
    <section class="chat-text__area">
      <article class="chat-text__other-user">
        <div class="text-user__other txt-user">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ad obcaecati deserunt id magnam sapiente iusto nulla, sit
            praesentium
          </p>
          <time datetime="12:32">12:24</time>
        </div>
        <div class="text-user__other txt-user">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ad obcaecati deserunt id magnam sapiente iusto nulla, sit
            praesentium alias recusandae architecto quis dignissimos, illum
            doloremque aliquam corporis non nam.
          </p>
          <time datetime="12:32">12:25</time>
        </div>
      </article>
      <article class="chat__time-stamp">
        <day>Montag</day> <date>23.5.23</date>
      </article>
      <article class="chat-text__own">
        <div class="text-user__own txt-user">
          <p>Lorem ipsum dolor sit,</p>
          <time datetime="12:32">12:30</time>
        </div>
        <div class="text-user__own txt-user">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ex
            atque quibusdam aut
          </p>
          <time datetime="12:32">12:31</time>
        </div>
        <div class="text-user__own txt-user">
          <p>
            Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,
          </p>
          <time datetime="12:32">12:32</time>
        </div>
      </article>
      <!------------------------------------------->
      <article class="chat-text__other-user">
        <div class="text-user__other txt-user">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ad obcaecati deserunt id magnam sapiente iusto nulla, sit
            praesentium alias recusandae architecto quis dignissimos, illum
            doloremque aliquam corporis non nam.
          </p>
          <time datetime="12:32">10:32</time>
        </div>
      </article>
      <!------------------------------------------->
      <article class="chat-text__own">
        <div class="text-user__own txt-user">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ex
            atque quibusdam aut
          </p>
          <time datetime="12:32">11:05</time>
        </div>
        <div class="text-user__own txt-user">
          <p>
            Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,
          </p>
          <time datetime="12:32">11:06</time>
        </div>
      </article>
      <!------------------------------------------->
      <article class="chat__time-stamp">
        <day>Dienstag</day> <date>24.5.23</date>
      </article>
      <!------------------------------------------->
      <article class="chat-text__other-user">
        <div class="text-user__other txt-user">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ad obcaecati deserunt id magnam sapiente iusto nulla, sit
            praesentium alias recusandae architecto quis dignissimos, illum
            doloremque aliquam corporis non nam. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Delectus ad obcaecati deserunt id
            magnam sapiente iusto nulla, sit praesentium alias recusandae
            architecto quis dignissimos, illum doloremque aliquam corporis non
            nam.
          </p>
          <time datetime="12:32">11:45</time>
        </div>
      </article>
      <!------------------------------------------->
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
.chat__wrapper::-webkit-scrollbar,
.chat__wrapper::-webkit-scrollbar-button,
.chat__wrapper::-webkit-scrollbar-thumb {
  appearance: none;
  width: 0;
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
  background: var(--surface-dark);
  overflow: scroll;
  width: 95%;
  height: 100%;
  margin-inline: auto;
}
article {
  /* border: 1px solid blue; */
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
/*========================================*/
article time {
  width: 100%;
  height: max-content;
  color: var(--text-light);
  font-size: clamp(0.8rem, 3vw, 1.1rem);
  font-weight: 600;
  padding-bottom: 0.5rem;
}
.chat-text__own time {
  text-align: start;
  padding-left: 0.5rem;
}
.chat-text__other-user time {
  text-align: end;
  padding-right: 0.5rem;
}
.chat__time-stamp {
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-bottom: 0.3rem;
  margin-inline: auto;
  color: var(--own-txt);
  font-size: clamp(0.9rem, 3vw, 1.3rem);
  font-weight: 600;
  border-bottom: 1px solid var(--own-txt);
}
/*========================================*/
.txt-user {
  width: 85%;
  background: var(--other-txt);
  border-radius: 0.5rem;
  margin-bottom: 0.6rem;
  display: flex;
  flex-direction: column;
}

.txt-user:last-of-type {
  background: var(--other-txt);
  position: relative;
}

.text-user__other:last-of-type {
  border-radius: 0.5rem 0.5rem 0.5rem 0;
}
.text-user__own:last-of-type {
  border-radius: 0.5rem 0.5rem 0 0.5rem;
}
.txt-user p {
  width: 100%;
  padding: 0.6rem;
  text-align: start;

  line-height: 1.3rem;
  color: var(--text-mid);
  font-size: clamp(1rem, 3vw, 1.4rem);
  font-weight: 300;
}
.text-user__other p {
  text-align: end;
}
/*===============================================*/
.text-user__other:last-of-type:after,
.text-user__own:last-of-type:after {
  background: var(--surface-dark);
  position: absolute;
  border-radius: 0 0 0 5rem;
  content: "";
  display: block;
  width: 1.8rem;
  height: 2rem;
  bottom: 1px;
  left: -29px;
}
.text-user__other:last-of-type:after {
  border-radius: 0 0 5rem 0;
}
.text-user__own:last-of-type:after {
  bottom: 1px;
  left: 100%;
}

.text-user__other:last-of-type:before,
.text-user__own:last-of-type:before {
  background: var(--other-txt);
  position: absolute;
  content: "";
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  bottom: 0;
  left: -24px;
  right: 0;
}
.text-user__own,
.text-user__own:last-of-type,
.text-user__own:last-of-type:before {
  background: var(--own-txt);
}
.text-user__own:last-of-type:before {
  bottom: 0;
  left: 100%;
}
.text-user__other:last-of-type:after,
.text-user__own:last-of-type:after,
.text-user__other:last-of-type:before,
.text-user__own:last-of-type:before,
.txt-user,
.txt-user p {
  transition: all 0.4s ease-in-out;
}

/*===============================================*/
/*                   footer                      */
/*===============================================*/
.chat-footer {
  width: 100%;
  height: 4rem;
  background: hsl(0, 0%, 10%, 0.7);
  backdrop-filter: blur(3px);
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
