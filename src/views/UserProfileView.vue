<template>
  <body v-if="car">
    <main>
      <div class="user-profile__frame" id="user-profile-frame">
        <article class="user-profile__wrapper">
          <span class="user-profile__image-wrapper">
            <span class="image-filter" @click="backToMainPageView"></span>
            <img
              :src="car.img_source"
              :alt="
                car.car_types.brands.brand_name +
                ' ' +
                car.car_types.car_type_name
              "
              :title="
                car.car_types.brands.brand_name +
                ' ' +
                car.car_types.car_type_name
              "
            />
            <!-- Button back to Main page -->
            <label class="user-profile__back-to-main-icon">
              <input
                @click.prevent="backToMainPageView"
                class="user-profile__back-to-main-btn"
                type="button"
                value=""
              />
            </label>
            <!-- End of button back to Main Page -->
          </span>
          <section class="user-profile__information-wrapper">
            <article class="user-profile__image-small">
              <span class="user-profile__image-small__wrapper">
                <img
                  :src="car.img_source"
                  :alt="
                    car.car_types.brands.brand_name +
                    ' ' +
                    car.car_types.car_type_name
                  "
                  :title="
                    car.car_types.brands.brand_name +
                    ' ' +
                    car.car_types.car_type_name
                  "
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
                  <p class="user-info__city-plz">{{ car.users.plz }}</p>
                  <p>/</p>
                  <p class="user-info__city-name">{{ car.users.city }},</p>
                  <p class="user-info__city-disrict">{{ car.users.address }}</p>
                </span>
                <article class="user-info__favorite-choice">
                  <input
                    type="checkbox"
                    name="favorite-star"
                    id="favorite-star"
                  />
                  <label for="favorite-star"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-star"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                      />
                    </svg>
                  </label>
                </article>
              </div>
              <span class="user-info__header"
                ><h2>{{ car.users.username }}</h2>
                <article class="user-info__seat-icons">
                  <SeatIconsFrame :countOfSeats="car.count_of_seats" /></article
              ></span>
            </section>
            <!----------------------------------------------------------------->
            <section class="user-profile__user-icons">
              <article class="user-info__important-icons">
                <section
                  class="car-card__icon-wrapper"
                  style="--svg-width: 2.4rem"
                >
                  <IconType
                    :carType="car.car_types.category"
                    class="icon"
                  ></IconType>
                  <fuelType :fuelType="car.fuel_type" class="icon"></fuelType>
                  <TrunkType
                    :trunkVolumeLiters="car.trunk_volume_in_liters"
                    class="icon"
                  ></TrunkType>
                  <DifferentType
                    :differentType="'Isofix'"
                    class="icon"
                    v-if="car.has_isofix === true"
                  ></DifferentType>
                  <DifferentType
                    :differentType="'Nicht-Raucher'"
                    class="icon"
                    v-if="car.is_smoker === false"
                  >
                  </DifferentType>
                  <DifferentType :differentType="'Tiere'" class="icon">
                  </DifferentType>
                </section>
              </article>
            </section>
            <!----------------------------------------------------------------->
            <section class="user-profile__equipment-wrapper">
              <CarItemsMenue
                :featureItems="car.cars_features"
                :brandName="car.car_types.brands.brand_name"
                :carModel="car.car_types.car_type_name"
                :licensePlate="car.car_license_plate"
                :fuelConsumePerKm="car.fuel_consume_per_km"
                :gear="car.gear"
                :insurance="car.insurance_type"
                :insuranceNumber="car.insurance_no"
                :kwValue="car.kw"
                :maxSpeed="car.max_speed"
                :yearOfConstruction="car.year_of_construction"
                :mileageValue="car.mileage"
                :trunkVolume="car.trunk_volume_in_liters"
                :userName="car.users.username"
              />
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
              Waren sie mit <span>{{ car.users.username }}</span> zufrieden ?
            </label>
          </section>
          <AverageRating></AverageRating>
          <section class="customer-wrapper">
            <CustomerReviews
              v-for="reviewer in reviewers"
              :key="reviewer.id"
              :imgSource="reviewer.userImg"
              :userName="reviewer.username"
              :firstName="reviewer.firstname"
              :lastName="reviewer.lastname"
              :userMsg="reviewer.msgText"
            ></CustomerReviews>
            <hr />
            <CustomerReviews
              v-for="review in reviews"
              :key="review.id"
              :imgSource="review.users.img_source"
              :userName="review.users.username"
              :firstName="review.users.firstname"
              :lastName="review.users.lastname"
              :userMsg="review.booking_msg"
            ></CustomerReviews>
            <!--
            <CustomerReviews
              :imgSource="car.img_source"
              :userName="car.users.username"
              :brandName="car.car_types.brands.brand_name"
              :carTypeName="car.car_types.car_type_name"
            ></CustomerReviews>
            <CustomerReviews
              :imgSource="car.img_source"
              :userName="car.users.username"
              :brandName="car.car_types.brands.brand_name"
              :carTypeName="car.car_types.car_type_name"
            ></CustomerReviews>
            <CustomerReviews
              :imgSource="car.img_source"
              :userName="car.users.username"
              :brandName="car.car_types.brands.brand_name"
              :carTypeName="car.car_types.car_type_name"
            ></CustomerReviews>
            <CustomerReviews
              :imgSource="car.img_source"
              :userName="car.users.username"
              :brandName="car.car_types.brands.brand_name"
              :carTypeName="car.car_types.car_type_name"
            ></CustomerReviews>
            <CustomerReviews
              :imgSource="car.img_source"
              :userName="car.users.username"
              :brandName="car.car_types.brands.brand_name"
              :carTypeName="car.car_types.car_type_name"
            ></CustomerReviews>
            <CustomerReviews
              :imgSource="car.img_source"
              :userName="car.users.username"
              :brandName="car.car_types.brands.brand_name"
              :carTypeName="car.car_types.car_type_name"
            ></CustomerReviews>
            -->
          </section>
        </article>
      </div>
      <BookingExpandCard></BookingExpandCard>
      <BookingCalendarExpandCard></BookingCalendarExpandCard>
    </main>
  </body>
  <div v-else>
    <h1>Loading Car Nr. {{ carID }}</h1>
  </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient";
import RatingBar from "@/components/messenger/RatingBar.vue";
import AverageRating from "@/components/messenger/AverageRating.vue";
import CustomerReviews from "@/components/messenger/CustomerReviews.vue";
import IconType from "@/components/icon-type/IconType.vue";
import fuelType from "@/components/icon-type/fuelType.vue";
import TrunkType from "@/components/icon-type/TrunkType.vue";
import DifferentType from "@/components/icon-type/DifferentTypes.vue";
import SeatIconsFrame from "@/components/icon-type/SeatIcons.vue";
import CarItemsMenue from "@/components/main-component/CarOwnerAccordion.vue";
import InputText from "@/components/input-elements/InputText.vue";

import BookingCalendarExpandCard from "@/components/main-component/expand-site-cards/BookingCalendarExpandCard.vue";
import BookingExpandCard from "@/components/main-component/expand-site-cards/BookingExpandCard.vue";
import { useGlobalStateStore } from "@/stores/useGlobalStateStore";
import { useAuthenticationStore } from "@/stores/useAuthenticationStore";

export default {
  data() {
    return {
      carID: this.$route.params.id,
      car: null,
      store: null,
      reviews: null,
      reviewers: [
        {
          id: 1,
          username: "brandMatthes95",
          firstname: "Matthias",
          lastname: "Brandmüller",
          userImg:
            "https://images.pexels.com/photos/8178093/pexels-photo-8178093.jpeg?auto=compress&cs=tinysrgb&w=1600",
          msgText:
            "Brauchbarer fahrbarer Untersatz - praktisch, quadratisch, gut.",
        },
        {
          id: 7,
          username: "claudi66",
          firstname: "Claudia",
          lastname: "Nierenhofer",
          userImg:
            "https://images.pexels.com/photos/11431783/pexels-photo-11431783.jpeg?auto=compress&cs=tinysrgb&w=1600",
          msgText: "Hat mich sicher und reibungslos von A nach B gebracht.",
        },
        {
          id: 14,
          username: "Bernd das Brot",
          firstname: "Bernd",
          lastname: "Brothage",
          userImg:
            "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600",
          msgText: "Insgesamt sehr gutes Auto. Durchaus empfehlenswert.",
        },
        {
          id: 20,
          username: "Walksky",
          firstname: "Luke",
          lastname: "Skywalker",
          userImg:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
          msgText:
            "Insgesamt durchweg zufrieden. Nur die Türen sind etwas schwergängig.",
        },
        {
          id: 56,
          username: "martin",
          firstname: "Martin",
          lastname: "Bullerjahn",
          userImg:
            "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=600",
          msgText: "Fast perfekt für mich - fehlt nur noch der Isofix.",
        },
      ],
    };
  },
  components: {
    RatingBar,
    AverageRating,
    CustomerReviews,
    IconType,
    fuelType,
    TrunkType,
    DifferentType,
    SeatIconsFrame,
    CarItemsMenue,
    InputText,
    BookingCalendarExpandCard,
    BookingExpandCard,
  },
  setup() {
    // Initialize the store at the begining
    const globalStateStore = useGlobalStateStore();
    const authenticationStore = useAuthenticationStore();
    return { globalStateStore, authenticationStore };
  },
  created() {
    const emptySession = this.checkForEmptyObject(
      this.authenticationStore.session
    );
    if (emptySession) {
      this.getSessionInfos();
    }
  },
  mounted() {
    this.getCar();
    this.globalStateStore.saveCurrentCarId(this.carID);
    this.getReviews();
  },
  methods: {
    backToMainPageView() {
      this.$router.push({
        name: "mainView",
      });
    },
    getSessionInfos() {
      this.authenticationStore.getSession();
      this.authenticationStore.onAuthStateChange();
    },
    checkForEmptyObject(objectName) {
      return (
        objectName &&
        Object.keys(objectName).length === 0 &&
        objectName.constructor === Object
      );
    },
    async getCar() {
      const { data } = await supabase
        .from("cars")
        .select(
          `*, users ( id, username, firstname, lastname, address, zipcode, city ),
          car_types ( id, car_type_name, category, brand_id, brands ( id, brand_name ) ),
          cars_features ( id, car_id, feature_id, features ( id, feature_name ) )`
        )
        .eq("id", this.carID);
      this.car = data[0];
    },
    async getReviews() {
      const { data } = await supabase
        .from("routes")
        .select(`*, users(id, username, firstname, lastname, img_source)`)
        .eq("car_id", this.carID);
      this.reviews = data;
      console.log(this.reviews);
    },
  },
};
</script>

<style scoped>
body {
  background: lightgray;
  width: 100vw;
  height: 100vh;
}

main,
.user-profile__frame,
.user-profile__wrapper {
  width: 100%;
  height: 100%;
}

.user-profile__frame {
  position: fixed;
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
  display: block;
  width: 100%;
  height: 30%;
  inset: 0;
  z-index: 1;
  background: var(--img-sh-filter, rgba(255, 255, 255, 0.2));
  backdrop-filter: blur(6px);
}
.user-profile__image-wrapper > img,
.user-profile__image-small__wrapper > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.user-profile__information-wrapper {
  background: var(--clr-sur-d);
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 79vh;
  padding-inline: var(--padding-default);
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
}
/*==================Profilbild-Klein-===============================*/
.user-profile__image-small {
  display: grid;
  place-items: center;
  width: 10rem;
  aspect-ratio: 1;
  margin-inline: auto;
  margin-top: -7rem;
  border-radius: 100%;
  background: var(--clr-sur-d);
}
.user-profile__image-small__wrapper {
  overflow: hidden;
  display: block;
  width: 95%;
  border: calc(var(--l-brd) * 2) solid var(--clr-prime-d);
  aspect-ratio: 1;
  border-radius: inherit;
}
/*========================================================*/
/*========================================================*/
/*==================User Profil===============================*/
/*--------------User info------------------------*/
.user-profile__user-info {
  width: 100%;
  height: auto;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--clr-brd-top);
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
  justify-content: space-between;
  margin-top: -0.3rem;
}

.user-info__plz-icon {
  width: 1.5rem;
  aspect-ratio: 1;
  margin-right: 0.2rem;
  display: grid;
  place-items: center;
}
.user-info__plz-icon svg {
  fill: var(--clr-plz);
}
.user-info__plz-icon ~ p {
  color: var(--clr-plz);
  font-size: 0.8rem;
  margin-inline: 0.1rem;
}
.user-info__favorite-choice {
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
  display: block;
  margin-top: -3rem;
  outline: var(--s-brd) solid var(--clr-like-def);
  outline-offset: 3px;
}

.user-info__favorite-choice svg {
  width: 100%;

  aspect-ratio: 1;
  fill: var(--clr-like-def);
}

#favorite-star {
  all: unset;
}
#favorite-star + label {
  display: block;
  width: 2.5rem;
  aspect-ratio: 1;
  border-radius: 100%;
}
.user-info__favorite-choice:has(#favorite-star:checked) {
  outline-color: var(--clr-like-act);
}
#favorite-star:checked + label svg {
  fill: var(--clr-like-act);
}

/*===================Header===================================*/
.user-info__header {
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-info__header > h2 {
  font-size: var(--m-font);
  color: var(--clr-font-commentar);
  font-weight: 400;
  font-style: normal;
}
/*--------------User Icons------------------------*/
.user-profile__user-icons {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: calc(var(--margin-default) / 2);
}

.car-card__icon-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--clr-brd-top);
  padding-block: 0.8rem;
  width: 100%;
}
/*=============================*/
.user-profile__equipment-wrapper {
  overflow: scroll;
  height: 40vh;
}
.user-profile__equipment-wrapper::-webkit-scrollbar {
  appearance: none;
  width: 0;
}
/*===================================================*/
/*===============  Commentar Section====================*/
/*===================================================*/

.user-profile__commentar-wrapper {
  position: absolute;
  z-index: 8;
  display: block;
  bottom: 0px;
  background: var(--clr-sur-d);
  height: 9rem;
  width: 100%;
  border-radius: var(--m-brd-rad) var(--m-brd-rad) 0 0;
  translate: 0px 0px;
  box-shadow: 0px -5px 20px var(--clr-shadow-top, rgba(148, 148, 148, 0.4));
  border-top: 1px solid var(--clr-brd-top);
  transition: height 0.2s ease-out;
  color: var(--clr-font-commentar);
}

.commentar-section__wrapper-head {
  display: block;
  height: 5.5rem;
  border-radius: inherit;
  border-bottom: 1px solid var(--clr-brd-top);
  width: 90%;
  margin-inline: auto;
  padding-top: 1.5rem;
  margin-top: calc(var(--s-font) / 2);
}

.commentar-section__btn {
  display: none;
}
.commentar-section__btn ~ label,
.commentar-section__rating-bar {
  display: block;
  text-align: center;
  font-size: var(--s-font);
  font-weight: 500;
  padding-bottom: 0.5rem;
}
.commentar-section__btn ~ label span {
  color: var(--clr-prime-d);
  font-weight: 700;
}
.commentar-section__btn + label::after {
  content: "";
  position: absolute;
  display: block;
  top: 8px;
  left: 50%;
  translate: -50% 0;
  width: 5rem;
  height: 0.4rem;
  border-radius: var(--s-brd-rad);
  background: var(--clr-like-def);
}

.user-profile__commentar-wrapper:has(#commentar-section-check:checked) {
  height: 70%;
}

.customer-wrapper {
  margin-top: 1rem;
  overflow: scroll;
  height: 50vh;
}
.customer-wrapper::-webkit-scrollbar {
  appearance: none;
  width: 0;
}

.user-profile__back-to-main-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  opacity: 0.8;
  background: var(--clr-sur-d);
  z-index: 10;
}

/* ==== Back to MainPageView Icon */
.user-profile__back-to-main-icon::after,
.user-profile__back-to-main-icon::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 0.3rem;
  height: 2rem;
  background: var(--main-font-color-dark);
  border-radius: 1rem;
  transform: rotate(45deg);
}
.user-profile__back-to-main-icon::after {
  transform: rotate(315deg);
}

.user-profile__back-to-main-icon:active {
  scale: 1.1;
}

.user-profile__back-to-main-btn {
  position: absolute;
  all: unset;
  top: -99999px;
}
/* ==== End of back to MainPageView Icon */

/*======Media Queries================================*/
@media screen and (min-width: 1000px) {
  .user-profile__frame {
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
}
</style>
