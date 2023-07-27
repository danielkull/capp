<template>
  <!------------------------------------------------------------------------->

  <article class="content-wrapper">
    <section
      v-if="contentText === 'impressum-content'"
      class="impressum-content__holder"
      aria-name="Impressum-Capp"
    >
      <h2>Impressum der Carsharing-App CAPP</h2>

      <dl>
        <dt>Verantwortlich für den Inhalt:</dt>
        <dd>CAPP Carsharing Musterstraße 123 12345 Musterstadt Deutschland</dd>
      </dl>

      <dl>
        <dt>Vertreten durch:</dt>
        <dd>Kirsten Anders</dd>
        <dd>Stefan Hiob</dd>
        <dd>Daniel Kull</dd>
        <dd>Kerstin Merk</dd>
      </dl>
      <dl>
        <dt>Kontakt:</dt>
        <dd>
          Tel.Nr.:
          <a
            href="tel: +49 123 456789
"
          >
            +49 123 456789
          </a>
        </dd>
        <dd>
          E-Mail:
          <a href="mailto: capp.carsharing@gmail.com"
            >capp.carsharing@gmail.com</a
          >
        </dd>
      </dl>
      <dl>
        <dt>Registereintrag:</dt>
        <dd>Registergericht: Amtsgericht Musterstadt</dd>
        <dd>Registernummer: HRB 12345</dd>
      </dl>

      <dl>
        <dt>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        </dt>
        <dd>DE 123456789</dd>
      </dl>

      <dl>
        <dt>Haftungshinweis:</dt>
        <dd>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </dd>
      </dl>
      <dl>
        <dt>Urheberrechtshinweis:</dt>
        <dd>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser
          Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </dd>
      </dl>
      <dl>
        <dt>Hinweis zum Datenschutz:</dt>
        <dd>
          Informationen zum Datenschutz finden Sie in unserer
          Datenschutzerklärung.
        </dd>
      </dl>

      <p>
        Wir behalten uns das Recht vor, das Impressum jederzeit zu ändern. Es
        gilt das Impressum zum Zeitpunkt der Nutzung unserer App.
      </p>

      <!-------------------------------------------------->
    </section>
    <section
      v-if="contentText === 'data-security-content'"
      class="impressum-content__holder"
      aria-name="Datenschutz-Capp"
    >
      <h2>Datenschutzvereinbarung für die Carsharing-App CAPP</h2>
      <p>
        Vielen Dank, dass Sie sich für CAPP interessieren. <br />Der Schutz
        Ihrer Daten hat für uns höchste Priorität. In dieser
        Datenschutzvereinbarung möchten wir Ihnen transparent darlegen, wie wir
        Ihre persönlichen Daten erfassen, verwenden, speichern und schützen.
        <br /><br />
        Bitte lesen Sie diese Vereinbarung sorgfältig durch, bevor Sie unsere
        App nutzen.
      </p>

      <dl>
        <dt>1. Datenerfassung</dt>
        <dd>
          1.1. Personenbezogene Daten: Um unsere Carsharing-Dienste
          bereitzustellen, erfassen wir möglicherweise personenbezogene Daten
          von Ihnen. Dies können Informationen wie Ihr Name, Ihre
          Kontaktangaben, Ihr Profilbild und Fahrzeugpräferenzen sein. Die
          Erfassung dieser Daten erfolgt nur mit Ihrer ausdrücklichen
          Zustimmung.
        </dd>
        <dd>
          1.2. Standortdaten: Um die Fahrzeugstandorte in Echtzeit anzeigen zu
          können, benötigen wir Zugriff auf Ihren Standort. Diese Standortdaten
          werden nur während der Nutzung der App erfasst und in keiner Weise
          dauerhaft gespeichert oder für andere Zwecke verwendet.
        </dd>
        <dd>
          1.3. Fahrzeugdaten: Bei der Nutzung der Carsharing-Funktionen können
          Informationen über den Zustand des Fahrzeugs erfasst werden, z. B.
          Kilometerstand, Kraftstoffstand oder Schadensberichte. Diese Daten
          werden lediglich zur effizienten Verwaltung des Carsharing-Dienstes
          verwendet.
        </dd>
      </dl>

      <dl>
        <dt>2. Datennutzung</dt>
        <dd>
          2.1. App-Funktionen: Die erfassten Daten dienen ausschließlich zur
          Bereitstellung und Verbesserung unserer Carsharing-Dienste. Sie werden
          nicht an Dritte weitergegeben oder für andere Zwecke verwendet, es sei
          denn, Sie geben Ihre ausdrückliche Zustimmung dazu
        </dd>
        <dd>
          2.2. Kommunikation: Wir können Ihre Kontaktangaben nutzen, um Ihnen
          relevante Informationen, Updates und Benachrichtigungen über die App
          und den Carsharing-Dienst zuzusenden. Sie haben jederzeit die
          Möglichkeit, sich von diesen Mitteilungen abzumelden.
        </dd>
        <dd>
          2.3. Anonymisierte Daten: Wir können aggregierte und anonymisierte
          Daten analysieren, um Einblicke in die Nutzung unserer App und die
          Optimierung unserer Dienstleistungen zu gewinnen. Diese Daten
          enthalten keinerlei persönlich identifizierbare Informationen.
        </dd>
      </dl>

      <dl>
        <dt>3. Datenspeicherung und -schutz</dt>
        <dd>
          3.1. Speicherung: Ihre Daten werden auf sicheren Servern gespeichert,
          die den gängigen Industriestandards entsprechen. Wir bemühen uns,
          angemessene Maßnahmen zum Schutz Ihrer Daten zu ergreifen.
        </dd>
        <dd>
          3.2. Datenübertragung: Bei der Übertragung Ihrer Daten zwischen der
          App und unseren Servern verwenden wir Verschlüsselungstechnologien, um
          die Vertraulichkeit und Integrität Ihrer Informationen zu
          gewährleisten.
        </dd>
        <dd>
          3.3. Datenlöschung: Ihre Daten werden nur so lange gespeichert, wie es
          für die Bereitstellung unserer Dienstleistungen erforderlich ist, es
          sei denn, gesetzliche Bestimmungen verlangen eine längere Speicherung.
          Sie haben das Recht, die Löschung Ihrer Daten zu beantragen, wenn
          diese nicht mehr benötigt werden.
        </dd>
      </dl>
      <dl>
        <dt>4. Rechte der Nutzer</dt>
        <dd>
          4.1. Zugriffs- und Änderungsrechte: Sie haben das Recht, auf Ihre
          personenbezogenen Daten zuzugreifen und diese zu korrigieren. Sie
          können Ihre Daten in den App-Einstellungen verwalten oder uns
          kontaktieren, um entsprechende Anfragen zu stellen.
        </dd>
        <dd>
          4.2. Widerspruchsrecht: Sie können der Verwendung Ihrer Daten für
          bestimmte Zwecke widersprechen, insbesondere für Marketingzwecke. Dies
          hat jedoch möglicherweise Auswirkungen auf die Verfügbarkeit und
          Funktionalität der App.
        </dd>
      </dl>
      <dl>
        <dt>5. Änderungen der Datenschutzvereinbarung</dt>
        <dd>
          Wir behalten uns das Recht vor, diese Datenschutzvereinbarung von Zeit
          zu Zeit zu ändern. Aktualisierungen werden Ihnen über die App oder
          andere geeignete Kanäle mitgeteilt. Bitte überprüfen Sie regelmäßig
          die aktuellen Bedingungen.
        </dd>
        <dd>
          Wenn Sie unsere privat programmierte Carsharing-App nutzen, stimmen
          Sie den Bestimmungen dieser Datenschutzvereinbarung zu. Wenn Sie
          Fragen oder Bedenken haben, können Sie sich jederzeit an uns wenden.
          Vielen Dank für Ihr Vertrauen!
        </dd>
      </dl>
    </section>
    <!---------------------------------------------------------------------------------------------->
    <section
      v-if="contentText === 'user-use-content'"
      class="impressum-content__holder"
      aria-name="Nutzungsbedingungen-Capp"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem
        assumenda vitae minima asperiores tenetur. Eius deleniti laboriosam ad,
        architecto blanditiis consectetur in repellat magni praesentium quas,
        possimus magnam facilis! Nostrum vero fuga, sunt sapiente eos doloremque
        numquam accusantium beatae ipsum mollitia? Ab assumenda, itaque unde
        quibusdam similique iure quasi quas quidem nihil exercitationem non
        placeat ut id alias earum! Minima exercitationem quaerat tempora magni
        fuga quibusdam sed, totam eaque voluptate suscipit. Minima voluptates
        incidunt ipsum nemo numquam veritatis, necessitatibus eius id eligendi
        impedit. Adipisci alias ratione incidunt quia cumque? Est officia quas
        iste libero hic qui consequatur distinctio perspiciatis, fugiat ducimus
        nobis architecto repudiandae unde voluptatem quos molestias excepturi
        sint voluptatibus quo officiis eum quod enim, aut veritatis. Quaerat!
        Cumque totam eligendi est voluptatibus, consectetur quaerat ratione!
        Suscipit doloribus accusamus ut, non officia, consectetur sequi tempore
        possimus assumenda quas amet natus neque eos cupiditate aut, voluptas
        sunt labore mollitia.
      </p>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    contentText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/*===Basic dd-dl style  ====*/

section :is(dt, h2) {
  font-weight: 600;
  font-size: clamp(1rem, 3vw, 1.4rem);
  border-bottom: var(--s-brd) solid var(--clr-brd-top);
  margin-block: 0.8rem;
  padding-block: 0.3rem;
}
section :is(dd) {
  margin-bottom: 0.8rem;
}
section :is(a) {
  color: var(--primary-middle);
  text-decoration: none;
  padding-left: 0.5rem;
}

.content-wrapper {
  width: 100%;
}

.content-wrapper label {
  width: 90%;
}
.content-wrapper__header,
.content-wrapper__header::after {
  cursor: pointer;
}

.content-wrapper__header {
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
  margin-top: 0.7rem;
}

/*====================== dreieck ===================================*/
.content-wrapper__header::after {
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

.impressum-content__holder {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
  margin-top: 0.7rem;
  padding-inline: 0.7rem;
  font-size: clamp(0.9rem, 3vw, 1.3rem);
  line-height: 1.2rem;
  color: var(--text-mid);
}
</style>
