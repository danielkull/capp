<template>
  <article class="faq-question">
    <input
      type="checkbox"
      name="hier Namen für Kategorie eintragen"
      :id="faqId"
      class="faq-list-check"
    />
    <!------------------------------------------------------------------------->
    <!--------------------/  Owner-Questions-label  /-------------------------->
    <!------------------------------------------------------------------------->
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-1'"
      :for="faqId"
      >Wie funktioniert privates Car-Sharing
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-2'"
      :for="faqId"
    >
      Schließe ich mit dem Mieter* einen Vertrag ab?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-3'"
      :for="faqId"
    >
      Was für Kosten kommen auf mich zu?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-4'"
      :for="faqId"
    >
      Worauf sollte ich bei der Übergabe achten?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-5'"
      :for="faqId"
    >
      Und bei der Rückgabe?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-6'"
      :for="faqId"
    >
      Was mache ich mit dem Fahrzeugschein?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-7'"
      :for="faqId"
    >
      Kann ich Buchungen ablehnen, auch wenn das Auto im Kalender als verfügbar
      eingetragen ist?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-8'"
      :for="faqId"
    >
      Was passiert, wenn ein Mieter* einen Strafzettel bekommt?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-9'"
      :for="faqId"
    >
      Das Auto ist nicht gereinigt zurückgekommen. Und jetzt?
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-10'"
      :for="faqId"
    >
      ...aufgetankt wurde auch nicht...
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-11'"
      :for="faqId"
    >
      ...ich bin also generell echt unzufrieden mit der Mieterin*...
    </label>
    <label
      class="faq-question__header"
      v-if="faqOwnerQuestion === 'owner-question-12'"
      :for="faqId"
    >
      Die Bewertung war unfair - kann ich sie im Nachhinein löschen?
    </label>

    <section class="faq-answer__holder">
      <section class="placeholder">
        <!------------------------------------------------------------------------->
        <!---------------------/  Owner-Answers-Text  /---------------------------->
        <!------------------------------------------------------------------------->

        <p v-if="faqOwnerQuestion === 'owner-question-1'">
          Registriere Dich und Dein Auto, das dauert ungefähr fünf Minuten. Im
          Kalender gibst Du Dein Auto für mögliche Anfragen frei. Sobald eine
          Nachbarin* Dein Auto ausleihen möchte, nimmt sie* Kontakt mit Dir auf
          und reserviert das Auto über den Kalender. Du bestätigst die Buchung
          per Knopfdruck und schlägst ihr* einen Termin vor, um den Erstcheck
          inkl. Vertragsunterzeichnung vorzunehmen.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-2'">
          Na klar, das empfehlen wir auch absolut! Schau Dir hier unseren
          Mustervertrag an. Du kannst ihn natürlich anpassen.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-3'">
          Keine! Der Mieter* wird den Wagen in dem Zustand zurückbringen, in dem
          er ihn ausgeliehen hat, mit gleichem Tankstand und im gleichen
          Reinigungszustand. Wir empfehlen zusätzlich eine Kilometerpauschale
          von 15 Cent, um den Verschleiß einzukalkulieren. Bitte bedenke: Du
          sollst als Vermieterin* weder draufzahlen noch Profit machen! Sharing
          is caring.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-4'">
          Plane vor der Übergabe eine halbe Stunde Zeit ein, um die Formalien
          mit Deinem Nachbarn* zu klären. Hier unterschreibt ihr beide den
          Vertrag und schaut euch das Auto an. Gibt es schon Beulen oder Kratzer
          im Lack? Sind Flecken im Polster? Wo schaltet man den Beifahrerairbag
          für die Babyschale aus und findet den Erste-Hilfe-Koffer und das
          Warndreieck? Wo liegt die Kopie vom Fahrzeugschein (siehe auch “Was
          mache ich mit dem Fahrzeugschein”). Checkt den Tank- und
          Kilometerstand gemeinsam und übergebe dann den Schlüssel. Bei
          längerfristigen Fahrgemeinschaften wird die Übergabe natürlich viel
          schneller vonstatten gehen.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-5'">
          Schau nach, ob der Tank nachgefüllt wurde und das Auto in dem Zustand
          ist, in dem Du es abgegeben hast. Achte dabei Kratzer, Beulen,
          Flecken, Krümel.... Und natürlich, dass Du den Schlüssel
          zurückbekommst.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-6'">
          Kopieren und an einem guten Ort im Auto aufbewahren, z.B. der
          Sonnenblende oder dem Handschuhfach. Ach ja: Informiere bitte den
          Mieter* über den Aufbewahrungsort.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-7'">
          Na klar! Es ist Dein Auto, Du kannst ohne Nennung von Gründen
          ablehnen.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-8'">
          Dann muss er* bezahlen, so schnell wie möglich, und ohne Diskussion.
          Wenn ihr euch nicht einig seid, wer den Strafzettel verursacht hat:
          dafür ist der Buchungskalender da. Hier ist die Buchung ja
          verzeichnet.
        </p>

        <p v-if="faqOwnerQuestion === 'owner-question-9'">
          Sprich die Mieterin* bei der Rückgabe darauf an und vereinbare einen
          schnellstmöglichen Termin, an dem das Auto von ihr* gereinigt wird.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-10'">
          Siehe oben. Zur Not tanke selbst und schick dem Mieter* ein Foto von
          der Tankquittung, die er dann nachträglich bezahlt.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-11'">
          Dann blockiere sie*, so dass sie* Dein Auto nicht mehr anfragen kann.
          Und schreibe die problematischen Punkte in ihre Bewertung - aber bitte
          gemäßigt. Capp ist nicht der Ort für Wutbürger*, sondern für Menschen,
          die sich für eine gute Nachbarschaft und Klimaschutz einsetzen.
        </p>
        <p v-if="faqOwnerQuestion === 'owner-question-12'">
          Das machen wir für Dich! Schreibe uns einfach eine Email an
          capp.carsharing@gmail.com, wir kümmern uns darum.
        </p>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    faqOwnerAnswer: {
      type: String,
      required: true,
    },
    faqOwnerQuestion: {
      type: String,
      required: true,
    },
    faqId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.faq-question__wrapper {
  overflow: hidden;
  width: 90%;
  margin-inline: auto;
}

.faq-question__header,
.faq-question__header::after {
  cursor: pointer;
}

.faq-question__header {
  --header-question-list: clamp(1rem, 2vw, 1.5rem);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  padding-inline: 1rem;
  font-size: var(--header-question-list);
  color: var(--main-font-color-light);
  background: var(--surface-light);
}
.faq-list-check {
  all: unset;
  position: absolute;
  top: -9999px;
}

/*====================== dreieck ===================================*/
.faq-question__header::after {
  content: "";
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 1.5rem;
  top: 45%;
  right: calc(2% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.3s ease-out;
  background: var(--list-default);
}
/*====================== dreieck = Ende==================================*/
.faq-question > .faq-answer__holder > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
  list-style-type: none;
  background: var(--surface-light);
  box-shadow: inset 0px 3px 5px var(--box-shadow-light);
}

.faq-answer__holder {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
}

.faq-list-check:checked ~ .faq-answer__holder {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--surface-dark);
  padding-block: 0rem 1rem;
}
.faq-list-check:checked ~ .faq-question__header::after {
  background: var(--list-actv);
  rotate: 90deg;
}

.faq-question__header:hover {
  background: var(--surface-hover);
  color: var(--main-font-color-dark);
}
</style>
