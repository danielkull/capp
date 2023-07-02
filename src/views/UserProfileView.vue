<template>
  <body>
    <main>
      <div class="user-profile__frame" id="user-profile-frame">
        <article class="user-profile__wrapper">
          <span class="user-profile__image-wrapper">
            <span class="image-filter"></span>
            <img
              src="https://ais-cf.tvnow.de/tvnow/movie/5429467/1800x0/folge-vom-23042023.jpg"
              alt="Das Auto des Users"
            />
          </span>
          <section class="user-profile__information-wrapper">
            <article class="user-profile__image-small">
              <span class="user-profile__image-small__wrapper">
                <img
                  src="https://ais-cf.tvnow.de/tvnow/movie/5429467/1800x0/folge-vom-23042023.jpg"
                  alt="Das Auto des Users"
                />
              </span>
            </article>
            <!----------------------------------------------------------------->
            <section class="user-profile__user-info">
              <div class="user-info__wrapper">
                <span class="user-info__city">
                  <span class="user-info__plz-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                      />
                    </svg>
                  </span>
                  <p class="user-info__city-plz">01097</p>
                  <p>/</p>
                  <p class="user-info__city-name">Dresden,</p>
                  <p class="user-info__city-disrict">Neustadt</p>
                </span>
                <article class="user-info__favorite-choice">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                    />
                  </svg>
                </article>
              </div>
              <span class="user-info__name"><h2>Username</h2></span>
            </section>
            <!----------------------------------------------------------------->
            <section class="user-profile__user-icons">
              <article class="user-info__important-icons">
                <div class="user-info-icon-wrapper car-type">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-car-front-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"
                    />
                  </svg>
                </div>
                <div class="user-info-icon-wrapper car-fuel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-fuel-pump-diesel-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M4.974 9.806h.692c.306 0 .556.063.75.19.198.127.343.317.437.568.096.252.144.565.144.941 0 .284-.027.53-.083.74-.053.21-.133.386-.241.528a.986.986 0 0 1-.412.315 1.575 1.575 0 0 1-.595.103h-.692V9.806Z"
                    />
                    <path
                      d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V2Zm2 .5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5ZM4 9v5h1.796c.496 0 .906-.099 1.23-.297.327-.197.571-.484.732-.86.161-.377.242-.828.242-1.356 0-.525-.08-.973-.242-1.344a1.775 1.775 0 0 0-.725-.85C6.71 9.098 6.296 9 5.796 9H4Z"
                    />
                  </svg>
                </div>
                <div class="user-info-icon-wrapper car-mechanic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-gear-wide"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"
                    />
                  </svg>
                </div>
              </article>
              <article class="user-info__seat-icons">
                <div class="user-info-icon-wrapper car-seat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-balloon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
                    />
                  </svg>
                </div>
                <div class="user-info-icon-wrapper car-seat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-balloon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
                    />
                  </svg>
                </div>
                <div class="user-info-icon-wrapper car-seat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-balloon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
                    />
                  </svg>
                </div>
                <div class="user-info-icon-wrapper car-seat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-balloon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
                    />
                  </svg>
                </div>
                <div class="user-info-icon-wrapper car-seat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-balloon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
                    />
                  </svg>
                </div>
                <div class="user-info-icon-wrapper car-seat">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-balloon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z"
                    />
                  </svg>
                </div>
              </article>
            </section>
            <!----------------------------------------------------------------->
            <section class="user-profile__equipment-wrapper">
              <h2>Ausstattung</h2>
              <ul class="user-profile__equipment-itemlist">
                <li class="user-profile__equi-item">Lorems</li>
                <li class="user-profile__equi-item">Loremswdt4t</li>
                <li class="user-profile__equi-item">Loremswf</li>
                <li class="user-profile__equi-item">Loremswf</li>
                <li class="user-profile__equi-item">Lortehthtemswf</li>
                <li class="user-profile__equi-item">Loreeeeemswf</li>
                <li class="user-profile__equi-item">Loreeeeemswf</li>
                <li class="user-profile__equi-item">eeee</li>
                <li class="user-profile__equi-item">Loreeeewf</li>
                <li class="user-profile__equi-item">Loreewf</li>
                <li class="user-profile__equi-item">Loreewf</li>
                <li class="user-profile__equi-item">Loreeeewfewrrzwer</li>
              </ul>
            </section>
          </section>
        </article>

        <article class="user-profile__commentar-wrapper">
          <section class="commentar-section__wrapper-head">
            <input
              type="checkbox"
              name="commentar-check"
              id="commentar-section-check"
              class="commentar-section__btn"
            />
            <label for="commentar-section-check">
              Waren sie mit <span>USERNAME</span> zufrieden ?
            </label>
            <section class="commentar-section__rating-bar">
              <RatingBar :ratingGroup="'userChoice'"></RatingBar>
            </section>
          </section>
          <AverageRating></AverageRating>
          <CustomerReviews></CustomerReviews>
          <CustomerReviews></CustomerReviews>
          <CustomerReviews></CustomerReviews>
        </article>
      </div>
    </main>
    <nav class="nav-bar__wrapper">
      <button class="nav-bar__profil-btn" id="nav-profil-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-person-square"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
          />
        </svg>
      </button>
    </nav>
  </body>
</template>

<script>
import RatingBar from "@/components/messenger/RatingBar.vue";
import AverageRating from "@/components/messenger/AverageRating.vue";
import CustomerReviews from "@/components/messenger/CustomerReviews.vue";

export default {
  components: { RatingBar, AverageRating, CustomerReviews },
};
// const profilBtn = document.querySelector("#nav-profil-btn");
// const userProfil = document.querySelector("#user-profile-frame");

// profilBtn.addEventListener("click", openProfilCard);
// function openProfilCard() {
//   console.log("klick");
// }
</script>

<style scoped>
body {
  background: lightgray;
  width: 100vw;
  height: 100vh;
}
main {
  width: 100%;
  height: 100%;
}
.user-profile__frame {
  width: 100%;
  height: 100%;
}

.user-profile__wrapper {
  background: dodgerblue;
  height: 100%;
  width: 100%;
}
/*========================================================*/
/*==================Profilbild-BG===============================*/
/*========================================================*/
.user-profile__image-wrapper {
  display: block;
  width: 100%;
  height: 30%;
}
.image-filter {
  position: absolute;
  top: 18px;
  left: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  display: block;
  width: 100%;
  height: 30%;
}
.user-profile__image-wrapper > img,
.user-profile__image-small__wrapper > img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-origin: border-box;
  position: relative;
}
.user-profile__information-wrapper {
  background: var(--light-bg);
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 79vh;
  padding-inline: 1rem;
  border-radius: 2rem 2rem 0 0;
}
/*==================Profilbild-Klein-===============================*/
.user-profile__image-small {
  display: block;
  width: 10rem;
  margin-inline: auto;
  margin-top: -7rem;
  aspect-ratio: 1;
  border-radius: 100%;
  background: var(--light-bg);
  display: grid;
  place-items: center;
}
.user-profile__image-small__wrapper {
  overflow: hidden;
  display: block;
  width: 95%;
  border: 6px solid var(--primary-dark);
  aspect-ratio: 1;
  border-radius: 100%;
}
/*========================================================*/
/*==================Profilbilder-Ende===============================*/
/*========================================================*/
/*==================User Profil===============================*/
/*--------------User info------------------------*/
.user-profile__user-info {
  width: 100%;
  height: auto;
  padding-bottom: 0.5rem;

  border-bottom: 1px solid var(--user-border);
  margin-inline: auto;
}
.user-info__wrapper,
.user-info__city {
  display: flex;
  align-items: center;
}

.user-info__wrapper {
  width: 100%;
  height: 2rem;
  /* padding-inline: 1rem; */
  justify-content: space-between;
  margin-top: -0.5rem;
}

.user-info__plz-icon {
  width: 1.5rem;
  aspect-ratio: 1;
  margin-right: 0.2rem;
  display: grid;
  place-items: center;
}
.user-info__plz-icon svg {
  fill: var(--primary-dark);
}
.user-info__plz-icon ~ p {
  color: var(--primary-dark);
  font-size: 0.8rem;
  margin-inline: 0.1rem;
}
.user-info__favorite-choice {
  width: 2.5rem;
  aspect-ratio: 1;
  border: 1px solid var(--accent-color);
  border-radius: 100%;
  display: grid;
  place-items: center;
}

.user-info__favorite-choice svg {
  width: 70%;
  aspect-ratio: 1;
  fill: var(--accent-color);
}
.user-info__name {
  width: 100%;
  text-align: center;
}
.user-info__name h2 {
  font-size: 2rem;
  font-family: monospace;
}
/*--------------User Icons------------------------*/
.user-profile__user-icons {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--user-border);
  margin-bottom: calc(var(--margin-default) / 2);
}

.user-info-icon-wrapper {
  display: grid;
  place-items: center;
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  margin-block: calc(var(--margin-default) / 2);
  margin-right: 0.2rem;
  background: var(--car-icon-bg);
}
.user-info__important-icons,
.user-info__seat-icons {
  display: flex;
  align-items: center;
}
.user-info__important-icons svg {
  width: 100%;
  padding: calc(var(--padding-default) / 2);
  aspect-ratio: 1;
  fill: var(--car-icon-img);
}
.car-seat {
  width: 1.5rem;
  border-radius: 0;
  margin-right: 0.1rem;
  background: none;
}

.user-info__seat-icons svg {
  fill: var(--seat-false);
  width: 100%;
}
/*--------------User Ausstattung------------------------*/
.user-profile__equipment-wrapper {
  text-align: center;
  border-bottom: 1px solid var(--user-border);
}
.user-profile__equipment-wrapper h2 {
  width: 100%;
  font-size: var(--m-font);
  color: var(--font-color-light);
}

.user-profile__equipment-itemlist {
  /* background: blue; */
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: calc(var(--margin-default) / 2);
}
.user-profile__equi-item {
  background: var(--user-border);
  padding-inline: 0.5rem;
  padding-block: 0.3rem;
  margin: 0.1rem;
  border-radius: 0.5rem;
}
/*===================================================*/
/*===============  Commentar Section====================*/
/*===================================================*/

.user-profile__commentar-wrapper {
  position: absolute;
  z-index: 8;
  display: block;
  bottom: 0px;
  background: var(--light-bg);
  height: 10rem;
  width: 100%;
  border-radius: 2rem 2rem 0 0;
  translate: 0px 0px;
  box-shadow: 0px -5px 20px rgba(148, 148, 148, 0.4);
  transition: height 0.2s ease-out;
}

.commentar-section__wrapper-head {
  display: block;
  height: 5.5rem;
  border-radius: inherit;
  border-bottom: 1px solid var(--user-border);
  width: 90%;
  margin-inline: auto;
  padding-top: 1.5rem;
}

.commentar-section__btn {
  display: none;
}
.commentar-section__btn ~ label,
.commentar-section__rating-bar {
  /* background: rgba(0, 0, 0, 0.6); */
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
}
.commentar-section__btn ~ label span {
  color: var(--primary-dark);
}
label::after {
  content: "";
  position: absolute;
  display: block;
  top: 8px;
  left: 50%;
  translate: -50% 0;
  width: 5rem;
  height: 0.4rem;
  border-radius: 1rem;
  background: var(--secondary-default);
}

.user-profile__commentar-wrapper:has(#commentar-section-check:checked) {
  height: 30rem;
}

/*============nav-bar=====================*/
.nav-bar__wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: linear-gradient(to top, var(--primary-dark), var(--primary-mid));
  border-radius: 1.2rem 1.2rem 0 0;
  padding-inline: 1rem;
}
.nav-bar__profil-btn {
  all: unset;
  padding: 0.3rem;

  display: grid;
  place-content: center;
}
.nav-bar__profil-btn svg {
  width: 2rem;
  height: 2rem;
  fill: var(--nav-icon);
}

.nav-bar__profil-btn:active svg {
  fill: var(--nav-icon-act);
}
/*======Media Queries================================*/
@media screen and (min-width: 1000px) {
  .user-profile__frame {
    /* background: blue; */
    width: 39.5%;
    height: 100%;
    overflow: hidden;
    border-radius: 0rem 2rem 2rem 0;
  }
  .image-filter {
    width: 40%;
    border-radius: 0rem 2rem 2rem 0;
  }

  .user-profile__wrapper,
  .user-profile__information-wrapper {
    width: 40.1%;
    background: var(--light-bg);
  }
  .user-profile__image-wrapper img {
    width: 40vw;
    height: 100%;
  }
  .nav-bar__wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 4rem;
    height: 100%;
    background: linear-gradient(
      to top,
      var(--primary-dark),
      var(--primary-mid)
    );
    border-radius: 0rem 1.2rem 1.2rem 0;
    padding-inline: 1rem;
    padding-block: 2rem;
  }
}
</style>
