<template>
  <!------------------------------------------------------------------------->

  <!--/   Erklärung  
 Fragezeile: besteht aus der Checkbox un dem Label,
 hier ist die ID gebindet zbsp "owner-question-1" 
 Antowrtzeile: besteht aus dem p tag
 hier ist die ID gebindet zbsp "owner-question-1" 

 diese beiden gehören zusammen für ein Accordion Element


 Angeben werden sie FAQAccordion

 zbsp:
  <SingleQuestion
        :faqQuestion="'owner-question-1'"
        :faqId="'owner-question-1'"
      />
 /-->

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
      v-if="faqQuestion === 'owner-question-1'"
      :for="faqId"
      >Wie funktioniert privates Car-Sharing
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-2'"
      :for="faqId"
    >
      Schließe ich mit dem Mieter* einen Vertrag ab?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-3'"
      :for="faqId"
    >
      Was für Kosten kommen auf mich zu?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-4'"
      :for="faqId"
    >
      Worauf sollte ich bei der Übergabe achten?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-5'"
      :for="faqId"
    >
      Und bei der Rückgabe?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-6'"
      :for="faqId"
    >
      Was mache ich mit dem Fahrzeugschein?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-7'"
      :for="faqId"
    >
      Kann ich Buchungen ablehnen, auch wenn das Auto im Kalender als verfügbar
      eingetragen ist?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-8'"
      :for="faqId"
    >
      Was passiert, wenn ein Mieter* einen Strafzettel bekommt?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-9'"
      :for="faqId"
    >
      Das Auto ist nicht gereinigt zurückgekommen. Und jetzt?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-10'"
      :for="faqId"
    >
      ...aufgetankt wurde auch nicht...
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-11'"
      :for="faqId"
    >
      ...ich bin also generell echt unzufrieden mit der Mieterin*...
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'owner-question-12'"
      :for="faqId"
    >
      Die Bewertung war unfair - kann ich sie im Nachhinein löschen?
    </label>
    <!------------------------------------------------------------------------------------------>
    <!------------------------------/  Ausleiher-Question-label  /-------------------------------->
    <!------------------------------------------------------------------------------------------>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-1'"
      :for="faqId"
    >
      Wie funktioniert privates Car-Sharing
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-2'"
      :for="faqId"
    >
      Wie funktioniert die Buchung?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-3'"
      :for="faqId"
    >
      Warum muss ich über den Kalender buchen?
    </label>

    <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-4'"
      :for="faqId"
    >
      Die erste Buchung - was muss ich als Mieterin* beachten?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-5'"
      :for="faqId"
    >
      Und bei der Rückgabe?
    </label>
    <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-6'"

      :for="faqId"
    >
      Gibt es Einschränkungen, die ich bei der Anmietung beachten muss?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-7'"
      :for="faqId"
    >
      Was passiert, wenn ich ausnahmsweise doch einen Hund mitnehme, obwohl mir das untersagt wurde? 
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-8'"
      :for="faqId"
    >
      Was passiert, wenn ich einen einen Strafzettel bekomme?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-9'"
      :for="faqId"
    >
      Wer darf fahren?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-10'"
      :for="faqId"
    >
      Wer darf mitfahren?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-11'"
      :for="faqId"
    >
      Wie verhalte ich mich, wenn ich während der Fahrt eine Panne habe?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-12'"
      :for="faqId"
    >
     Wie verhalte ich mich bei einem Unfall?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-13'"
      :for="faqId"
    >
     Was ist, wenn ich eine Verschmutzung verursache?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-14'"
      :for="faqId"
    >
    Was mache ich, wenn sich die Rückgabe des Autos verspätet?
    </label>

     <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-15'"
      :for="faqId"
    >
     Was mache ich, wenn ich meine Buchung stornieren muss? 
    </label>

    <label
      class="faq-question__header"
      v-if="faqQuestion === 'client-question-16'"
      :for="faqId"
    >
    Die Bewertung war unfair - kann ich sie im Nachhinein
        löschen?
    </label>

    <!------------------------------------------------------>
    <section class="faq-answer__holder">
      
        <!------------------------------------------------------------------------->
        <!---------------------/  Owner-Answers-Text  /---------------------------->
        <!------------------------------------------------------------------------->

        <p v-if="faqQuestion === 'owner-question-1'">
          Registriere Dich und Dein Auto, das dauert ungefähr fünf Minuten. Im
          Kalender gibst Du Dein Auto für mögliche Anfragen frei. Sobald eine
          Nachbarin* Dein Auto ausleihen möchte, nimmt sie* Kontakt mit Dir auf
          und reserviert das Auto über den Kalender. Du bestätigst die Buchung
          per Knopfdruck und schlägst ihr* einen Termin vor, um den Erstcheck
          inkl. Vertragsunterzeichnung vorzunehmen.
        </p>
        <p v-if="faqQuestion === 'owner-question-2'">
          Na klar, das empfehlen wir auch absolut! Schau Dir hier unseren
          Mustervertrag an. Du kannst ihn natürlich anpassen.
        </p>
        <p v-if="faqQuestion === 'owner-question-3'">
          Keine! Der Mieter* wird den Wagen in dem Zustand zurückbringen, in dem
          er ihn ausgeliehen hat, mit gleichem Tankstand und im gleichen
          Reinigungszustand. Wir empfehlen zusätzlich eine Kilometerpauschale
          von 15 Cent, um den Verschleiß einzukalkulieren. Bitte bedenke: Du
          sollst als Vermieterin* weder draufzahlen noch Profit machen! Sharing
          is caring.
        </p>
        <p v-if="faqQuestion === 'owner-question-4'">
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
        <p v-if="faqQuestion === 'owner-question-5'">
          Schau nach, ob der Tank nachgefüllt wurde und das Auto in dem Zustand
          ist, in dem Du es abgegeben hast. Achte dabei Kratzer, Beulen,
          Flecken, Krümel.... Und natürlich, dass Du den Schlüssel
          zurückbekommst.
        </p>
        <p v-if="faqQuestion === 'owner-question-6'">
          Kopieren und an einem guten Ort im Auto aufbewahren, z.B. der
          Sonnenblende oder dem Handschuhfach. Ach ja: Informiere bitte den
          Mieter* über den Aufbewahrungsort.
        </p>
        <p v-if="faqQuestion === 'owner-question-7'">
          Na klar! Es ist Dein Auto, Du kannst ohne Nennung von Gründen
          ablehnen.
        </p>
        <p v-if="faqQuestion === 'owner-question-8'">
          Dann muss er* bezahlen, so schnell wie möglich, und ohne Diskussion.
          Wenn ihr euch nicht einig seid, wer den Strafzettel verursacht hat:
          dafür ist der Buchungskalender da. Hier ist die Buchung ja
          verzeichnet.
        </p>

        <p v-if="faqQuestion === 'owner-question-9'">
          Sprich die Mieterin* bei der Rückgabe darauf an und vereinbare einen
          schnellstmöglichen Termin, an dem das Auto von ihr* gereinigt wird.
        </p>
        <p v-if="faqQuestion === 'owner-question-10'">
          Siehe oben. Zur Not tanke selbst und schick dem Mieter* ein Foto von
          der Tankquittung, die er dann nachträglich bezahlt.
        </p>
        <p v-if="faqQuestion === 'owner-question-11'">
          Dann blockiere sie*, so dass sie* Dein Auto nicht mehr anfragen kann.
          Und schreibe die problematischen Punkte in ihre Bewertung - aber bitte
          gemäßigt. Capp ist nicht der Ort für Wutbürger*, sondern für Menschen,
          die sich für eine gute Nachbarschaft und Klimaschutz einsetzen.
        </p>
        <p v-if="faqQuestion === 'owner-question-12'">
          Das machen wir für Dich! Schreibe uns einfach eine Email an
          capp.carsharing@gmail.com, wir kümmern uns darum.
        </p>
        <!------------------------------------------------------------------------------------------>
        <!------------------------------/  Ausleiher-Answers-Text  /-------------------------------->
        <!------------------------------------------------------------------------------------------>

        <p v-if="faqQuestion === 'client-question-1'">
          CAPP basiert auf dem Solidaritätsprinzip- Deine Nachbarn haben ein
          Auto, dass sie gerne der Gemeinschaft zur Verfügung stellen möchten.
          Wenn Du ein Auto benötigst, registrierst Du Dich auf CAPP. Dann kannst
          Du Dir ein Auto aussuchen und auf Knopfdruck buchen. Du trägst dabei
          nur die Fahrtkosten. Du gibst den Wagen so getankt und gereinigt
          zurück, wie Du ihn übernommen hast und bezahlst eine faire
          Verschleißpauschale.
        </p>
        <p v-if="faqQuestion === 'client-question-2'">
          So unkompliziert wie nur möglich! Gib Deine Ausleihdaten im
          Buchungskalender ein und schaue Dich auf unserem Marktplatz um, welche
          Autos verfügbar sind. Wenn ein Auto Deine Vorstellungen trifft, kannst
          Du direkt eine Buchungsanfrage losschicken.
        </p>
        <p v-if="faqQuestion === 'client-question-3'">
          Wir lieben klare Absprachen - mit einem Kalender ist dokumentiert, wer
          wann den Wagen gefahren hat und welche Buchung getätigt wurde. Sehr
          hilfreich bei Strafzetteln und zur Vermeidung von Doppelbuchungen.
        </p>

         <p v-if="faqQuestion === 'client-question-4'">
            Plane vor deiner ersten Fahrt eine halbe Stunde Zeit ein, um die Formalien mit Deinem Nachbarn* zu klären. Hier unterschreibt ihr beide den Vertrag und schaut euch das Auto an. Gibt es schon Beulen oder Kratzer im Lack? Hat das Fahrzeug Besonderheiten wie einen stotternden Fensterheber, eine manuell zu verriegelnde Tür oder ein Radio, das nur manche Sender abspielt? Wo schaltet man den Beifahrerairbag für die Babyschale aus und findet den Erste-Hilfe-Koffer und das Warndreieck? Und wo finde ich die Kopie vom Fahrzeugschein? Ihr checkt gemeinsam den Tankstand und notiert den Kilometerstand. Und dann kann es losgehen! 

          </p>
         <p v-if="faqQuestion === 'client-question-5'">
          Zeig Deiner neuen Carsharing-Partnerin, dass Du gut mit ihrem Auto umgegangen bist. Das Auto sieht genauso sauber aus wie vor deiner Ausleihe und auch der Tank wurde nachgefüllt. Anhand des Kilometerstandes errechnet ihr die Verschleißpauschale, die Du dann direkt bezahlst. Wir empfehlen hier Bezahlsysteme wie z.B. PayPal. <br>So habt ihr direkt einen Beleg über die Zahlung. Ach ja: Schlüsselübergabe nicht vergessen!

          </p>
         <p v-if="faqQuestion === 'client-question-6'">
           Grundsätzlich wird alles im Vertrag und Gespräch geklärt und festgelegt, aber auf vier heikle Punkte gehen wir einmal explizit ein: Kläre unbedingt im Voraus ab, wenn Du : 
           
<ul>
  <li><span></span>im Auto rauchen möchtest</li>
  <li><span></span>Kinder mitfahren</li>
  <li><span></span>Haustiere transportiert werden sollen</li>
  <li><span></span>oder Du mit dem geliehenen Auto ins Ausland fährst</li>
</ul>

  
          </p>


           <p v-if="faqQuestion === 'client-question-7'">
           Zweierlei kann passieren: Die Vermieterin* -oder Du selbst- lässt den Wagen grundreinigen, und zwar auf Deine Kosten. Außerdem kann Dich die Vermieterin* als Mieter* blockieren. Nicht gut fürs Karma, nicht gut für die Nachbarschaft. 
          </p>
           <p v-if="faqQuestion === 'client-question-8'">
           Dann bezahlst, und zwar so schnell wie möglich, und ohne Diskussion. Und informiere unbedingt Deine Vermieterin*.  
            Wenn ihr euch nicht einig seid, wer den Strafzettel verursacht hat: Schaut in den Buchungskalender. Er ist im Zweifel der Beleg für die Fahrt.
          </p>
           <p v-if="faqQuestion === 'client-question-9'">
           Wer darf fahren?
Du! So steht es im Vertrag. Wenn Du jemanden anderen fahren lassen möchtest, kläre das unbedingt mit Deiner Vermieterin* ab.

          </p>

           <p v-if="faqQuestion === 'client-question-10'">
           Du hast im Vorfeld den Zweck der Fahrt und dementsprechend auch die möglichen Mitfahrenden mit dem Vermieter* geklärt.   
          </p>
           <p v-if="faqQuestion === 'client-question-11'">
            Entweder bist du im ADAC oder es wurde auf dem Auto eine Pannenhilfe abgeschlossen. Das habt ihr vor der Fahrt vertraglich festgehalten.
          </p>
           <p v-if="faqQuestion === 'client-question-12'">
          Informiere unbedingt den Vermieter*, um die weiteren Schritte zu klären. 
(nachdem Du alle notwendigen Schritte zur Verkehrssicherung vorgenommen hast). 

          </p>

            <p v-if="faqQuestion === 'client-question-13'">
            Bitte gib das Auto gereinigt zurück. Solltest Du Flecken ins Polster gemacht haben, kann die Vermieterin* eine professionelle Polsterreinigung in Auftrag geben, für die Du aufkommen musst. 

          </p>
            <p v-if="faqQuestion === 'client-question-14'">
             Sobald abzusehen ist, dass Du Dich um mehr als 15 Minuten verspätest, informiere Deinen Vermieter darüber*. Sollte er* deswegen ebenfalls ein Auto mieten müssen, musst Du dafür die Kosten übernehmen.  

          </p>
            <p v-if="faqQuestion === 'client-question-15'">
             Zieh die Buchung unbedingt über den Buchungskalender zurück. Nur so wird der Vermieter* informiert und das Auto wieder für andere Nachbarn* freigegeben. Kosten entstehen Dir keine - CAPP soll nicht wirtschaftlich sein, sondern nur die Umwelt entlasten und die Gesellschaft stärken.  
          </p>
            <p v-if="faqQuestion === 'client-question-16'">
             Das machen wir für Dich! Schreibe uns einfach eine Email an
            capp.carsharing@gmail.com, wir kümmern uns darum.
          </p>
      
    </section>
  </article>
</template>

<script>
export default {
  props: {
    faqQuestion: {
      type: String,
      required: true,
    },
    faqQuestion: {
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
.faq-question{
  width:100%;
  border-bottom: var(--s-brd) solid var(--clr-brd-top);
}

.faq-question label{
  width:90%;
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
  font-size: clamp(0.9rem, 3vw, 1.3rem);
   color: var(--text-light);
   margin-top:.7rem;
   
 
 
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
  right: calc(-11% + 1.5vw);
  translate: 0% -50%;
  clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
  transform-origin: center;
  transition: rotate 0.2s ease-out;
  background: var(--list-default);

}
/*====================== dreieck = Ende==================================*/
.faq-question > .faq-answer__holder > * {
  overflow: hidden;
  width: 100%;
  padding-inline: var(--list-padding);
 
  
  /* box-shadow: inset 0px 3px 5px var(--box-shadow-light); */
}

.faq-answer__holder {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
 margin-top:.7rem;
  padding-inline:0.7rem;
  font-size: clamp(0.9rem, 3vw, 1.3rem);
 line-height: 1.2rem;
   color: var(--text-mid);
  
}
ul{
  padding-top:0.3rem;
  margin-top:0.3rem;
  border-top:1px solid var(--text-light);
}

.faq-list-check:checked ~ .faq-answer__holder {
  display: grid;
  grid-template-rows: 1fr;
  background: var(--clr-sur-d);
  padding-block: 0.8rem 1.3rem;
  font-weight: 400;
    border-radius: 0 0 1.2rem 1.2rem;
    border-bottom: var(--s-brd) solid var(--primary-middle);
}
.faq-list-check:checked ~ .faq-question__header::after {
  background: var(--list-actv);
  rotate: 90deg;
}

.faq-question:has(.faq-list-check:checked){
  border-bottom: var(--s-brd) solid var(--sec-bg);

}


li{
  
  list-style-type: circle;
  margin-left:0.6rem;
  width:90%;
  display: inline-flex;
  align-items: center;
line-height: 1rem;
font-style: italic;
  
}

li > span {
display: block;
border-radius: 100%;;
width:0.3rem;
aspect-ratio: 1;
background: var(--text-mid);
margin-right:0.8rem;

}




/* .faq-question__header:hover {
  background: var(--surface-hover);
  color: var(--main-font-color-dark);
} */
</style>
