<template>
  <!-- ========= Start small Message View ========= -->
  <article class="booking-message-section">
    <header class="booking-message__header">
      <section class="booking-message__header-profil-wrapper">
        <article class="user-profile__image-small">
          <span class="user-profile__image-small__wrapper">
            <img
              :src="routeData.user_id.img_source"
              :alt="
                routeData.user_id.username +
                '(' +
                routeData.user_id.firstname +
                ' ' +
                routeData.user_id.lastname +
                '), ' +
                routeData.user_id.zipcode +
                ' ' +
                routeData.user_id.city
              "
              :title="
                routeData.user_id.username +
                '(' +
                routeData.user_id.firstname +
                ' ' +
                routeData.user_id.lastname +
                '), ' +
                routeData.user_id.zipcode +
                ' ' +
                routeData.user_id.city
              "
            />
          </span>
        </article>
        <h3 class="booking-message__information-title">
          {{ checkWhoBooks }}
        </h3>
      </section>
    </header>
    <main>
      <p v-if="routeData.status === 'accepted'" class="booking-message__period">
        Klasse, deine Anfrage wurde angenommen. Bitte nehme nun Kontakt mit dem
        Vermieter* auf!
      </p>
      <p v-if="routeData.status === 'pending'" class="booking-message__period">
        {{ period }}
      </p>
      <p v-if="routeData.status === 'declined'" class="booking-message__period">
        Leider hat's nicht geklappt. Versuch es doch bei einer anderen
        Vermieterin*.
      </p>
    </main>
    <footer class="booking-message__footer">
      <div
        class="booking-message__status"
        :style="{
          'outline-color': statusOutlineColor,
          color: statusColor,
          'background-color': statusBgColor,
        }"
      >
        {{ checkCurrentStatus }}
      </div>
      <div
        class="booking-message__status"
        :class="{
          'message-from-you': msgFromMe,
          'message-for-you': !msgFromMe,
        }"
      >
        {{ whoSendMsg }}
      </div>
      <Button
        value="Details"
        id="msg-btn__details"
        class="booking-messsage__button"
        @click.prevent="showExtendedMsg = true"
      ></Button>
    </footer>
  </article>
  <!-- ========= End small Message View ========= -->
  <!-- ========= Start Extended Message View ========= -->
  <article v-if="showExtendedMsg" class="extended-booking-message-section">
    <header class="extended-booking-message__header">
      <div
        class="booking-message__status"
        :style="{
          'outline-color': statusOutlineColor,
          color: statusColor,
          'background-color': statusBgColor,
        }"
      >
        {{ checkCurrentStatus }}
      </div>
      <div
        class="booking-message__status"
        :class="{
          'message-from-you': msgFromMe,
          'message-for-you': !msgFromMe,
        }"
      >
        {{ whoSendMsg }}
      </div>
      <BackButton
        value="Zurück"
        id="extended-msg-btn__back"
        @click.prevent="showExtendedMsg = false"
      ></BackButton>
    </header>
    <main class="extended-booking-message__main">
      <h3 class="booking-message__information-title extended-title">
        Absender:
      </h3>
      <p class="message-text">{{ msgSender }}</p>
      <h3 class="booking-message__information-title extended-title">
        Empfänger:
      </h3>
      <p class="message-text">{{ msgReceiver }}</p>
      <h4 class="booking-message__information-title extended-title">
        Zeitraum:
      </h4>
      <p class="message-text">{{ period }}</p>
      <h4 class="booking-message__information-title extended-title">
        Anlass fürs Ausleihen:
      </h4>
      <p class="message-text">{{ checkCurrentPurpose }}</p>
      <h4 class="booking-message__information-title extended-title">
        Persönliche Nachricht des Absenders:
      </h4>
      <p class="message-text">{{ routeData.booking_msg }}</p>
    </main>
    <footer>
      <section
        v-if="msgFromMe"
        class="extended-booking-message__footer"
      ></section>
      <section v-else class="extended-booking-message__footer">
        <Button
          value="Akzeptieren"
          id="extended-msg-btn__accept"
          class="booking-messsage__button"
          @click.prevent="changeRouteStatus('accepted')"
        ></Button>
        <Button
          value="Ablehnen"
          id="extended-msg-btn__decline"
          class="booking-messsage__button decline-btn"
          @click.prevent="changeRouteStatus('declined')"
        ></Button>
      </section>
    </footer>
  </article>
  <!-- ========= End Extended Message View ========= -->
</template>

<script>
import Button from "@/components/input-elements/Button.vue";
import BackButton from "@/components/input-elements/BackButton.vue";
import { supabase } from "@/lib/supabaseClient.js";

export default {
  emits: ["updateRouteStatus"],
  props: ["routeData", "period", "activeUser"],
  components: { Button, BackButton },
  data() {
    return {
      msgFromMe: true,
      msgSender: "",
      msgReceiver: "",
      showExtendedMsg: false,
      bookingPurpose: "N/A",
      statusBgColor: "var(--secondary-color)",
      statusColor: "var(--primary-very-dark)",
      statusOutlineColor: "var(--secondary-color)",
    };
  },
  computed: {
    checkCurrentPurpose() {
      if (this.routeData.purpose_id === null) {
        return this.bookingPurpose;
      } else {
        return (this.bookingPurpose = this.routeData.purpose_id.purpose_name);
      }
    },
    checkCurrentStatus() {
      switch (this.routeData.status) {
        case "accepted":
          this.statusBgColor = "var(--primary-middle)";
          this.statusColor = "var(--clr-bg)";
          this.statusOutlineColor = "var(--primary-middle)";
          return "Bestätigt";
        case "pending":
          this.statusBgColor = "transparent";
          this.statusColor = "var(--text-dark)";
          this.statusOutlineColor = "var(--secondary-color)";
          return "Ausstehend";
        case "declined":
          this.statusBgColor = "var(--accent-color-light)";
          this.statusColor = "var(--clr-bg)";
          this.statusOutlineColor = "var(--accent-color-light)";
          return "Abgelehnt";
        default:
          this.statusBgColor = "var(--secondary-color)";
          this.statusColor = "var(--text-dark)";
          this.statusOutlineColor = "var(--secondary-color)";
      }
    },
    checkWhoBooks() {
      if (this.activeUser[0].username === this.routeData.user_id.username) {
        this.msgFromMe = true;
        this.msgSender = this.activeUser[0].username;
        this.msgReceiver = this.routeData.car_id.user_id.username;
        return `Deine Buchungsanfrage an ${this.routeData.car_id.user_id.username}`;
      } else if (
        this.activeUser[0].username !== this.routeData.user_id.username
      ) {
        this.msgFromMe = false;
        this.msgSender = this.routeData.user_id.username;
        this.msgReceiver = this.activeUser[0].username;
        return `${this.routeData.user_id.username} hat dir eine Buchungsanfrage geschickt.`;
      }
    },
    whoSendMsg() {
      if (this.msgFromMe) {
        return "Gesendet";
      } else {
        return "Erhalten";
      }
    },
  },
  methods: {
    async changeRouteStatus(newStatus) {
      const { data, error } = await supabase
        .from("routes")
        .update({ status: newStatus })
        .eq("id", this.routeData.id)
        .select("id, status");
      this.$emit("updateRouteStatus", data);
      this.showExtendedMsg = false;
    },
  },
};
</script>

<style scoped>
.booking-message-section {
  width: 95%;
  margin-inline: auto;
  background: var(--surface-dark);
  margin-top: 1rem;
  border-radius: var(--s-brd-rad);
  padding-inline: 1rem;
  padding-block: 0.2rem 0.4rem;
  box-shadow: 0px 0px 20px var(--card-shadow);
  border-bottom: 1px solid var(--card-shadow);
  border-right: 1px solid var(--card-shadow);
  border-top: 1px solid var(--clr-sur-l);
  border-left: 1px solid var(--clr-sur-l);
}

.booking-message__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.booking-message__header-profil-wrapper {
  display: inherit;
  align-items: center;
  color: fnt;
  font-size: clamp(0.9rem, 3vw, 1rem);
  gap: 1rem;
}

.message-text {
  font-size: var(--font-list-label);
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: start;
}

.booking-message__footer {
  display: flex;
  justify-content: space-between;
  padding-block: 0.5rem;
}

/* Customer Image Profil same as UserProfileView.vue Img */

/*==================Profilbild-Klein-===============================*/
.user-profile__image-small {
  width: 2.5rem;
  aspect-ratio: 1;
  margin-inline: auto;
  aspect-ratio: 1;
  border-radius: 100%;
  display: grid;
  place-items: center;
}
.user-profile__image-small__wrapper {
  overflow: hidden;
  display: block;
  /* width: 100%; */
  width: 2.5rem;
  border: 3px solid var(--primary-dark);
  aspect-ratio: 1;
  border-radius: 100%;
}

.user-profile__image-small__wrapper > img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center center;
  /*position: relative;*/
}
/*========================================================*/
/*==================Profilbilder-Ende===============================*/

/* ===== Status icons======= */
.booking-message__status {
  max-width: fit-content;
  outline: 1px solid black;
  background: var(--list-color);
  margin-block: 0.5rem;
  border-radius: calc(var(--font-size) - 0.6rem);
  font-weight: 600;
  padding: calc(0.1rem + 0.5vh) calc(0.5rem + 0.5vw);
  font-size: clamp(0.8rem, 3vw, 1.2rem);
}

.extended-booking-message__main p {
  font-size: var(--font-list-label);
  color: var(--text-light);
  padding-block: 0.5rem 0.8rem;
}
.extended-booking-message__main :is(h3, h4) {
  width: 100%;
  margin-bottom: 0.4rem;
  padding-bottom: 0.5rem;
  font-size: var(--font-hr3);
  font-weight: var(--f-weight-bold);
  border-bottom: 1px solid transparent;
  color: var(--text-light);
  border-image: linear-gradient(
      to right,
      var(--text-light),
      var(--surface-dark)
    )
    30;
}
.message-from-you {
  color: var(--clr-font-lightest);
  background: transparent;
  outline: 1px solid var(--list-color);
}
.message-for-you {
  color: var(--clr-font-lightest);
  background: var(--list-color);
  outline: 1px solid var(--list-color);
}
/* ===== End of Status icons======= */

/* ======== Buttons ========= */
.booking-messsage__button {
  padding-block: 0.2rem;
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  text-transform: none;
  outline-offset: clamp(0.1rem, 1vw, 0.2rem);
  outline: none;
  border-width: 1px;
  border-radius: 0.5rem;
  height: 1.5rem;
  margin-block: 0.4rem 0.4rem;
}
.decline-btn {
  color: var(--accent-color-light);
  border-color: var(--accent-color-light);
}
/* ======== End ofButtons ========= */

/* ======== Extended Message styles ======== */

.extended-booking-message__header,
.extended-booking-message__footer {
  display: flex;
  justify-content: space-between;
  padding-block: 1rem;
}
.extended-booking-message-section {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-inline: auto;
  background: var(--clr-bg);
  margin-top: 1rem;
  border-radius: var(--s-brd-rad);
  padding-inline: 1rem;
  padding-block: 0.2rem 0.4rem;
  overflow: scroll;
  z-index: 1;
}
.extended-booking-message-section::-webkit-scrollbar {
  appearance: none;
  width: 0;
}
/* ======== End ofExtended Message styles ======== */
</style>
