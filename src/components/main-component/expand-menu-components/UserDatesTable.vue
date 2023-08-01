<template>
  <section class="site__wrapper">
    <article
      class="user-table__wrapper"
      :class="{ 'change-btn__active': !notEditableBasicInfos }"
    >
      <table width="100%">
        <thead>
          <tr>
            <th width="30%">Basis Info</th>
            <th width="70%">
              <label for="change-btn__basis-info"
                ><input
                  type="button"
                  value=""
                  class="change-btn"
                  :class="{ 'change-btn__active': !notEditableBasicInfos }"
                  id="change-btn__basis-info"
                  @click.prevent="editBasicInfo"
                /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anrede</td>
            <td>Frau / Herr</td>
          </tr>
          <tr>
            <td>Nachname</td>
            <td>
              <input
                v-model="firstname"
                class="user-settings__form-text-input"
                type="text"
                :disabled="notEditableBasicInfos"
              />
            </td>
          </tr>
          <tr>
            <td>Vorname</td>
            <td>
              <input
                v-model="lastname"
                class="user-settings__form-text-input"
                type="text"
                :disabled="notEditableBasicInfos"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <span class="link-wrapper">
        <a href="#delete">Konto löschen?</a>
      </span>
    </article>

    <!------------------------------------------------------------------------------------------------>

    <!------------------------------------------------------------------------------------------------>

    <article
      class="user-table__wrapper"
      :class="{ 'change-btn__active': !notEditableAddress }"
    >
      <table width="100%">
        <thead>
          <tr>
            <th width="30%">Adresse</th>
            <th width="70%">
              <label for="change-btn__address"
                ><input
                  type="button"
                  value=""
                  class="change-btn"
                  :class="{ 'change-btn__active': !notEditableAddress }"
                  id="change-btn__address"
                  @click.prevent="editAdress"
                /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Straße</td>
            <td>
              <input
                v-model="address"
                class="user-settings__form-text-input"
                type="text"
                :disabled="notEditableAddress"
              />
            </td>
          </tr>
          <tr>
            <td>PLZ</td>
            <td>
              <input
                v-model="zipcode"
                class="user-settings__form-text-input"
                type="text"
                :disabled="notEditableAddress"
              />
            </td>
          </tr>
          <tr>
            <td>Ort</td>
            <td>
              <input
                v-model="city"
                class="user-settings__form-text-input"
                type="text"
                :disabled="notEditableAddress"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </article>
    <!------------------------------------------------------------------------------------------------>

    <!------------------------------------------------------------------------------------------------>
    <article class="user-table__wrapper">
      <table width="100%">
        <thead>
          <tr class="mail-pw-wrapper">
            <th width="100%">
              <label for="change-btn__mail-password"
                >E-Mail und Passwort<input
                  type="button"
                  value=""
                  class="change-btn"
                  id="change-btn__mail-password"
                /><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="mail-col">
              <span class="text-holder">
                <p>E-Mail</p>
                <input
                  type="email"
                  name="user-bsp-mail"
                  value="max-mustermann@webadresse.com"
                />
              </span>
            </td>
          </tr>
          <tr>
            <td class="pw-col">
              <span class="text-holder">
                <p>Passwort</p>
                <input type="password" name="user-bsp-pw" value="Platzhalter" />
                <p class="change-pw">Passwort vergessen?</p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  </section>
  <ModalConfirmation
    modal-message-screen="user-settings-confirmation"
  ></ModalConfirmation>
</template>

<script>
import ModalConfirmation from "@/components/main-component/expand-site-cards/ConfirmationExpandCard.vue";

import { useGlobalStateStore } from "@/stores/useGlobalStateStore";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore.js";

export default {
  components: { ModalConfirmation },
  data() {
    return {
      activeUser: "",
      firstname: null,
      lastname: null,
      address: null,
      zipcode: null,
      city: null,
      notEditableBasicInfos: true,
      notEditableAddress: true,
      notEditableMailPassword: true,
      basicInfosChanged: false,
      addressChanged: false,
      mailPasswordChanged: false,
    };
  },
  setup() {
    const globalStateStore = useGlobalStateStore();
    const authenticationStore = useAuthenticationStore();
    return { globalStateStore, authenticationStore };
  },
  mounted() {
    this.$watch(
      () => this.authenticationStore.activeUser,
      (activeUser) => {
        this.activeUser = activeUser[0];
        this.firstname = this.activeUser.firstname;
        this.lastname = this.activeUser.lastname;
        this.address = this.activeUser.address;
        this.zipcode = this.activeUser.zipcode;
        this.city = this.activeUser.city;
        // After initialization data are changed, so set back to false
        this.basicInfosChanged = false;
        this.addressChanged = false;
        this.mailPasswordChanged = false;
      }
    );
  },
  methods: {
    editBasicInfo() {
      this.notEditableBasicInfos = !this.notEditableBasicInfos;
      if (this.basicInfosChanged) {
        // Data set for the update function
        let dataToUpdate = {
          activeUser: this.activeUser.id,
          firstname: this.firstname,
          lastname: this.lastname,
        };
        // The update function
        this.authenticationStore.updateCurrentUserData(dataToUpdate);
        // set dataChange back to default
        this.basicInfosChanged = false;
      }
    },
    editAdress() {
      this.notEditableAddress = !this.notEditableAddress;
      if (this.addressChanged) {
        // Data set for the update function
        let dataToUpdate = {
          activeUser: this.activeUser.id,
          address: this.address,
          zipcode: this.zipcode,
          city: this.city,
        };
        // The update function
        this.authenticationStore.updateCurrentUserAddress(dataToUpdate);
        // set dataChange back to default
        this.addressChanged = false;
      }
    },
  },
  // Watch if any data were changed by user
  watch: {
    firstname(newFirstName, oldFirstName) {
      if (newFirstName !== oldFirstName) {
        this.basicInfosChanged = true;
      }
    },
    lastname(newLastName, oldLastName) {
      if (newLastName !== oldLastName) {
        this.basicInfosChanged = true;
      }
    },
    address(newAddress, oldAddress) {
      if (newAddress !== oldAddress) {
        this.addressChanged = true;
      }
    },
    zipcode(newZipcode, oldZipcode) {
      if (newZipcode !== oldZipcode) {
        this.addressChanged = true;
      }
    },
    city(newCity, oldCity) {
      if (newCity !== oldCity) {
        this.addressChanged = true;
      }
    },
  },
};
</script>

<style scoped>
.site__wrapper {
  width: 100%;
  height: 100%;
}
.user-table__wrapper {
  display: block;
  width: 100%;
  height: max-content;
  padding-block: calc(var(--s-pad) / 2);
  background: var(--sec-bg);
  box-shadow: 0px 0px 15px var(--shd-single-cards);
  border-radius: var(--m-brd-rad);
  padding: var(--s-pad);
  margin-bottom: var(--s-marg);
}

table {
  border-collapse: collapse;
}
/*===================================*/
input[type="button"] {
  appearance: none;
  position: absolute;
  width: 0;
  height: 0;
  top: -99999px;
}

/*===================================*/
label {
  display: block;
  height: 100%;
  width: 100%;
  text-align: end;
  padding-block: calc(var(--s-pad) - 0.7rem);
}
label svg {
  width: var(--m-font);
  height: var(--m-font);
  fill: var(--text-light);
}
/* Styling after edit button is pressed */
.change-btn:active ~ svg {
  fill: var(--check-checked);
}
.change-btn__active,
.change-btn__active ~ svg {
  fill: var(--secondary-color);
  box-shadow: 0px 0px 15px var(--secondary-color);
}
/* end of edit button styling */
.link-wrapper {
  display: block;

  width: 100%;
  text-align: end;
  padding-block: 1rem 0.3rem;
}

a {
  text-decoration: none;
  color: var(--text-light);
}
table :is(td, input, p, a) {
  font-size: clamp(0.9rem, 3vw, 1.3rem);
}
table :is(th) {
  font-size: calc(var(--s-font) * 1.2);
  font-weight: var(--f-weight-reg);
  text-align: center;
  color: var(--text-dark);
  border-bottom: var(--m-brd) solid var(--check-checked);
  padding-bottom: calc(var(--s-pad) / 2);
}
table :is(td) {
  font-weight: var(--f-weight-m);
  color: var(--text-light);
  text-align: left;
  padding-inline: calc(var(--s-pad) / 2);
  word-break: break-all;
  word-wrap: break-word;
  padding-block: calc(var(--s-pad) - 0.3rem);
}

td:nth-child(odd) {
  text-align: left;
  color: var(--text-mid);
  font-weight: var(--f-weight-m);
}
td:nth-child(even) {
  text-align: right;
}
tr:nth-child(even) {
  border-bottom: var(--s-brd) solid var(--clr-brd-top);
  border-top: var(--s-brd) solid var(--clr-brd-top);
}
/*===============================================*/

/* === Styling of Input Elements === */
.user-settings__form-text-input,
.user-settings__form-text-input:focus {
  font-family: var(--def-font-style);
  border: none;
  color: var(--text-light);
  font-weight: var(--f-weight-m);
  text-align: right;
  background: transparent;
  outline-offset: var(--xs-pad);
  outline-color: var(--shd-single-cards);
}
.user-settings__form-text-input:focus {
  box-shadow: 0 0 20px 1px var(--shd-single-cards);
  background: rgba(102, 100, 100, 0.08);
  color: var(--text-mid);
}
/* === End of Styling of Input Elements === */

.text-holder {
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
}
.text-holder input {
  width: 100%;
}
.text-holder > p {
  color: var(--text-mid);
  padding-left: 0.1rem;
}
.change-pw {
  margin-top: 1rem;
  text-align: right;
}
.text-holder > input {
  font-weight: var(--f-weight-m);
  color: var(--text-light);
}
.mail-col,
.pw-col {
  padding-inline: 0;
  border-bottom: var(--s-brd) solid transparent;
}
.mail-col {
  border-bottom: var(--s-brd) solid var(--clr-brd-top);
}
.mail-pw-wrapper label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-block: calc(var(--s-pad) - 0.7rem);
}
input[type="email"],
input[type="password"] {
  appearance: none;
  border: none;
  outline: none;
  pointer-events: none;
  padding-top: calc(var(--s-pad) - 0.7rem);
  background: none;
}

input[type="password"] {
  letter-spacing: 0.1em;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
}
</style>
