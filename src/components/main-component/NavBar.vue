<template>
  <nav class="nav-bar__wrapper">
    <input
      type="checkbox"
      name="nav-menue"
      id="user-icon"
      class="nav-bar__btn-icons"
    /><label class="nav-bar__icon-frame" for="user-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        class="bi bi-person-square"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
        /></svg
    ></label>
    <input
      type="checkbox"
      name="nav-menue"
      id="calendar-icon"
      class="nav-bar__btn-icons"
    /><label class="nav-bar__icon-frame" for="calendar-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        class="bi bi-calendar3-week"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
        />
        <path
          class="calender-path"
          d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        /></svg
    ></label>
    <input
      type="checkbox"
      name="nav-menue"
      id="message-icon"
      class="nav-bar__btn-icons"
    /><label class="nav-bar__icon-frame" for="message-icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        class="bi bi-chat-right-dots"
        viewBox="0 0 16 16"
      >
        <path
          d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"
        />
        <path
          class="path"
          d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
        /></svg
    ></label>
    <input
      type="checkbox"
      name="nav-menue"
      id="menue-icon"
      class="nav-bar__btn-icons"
    /><label class="nav-bar__icon-frame" for="menue-icon">
      <div class="menue-wrapper">
        <span class="menue-strip menue-strip1"></span
        ><span class="menue-strip menue-strip2"></span
        ><span class="menue-strip menue-strip1"></span>
      </div>
    </label>
  </nav>
  <article class="nav-bar__menu-wrapper">
    <section class="nav-bar__menu-user menue-cards"></section>
    <section class="nav-bar__menu-calender menue-cards"></section>
    <section class="nav-bar__menu-message menue-cards">
      <Messenger @change-translate="changeTranslateChat" />
    </section>
    <section class="nav-bar__menu-main menue-cards">
      <section class="menu-main__wrapper">
        <MainMenue />
      </section>
    </section>
  </article>
  <section
    class="live-msg-wrapper"
    id="live-msg__wrapper"
    :style="{ translate: msgChatTranslate }"
  >
    <input
      @click.prevent="changeTranslateChat('-100% 0%')"
      type="button"
      name=""
      id="chat-window"
    />
    <label for="chat-window"
      ><article role="Messenger-Card-User" class="msg-user__pin-wrapper">
        <section class="msg-img__pin-holder">
          <figure class="msg-img__pin-user">
            <div class="msg-user__pin-state"></div>

            <img
              src="https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_1280.jpg"
              alt=""
            />
          </figure>
        </section>
      </article>
      <p>Luke Skywalker</p>
    </label>
    <MessageChat />
  </section>
</template>

<script>
import MainMenue from "@/components/main-component/MainMenue.vue";
import Messenger from "@/components/messenger/messenger-placeholder/MessengerWindow.vue";
import MessageChat from "@/components/messenger/messenger-placeholder/MessageChatWindow.vue";
import MessagePin from "@/components/messenger/messenger-placeholder/MessagePin.vue";
export default {
  data() {
    return {
      msgChatTranslate: "",
    };
  },
  components: {
    MainMenue,
    Messenger,
    MessageChat,
    MessagePin,
  },
  methods: {
    changeTranslateChat(value) {
      this.msgChatTranslate = value;
    },
  },
};
</script>

<style scoped>
/*==========================================================*/
/*    Icons gedrückt halten       */

/*==========================================================*/
/* section:target {
  translate: 0% 0;
} */
.nav-bar__wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100vw;

  height: 4.5rem;
  border-top: var(--m-brd) solid var(--clr-prime-l);
  background: linear-gradient(to top, var(--clr-prime-vd), var(--clr-prime-m));
  border-radius: calc(var(--s-brd-rad) + 0.2rem) calc(var(--s-brd-rad) + 0.2rem)
    0 0;
  box-shadow: 0 -5px 30px var(--nav-shadow);
}

.nav-bar__btn-icons {
  appearance: none;
  width: 0rem;
  aspect-ratio: 1;
  position: absolute;
  top: -99999px;
}
label {
  display: flex;
  flex-direction: row;

  width: 4rem;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  padding: 0.4rem;
  border: solid;
  border-width: var(--s-brd);
  border-color: var(--clr-trans);
}
label p {
  font-size: clamp(1.1rem, 3vw, 1.8rem);
  width: 100%;
  text-align: left;
  font-weight: 500;
  color: var(--primary-middle);
  margin-left: -9rem;
}
svg {
  width: 90%;
  margin-inline: auto;
  aspect-ratio: 1;
  fill: var(--nav-icon-def);
}

/*========== Animate icon backgound =================*/

#user-icon:checked + label,
#message-icon:checked + label,
#calendar-icon:checked + label,
#menue-icon:checked + label {
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px rgba(255, 255, 255, 0.2);
}
/*===================================================*/
/*========== Animate message Icon=================*/
.path,
.calender-path {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}
#message-icon:active + label svg > .path {
  opacity: 0;
  translate: 0px -10px;
}

#calendar-icon:active + label svg > .calender-path {
  opacity: 0;
  translate: 0px -10px;
}

/*===================================================*/
/*========== Color checked icon svg =================*/

#user-icon:checked + label svg,
#message-icon:checked + label svg,
#calendar-icon:checked + label svg {
  fill: var(--nav-icon-act);
}
#menue-icon:checked + label .menue-strip2 {
  width: 100%;
  background: var(--nav-icon-act);
}
#menue-icon:checked + label .menue-strip1 {
  width: 70%;
  background: var(--nav-icon-act);
}
/*===================================================*/
/*========== Menue Icon =================*/
.menue-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 3rem;
  aspect-ratio: 1;
  padding: 0.2rem;
}
.menue-strip {
  width: 100%;
  height: 0.25rem;
  background: var(--nav-icon-def);
  border-radius: 0.6rem;
  transition: width 0.2s ease-in-out;
}
.menue-strip2 {
  width: 70%;
  align-self: end;
}

/*==================================================*/

.menue-cards {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: var(--clr-bg);
  position: fixed;
  z-index: 8;
  margin-top: 220%;
  margin-top: 25%;
  overflow: hidden;
  transition: margin 0.5s ease-in-out;
  border-radius: var(--m-pad);
  border-top: 1px solid var(--list-color);
}
.nav-bar__menu-user {
  z-index: 9;
  border-radius: 0;

  margin-top: 220%;
}

.nav-bar__menu-main {
  background: var(--menue-bg);
  padding: var(--m-pad) var(--s-pad);
  border-top: 2px solid var(--list-color);
  margin-top: 220%;
}
.nav-bar__menu-calender {
  background: olive;
  margin-top: 220%;
}
.nav-bar__menu-message {
  background: var(--clr-bg);

  margin-top: 220%;
}

:has(#user-icon:checked) .nav-bar__menu-user {
  margin-top: 0%;
}
:has(#calendar-icon:checked) .nav-bar__menu-calender {
  margin-top: 16.1%;
}
:has(#message-icon:checked) .nav-bar__menu-message {
  margin-top: 16.1%;
}
:has(#menue-icon:checked) .nav-bar__menu-main {
  margin-top: 16.1%;
}

/*=============================================================*/

.menu-main__wrapper {
  width: 100%;
  height: 100%;
  margin-inline: auto;
  background: var(--surface-light);
  /* margin-top: 0%; */
}
/*=======================================================*/
.live-msg-wrapper {
  text-align: center;
  width: 100%;
  height: 100vh;
  display: block;
  background: linear-gradient(
    to right,
    var(--clr-prime-m) 40%,
    var(--clr-prime-vd)
  );
  position: absolute;
  overflow: hidden;

  z-index: 15;
  top: 0px;
  left: 0;
  transition: translate 0.3s ease-in-out;
  translate: -100% 0%;
  margin-top: 0rem;
}
.live-msg-wrapper input[type="checkbox"] {
  appearance: none;
  position: absolute;
  top: -9999px;
  width: 0;
}
.live-msg-wrapper label {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  font-size: clamp(2rem, 5vw, 3rem);
  padding-inline: 3rem;
  padding-top: var(--s-pad);
  height: 4.8rem;
  border-radius: 0;
  width: 100%;
  background: var(--clr-chat-header);
  border-bottom: 1px solid var(--brd-chat-f-h);
  box-shadow: 0 0 20px var(--shd-f-h-dark), 0 0 50px var(--shd-f-h-light);
  backdrop-filter: blur(3px);
  border-radius: 0 0 1.5rem 1.5rem;
}
#chat-window {
  all: unset;
  position: absolute;
} /*=========================*/

.msg-user__pin-wrapper {
  width: 100%;
  height: max-content;
  margin-left: -2rem;
}
.msg-user__pin-state {
  display: block;
  width: 1.2rem;
  aspect-ratio: 1;
  border-radius: 100%;
  z-index: 10;
  position: absolute;
  top: 0%;
  left: 100%;
  translate: -50% 0;
  border: 4px solid var(--clr-bg);
  background: var(--error-color);
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
  border-radius: calc(var(--s-brd-rad) * 1.5);
  border: 6px solid var(--clr-bg);
  margin-right: -1.5rem;
}
.msg-img__pin-user > img {
  filter: saturate(0.3);
  border-radius: var(--s-brd-rad);
  height: 2.5rem;
  width: 4rem;
  object-fit: cover;
}
</style>
