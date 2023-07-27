<!-- ================================================== -->
<!-- ========= Einführung in diese Komponente ========= -->
<!-- ================================================== -->

<!-- Standard Input Feld benötigt mindestens eine :inputID -->
<!-- Das InputText hat ein Fallback slot mit einem default Text -->
<!-- <InputText :inputId="'you-need-an-ID'"></InputText> -->

<!-- Wenn man ein anderes Input Feld haben möchte dann kann man noch den :inputTypen -->
<!-- festlegen und z.B. auch den :inputPlaceholder -->
<!-- Der :inputTyp liegt als Standard auf "text", man kann aber auch noch "password" und "email" auswählen-->
<!-- Wenn man weitere besondere Input Elemente haben möchte, dann müssen die erst in die Komponente eingebaut werden. -->
<!-- Die Auswahl der passenden Typen, sorgt dafür das die entsprechenden Hilfstexte oder zusatz Symbole richtig angezeigt werden. -->
<!-- Zudem haben diese auch eine passende Formvalidierung! -->
<!-- <InputText
      :inputId="'email'"
      :inputType="'email'"
      :inputPlaceholder="'beispiel@provider.com'"
      >Email</InputText
    > -->

<!-- Hier wurde als Beispiel der slot mit dem default Text überschrieben mit "Another Mail"-->
<!-- Zudem wurde ein v-model verwendet. Das muss immer mit v-model:inputData geschrieben werden,-->
<!-- danach kannst du eine einen namen verwenden den du in data() festgelegt hast.-->
<!-- <InputText
      v-model:inputData="yourDataName"
      :inputId="'another-mail'"
      :inputType="'email'"
      :inputPlaceholder="'dontTrust@Rabbits.com'"
      >Another Mail</InputText
    > -->

<!-- Wenn man ein Password input element benutz ohne es in ein <form></form> tag einzubinden,  -->
<!-- dann gibt er eine Warnmeldung.  -->
<!-- <form action="#">
      <InputText :inputId="'first-password'" :inputType="'password'"
        >Password</InputText
      >
    </form> -->

<!-- ================================================== -->
<!-- ============== Ende der Einführung  ============== -->
<!-- ================================================== -->

<template>
  <div class="capp-input__wrapper">
    <span>
      <label class="capp-label__default" :for="inputId">
        <!-- Fallback Name for the slot -->
        <slot>Textfeld</slot>

        <!-- Start: Password show/hide toggle button -->

        <button
          v-if="inputType === 'password'"
          class="pw-sight"
          @click.prevent="togglePasswordVisibility()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-eye"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
            />
            <path
              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            />
          </svg>
        </button>
        <!-- End: Password show/hide toggle button -->
      </label>

      <!-- Note: autocomplete="on" lets the browser decide how to performe. Would be best to select autocomplete in future according to the type of input and for what it is used-->

      <input
        class="capp-input__default"
        :value="inputData"
        @input="$emit('update:inputData', $event.target.value)"
        @focusout="$emit('isValid', isValid)"
        :type="currentTypeStatus"
        :name="inputId"
        :id="inputId"
        :placeholder="inputPlaceholder"
        autocomplete="on"
        required
      />
      <p
        v-if="isInValid"
        class="capp-input__invalid-input"
        :class="{ input__valid: isValid, input__invalid: isInValid }"
      >
        {{ invalidMessage }}
      </p>
    </span>
    <div class="capp-input__help-wrapper">
      <!-- Start: Help/Question Button -->
      <button class="capp-input__btn" @click.prevent="showHelp = !showHelp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-question-circle-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
          />
        </svg>
      </button>
      <!-- End: Help/Question Button -->

      <!-- Start: Help/Question Information Text -->
      <Transition>
        <article class="capp-input__help" v-if="showHelp">
          <p>{{ giveHelperText }}</p>
        </article>
      </Transition>
      <!-- End: Help/Question Information Text -->
    </div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    inputId: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: "text",
      validator(value) {
        // Only input Element type specific names are allowed
        // List can be extented if needed
        return [
          "text",
          "email",
          "password",
          "datetime-local",
          "tel",
          "number",
        ].includes(value);
      },
    },
    inputPlaceholder: {
      type: String,
      default: "Type here...",
    },
    inputData: {
      type: String,
    },
  },
  emits: ["update:inputData", "isValid"],
  data() {
    return {
      currentTypeStatus: this.inputType,
      showHelp: false,

      isValid: true,
      isInValid: false,
    };
  },
  computed: {
    //  Here we can write all our Texts for the Help messages
    giveHelperText() {
      switch (this.inputType) {
        case "text":
          return "Gib hier Deinen Usernamen ein. Es gibt nur eine Auflage: Du musst ihn Dir merken können.";
        case "email":
          return "Bitte gib hier deine E-Mail-Adresse an. Sie sollte in etwa so aussehen: meinKuerzel@provider.com";
        case "password":
          return "Ein sicheres Passwort hat mindestens 12 Zeichen. Benutze hierbei bitte eine Mischung aus Groß-, Kleinschreibung, Sonderzeichen und Zahlen.";
        case "datetime-local":
          return "Wähle einfach das passende Datum und die Zeit aus.";
        case "tel":
          return "Deine Telefon-Nummer darf keine Buchstaben oder Sonderzeichen wie ?,!,&,%,$,§,#,@ enthalten. Zulässige Sonderzeichen sind +, -, /, () und Leerzeichen.";
        case "number":
          return "Gib hier eine Zahl ein - oder zähle den Wert mit dem up-Pfeil hoch bzw. mit dem down-Pfeil herunter.";
        default:
          return "Da ist wohl was schief gelaufen?! Hierfür haben wir gerade keinen Hilfetext parat. Sollte das Problem noch einmal auftreten, kontaktiere uns unter 'capp.carsharing@gmail.com'.";
      }
    },
    invalidMessage() {
      switch (this.inputType) {
        case "text":
          return "Der Username ist nicht korrekt";
        case "email":
          return "Die E-Mail-Adresse ist nicht korrekt.";
        case "password":
          return "Leider wurden die Passwort-Kriterien nicht erfüllt";
        case "tel":
          return "Deine Telefon-Nummer enthält Buchstaben oder unzulässige Sonderzeichen.";
        default:
          return "Da ist wohl was schief gelaufen?! Hierfür haben wir gerade keinen Hilfetext parat. Sollte das Problem noch einmal auftreten, kontaktiere uns unter 'capp.carsharing@gmail.com'.";
      }
    },
  },
  methods: {
    togglePasswordVisibility() {
      if (this.currentTypeStatus === "text") {
        this.currentTypeStatus = "password";
      } else if (this.currentTypeStatus === "password") {
        this.currentTypeStatus = "text";
      }
    },
    /* Validation Checks for Watchers */
    validateEmail(value) {
      const validationRequirments = new RegExp(
        /^\w+([\.-]?\w+)*@([\w-]+\.)+[\w-]{2,4}$/
      );
      if (validationRequirments.test(value) || value === "") {
        this.isValid = true;
        this.isInValid = false;
      } else {
        this.isValid = false;
        this.isInValid = true;
      }
    },
    validatePassword(value) {
      const validationRequirments = new RegExp(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\*"´§`'.!@$%^&(){}[\]:;<>,.?/~_+\-=]).{12,}$/
      );
      if (validationRequirments.test(value) || value === "") {
        this.isValid = true;
        this.isInValid = false;
      } else {
        this.isValid = false;
        this.isInValid = true;
      }
    },
    validatePhoneNumber(value) {
      const validationRequirments = new RegExp(/^[0-9()+/ \b \-]*$/);
      if (validationRequirments.test(value) || value === "") {
        this.isValid = true;
        this.isInValid = false;
      } else {
        this.isValid = false;
        this.isInValid = true;
      }
    },
  },
  watch: {
    /* Watchers for Validation */
    inputData(value) {
      if (this.inputType === "email") {
        this.validateEmail(value);
      } else if (this.inputType === "password") {
        this.validatePassword(value);
      } else if (this.inputType === "tel") {
        this.validatePhoneNumber(value);
      }
    },
  },
};
</script>

<style scoped>
.capp-input__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.capp-input__wrapper span {
  width: 100%;
}
.capp-label__default {
  display: block;
  color: var(--primary-dark);
  padding-left: 0.2rem;
  padding-block: var(--s-font);
  font-size: var(--font-list-label-s);
  letter-spacing: 0.1rem;
}

.capp-input__default {
  display: block;
  width: 100%;
  border: 2px solid var(--clr-trans);
  border-radius: 0.5rem;
  padding-inline: var(--xs-pad);
  padding-block: var(--s-pad);
  font-size: var(--font-list-label-s);
  background: var(--bg-input);
  font-family: var(--def-font-style);
  caret-color: var(--primary-middle);
  color: var(--text-light);

  outline: none;
  border: var(--s-brd) solid transparent;
}
input[type="password"] {
  font-family: Verdana;
  letter-spacing: 0.1em;
  color: var(--clr-prime-m);
}
input[type="password"]::placeholder {
  letter-spacing: 0;
}

.capp-input__default:hover {
  cursor: pointer;
}
.capp-input__default::placeholder {
  opacity: 0.5;
}

.capp-input__default:focus {
  border: 1px solid var(--primary-dark);
  background: var(--clr-sur-d);
}

/* ====== Invalid and Valid Styling ====== */
.capp-input__invalid-input {
  font-size: var(--s-font);
  width: 100%;
  height: 100%;
  text-align: left;

  margin-top: calc(var(--s-font) / 1.5);
}
.input__valid {
  color: transparent;
}
.input__invalid {
  color: var(--clr-error);
  font-size: 0.9rem;
}

/*=====================*/
.capp-input__help-wrapper {
  /* position: relative; */
  display: grid;
  width: max-content;
  height: max-content;
  place-content: center;
  top: 0%;
  left: 0;
  translate: 0 60%;
  margin-left: 1rem;
  z-index: 100;
}
.capp-input__btn {
  all: unset;
  width: calc(var(--s-font) * 2);
  height: calc(var(--s-font) * 2);
  padding-top: 0.5rem;
}
.capp-input__btn:active > svg {
  fill: var(--primary-middle);
}
.capp-input__btn svg {
  fill: var(--list-default);
  position: relative;
}

.capp-input__help {
  position: absolute;
  top: 10px;
  left: -280px;
  display: block;
  font-size: var(--font-list-label);
  background: var(--clr-sur-l);
  color: var(--text-mid);
  border-radius: var(--s-brd-rad);
  width: 70vw;
  height: auto;
  padding: var(--s-pad);

  text-align: start;
  z-index: 30;
  box-shadow: 0 0 10px var(--foot-shd-d), 0 0 50px var(--foot-shd-d);
  /* background: red; */
}
.capp-input__help p {
  width: 95%;
  margin-inline: auto;
}
/*=================Helper Text show/hide Transition (works with <Transition> from vue) =================*/

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*==================================================================== *
/*=================toggle BTn PW=============================*/
.pw-sight {
  all: unset;
  translate: 10px 7px;
  cursor: pointer;
}
.pw-sight > svg {
  cursor: pointer;
  width: 1.5rem;
  aspect-ratio: 1;
  fill: var(--list-default);
}
.pw-sight:active > svg {
  fill: var(--primary-middle);
}

/*======================================================================= */
</style>
