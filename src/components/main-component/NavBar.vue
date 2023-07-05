<template>
  <nav class="nav-bar__wrapper">
    <input
      type="button"
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
      type="button"
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
      type="button"
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
      type="button"
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
    <section class="nav-bar__menu-message menue-cards"></section>
    <section class="nav-bar__menu-main menue-cards">
      <section class="menu-main__wrapper">
        <ul class="menu-main__list">
          <li>Profil <span></span></li>
          <li>
            Fragebogen<span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-list-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                /></svg
            ></span>
          </li>
          <li>
            <ul class="message-field">
              Nachrichten
              <li>
                Offene Anfragen
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    class="bi bi-envelope-paper"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"
                    /></svg
                ></span>
              </li>
              <li>
                Geschlossene Anfragen
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                    /></svg
                ></span>
              </li>
            </ul>
          </li>
          <li>
            Gruppen<span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                /></svg
            ></span>
          </li>
          <li>
            Settings<span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                />
                <path
                  d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                /></svg
            ></span>
          </li>
          <li>
            FAQ<span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-question-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                /></svg
            ></span>
          </li>
          <li>
            Impressum<span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                class="bi bi-journal-text"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                />
                <path
                  d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                />
                <path
                  d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                /></svg
            ></span>
          </li>
        </ul>
      </section>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
/*==========================================================*/
/*    Icons gedrückt halten       */

/*==========================================================*/
.nav-bar__wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  border-top: 2px solid var(--primary-light);
  background: linear-gradient(
    to top,
    var(--primary-veryDark),
    var(--primary-mid)
  );
  border-radius: 1.2rem 1.2rem 0 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.7);
}

.nav-bar__btn-icons {
  appearance: none;

  width: 0rem;
  aspect-ratio: 1;
  position: absolute;
  top: -99999px;
}
label {
  width: 4rem;
  border-radius: 0.5rem;
  padding: 0.4rem;
  border: solid;
  border-width: var(--s-brd);
  border-color: transparent;
  display: grid;
  place-content: center;
  aspect-ratio: 1;
  /* background: blue; */
}
svg {
  width: 90%;
  margin-inline: auto;
  aspect-ratio: 1;
  fill: var(--nav-icon);
}

/*========== Animate icon backgound =================*/

#user-icon:active + label,
#message-icon:active + label,
#calendar-icon:active + label,
#menue-icon:active + label {
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2),
    inset -5px -5px 10px rgba(255, 255, 255, 0.2);
  /* border: solid;
  border-width: 1px 1px 1px 1px;
  border-color: var(--dark-brd) var(--light-brd) var(--light-brd)
    var(--dark-brd); */
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

#user-icon:active + label svg,
#message-icon:active + label svg,
#calendar-icon:active + label svg {
  fill: var(--secondary-dark);
}
#menue-icon:active + label .menue-strip2 {
  width: 100%;
  background: var(--secondary-dark);
}
#menue-icon:active + label .menue-strip1 {
  width: 70%;
  background: var(--secondary-dark);
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
  background: var(--nav-icon);
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
  background: red;
  position: fixed;
  z-index: 8;
  /* top: 100%;
  left: 0; */
  margin-top: 90vh;
  transition: margin 0.5s ease-in-out;
  border-radius: 2rem;
}
.nav-bar__menu-user {
  z-index: 9;
}

.nav-bar__menu-main {
  background: var(--bg-lis-surface);
  padding: 2rem 1rem;
}
.nav-bar__menu-calender {
  background: olive;
}
.nav-bar__menu-message {
  background: dodgerblue;
}

:has(#user-icon:active) .nav-bar__menu-user {
  margin-top: 0vh;
}
:has(#calendar-icon:active) .nav-bar__menu-calender {
  margin-top: 3.5vh;
}
:has(#message-icon:active) .nav-bar__menu-message {
  margin-top: 3.5vh;
}
:has(#menue-icon:active) .nav-bar__menu-main {
  margin-top: 3.5vh;
}

/*=============================================================*/

.menu-main__wrapper {
  width: 100%;
  height: 100%;
  margin-inline: auto;
}
.menu-main__list {
  width: 90%;
  margin-inline: auto;
  padding: 0.5rem;
  list-style-type: none;
  background: var(--bg-lis-surface);
}
.menu-main__list li {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-block: 0.5rem;
  border-bottom: 1px solid var(--clr-user-brd);
}
.menu-main__list li > span,
.message-field li > span {
  display: grid;
  place-content: center;
  width: 2.5rem;
  aspect-ratio: 1;
}

.menu-main__list :is(svg) {
  fill: var(--primary-dark);
}

.message-field {
  /* background: red; */
}
.message-field :is(li) {
  border-bottom: none;
  margin-left: 1rem;
}
</style>
