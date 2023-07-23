<template>
  <section class="chat__wrapper">
    <section class="chat-text__area">
      <article class="chat-text__other-user">
        <div class="text-user__other txt-user">
          <time datetime="12:32">12:24</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ad obcaecati deserunt id magnam sapiente iusto nulla, sit
            praesentium
          </p>
        </div>
        <div class="text-user__other txt-user">
          <time datetime="12:32">12:25</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ad obcaecati deserunt id magnam sapiente iusto nulla, sit
            praesentium alias recusandae architecto quis dignissimos, illum
            doloremque aliquam corporis non nam.
          </p>
        </div>
      </article>
      <article class="chat__time-stamp">
        <day>Montag</day> <date>23.5.23</date>
      </article>
      <article class="chat-text__own">
        <div class="text-user__own txt-user">
          <time datetime="12:32">12:30</time>
          <p>Lorem ipsum dolor sit,</p>
        </div>
        <div class="text-user__own txt-user">
          <time datetime="12:32">12:31</time>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ex
            atque quibusdam aut
          </p>
        </div>
        <div class="text-user__own txt-user">
          <time datetime="12:32">12:32</time>
          <p>
            Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,
          </p>
        </div>
      </article>
  
      <article class="chat-text__other-user">
        <div class="text-user__other txt-user">
          <time datetime="12:32">10:32</time>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            ad obcaecati deserunt id magnam sapiente iusto nulla, sit
            praesentium alias recusandae architecto quis dignissimos, illum
            doloremque aliquam corporis non nam.
          </p>
        </div>
      </article>
     
      <article class="chat-text__own">
        <div class="text-user__own txt-user">
          <time datetime="12:32">11:05</time>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ex
            atque quibusdam aut
          </p>
        </div>
        <div class="text-user__own txt-user">
          <time datetime="12:32">11:06</time>
          <p>
            Lorem ipsum dolor sit,Lorem ipsum dolor sit,Lorem ipsum dolor sit,
          </p>
        </div>
      </article>
          <article class="chat__time-stamp">
        <day>Dienstag</day> <date>24.5.23</date>
      </article>
      
      <article class="chat-text__other-user">
        <div class="text-user__other txt-user">
          <time datetime="12:32">11:45</time>
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
        </div>
      </article>

    </section>

    <section class="chat-footer">
      <span class="chat-footer__input-wrapper">
        <input
          type="text"
          name="chat-messenger"
          id="chat-msg"
          class="chat-msg"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            class="bi bi-send-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
            />
          </svg>
        </button>
      </span>
      <figure class="chat__micro-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          class="bi bi-mic-fill"
          viewBox="0 0 16 16"
        >
          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
          <path
            d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </figure>
    </section>
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
  background: var(--clr-bg);
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
  padding-top: 0.5rem;
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
  height: 9vh;
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  align-items: center;
  padding-inline: 1rem;
  background: var(--clr-chat-footer);
  backdrop-filter: blur(3px);
  position: absolute;
  border-top: 1px solid var(--brd-chat-f-h);
  bottom: 0;
  left: 0;
  transition: height 0.2s ease-in-out;
  box-shadow: 0 0 20px var(--shd-f-h-dark), 0 0 50px var(--shd-f-h-light);
}
.chat-footer :is(svg) {
  fill: var(--primary-middle);
  width: 1.5rem;
  height: 1.5rem;
}
.chat-footer__input-wrapper {
  height: max-content;
  display: flex;
  align-items: center;
  width: 100%;
}
button {
  all: unset;
  height: max-content;
  margin-left: 0.5rem;
}
button svg:nth-child(1) {
  translate: 0 2px;
  fill: transparent;
  rotate: 45deg;
}
button:active svg:nth-child(1) {
  fill: var(--primary-middle);
}

.chat-msg {
  font-size: 0.9rem;
  padding: 0.4rem;
  background: hsl(0, 0%, 8%, 0.8);
  height: max-content;
  width: 90%;
  border: 1px solid hsl(0, 0%, 30%, 0.7);
  border-radius: 2rem;
  outline: none;
  color: var(--text-light);
  caret-color: var(--primary-middle);
  transition: padding 0.1s ease-in-out;
}
.chat-msg:focus {
  outline: 2px solid var(--primary-middle);
}
.chat-msg:focus ~ button svg {
  fill: hsl(0, 0%, 40%);
}
.chat-footer:has(.chat-msg:focus) {
  height: 15vh;
}
.chat-msg:focus {
  padding: 1rem 0.4rem;
}
.chat__micro-svg {
  background: var(--brd-chat-f-h);
  border-radius: 100%;
  height: max-content;
  padding: 0.5rem;
  display: grid;
  place-content: center;
}
</style>
