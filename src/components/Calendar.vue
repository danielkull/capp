<template>
  <div class="container">
    <div class="calendar">
      <!-- Calendar Header -->
      <div class="calendar-header">
        <div class="day-picker" id="day-picker">
          <span class="day-change" id="pre-day" @click="dateDown()">
            <pre>&lt;</pre>
          </span>
          <span id="day">{{ currentDate.date }}</span>
          <span class="day-change" id="next-day" @click="dateUp()">
            <pre>&gt;</pre>
          </span>
        </div>
        <div class="month-picker" id="month-picker">
          <span class="month-change" id="pre-month" @click="monthDown()">
            <pre>&lt;</pre>
          </span>
          <span id="month" @click="showMonthList()">{{
            monthNames[currentDate.month]
          }}</span>
          <span class="month-change" id="next-month" @click="monthUp()">
            <pre>&gt;</pre>
          </span>
        </div>
        <div class="year-picker" id="year-picker">
          <span
            class="year-change"
            id="pre-year"
            @click="currentDate.year -= 1"
          >
            <pre>&lt;</pre>
          </span>
          <span id="year">{{ currentDate.year }}</span>
          <div
            class="year-change"
            id="next-year"
            @click="currentDate.year += 1"
          >
            <pre>&gt;</pre>
          </div>
        </div>
      </div>
      <!-- Calendar Body -->
      <div class="calendar-body">
        <div class="calendar-week-days">
          <div v-for="(weekDay, index) in weekDays" :key="index">
            {{ weekDay }}
          </div>
        </div>
        <div class="calendar-days">
          <div
            class="day-hidden"
            v-for="(n, index) in firstMonthDay - 1"
            :key="index"
          >
            {{ prevMonthDays + 1 - firstMonthDay + n }}
          </div>
          <div
            :class="{ dayActive: n === currentDate.date }"
            v-for="(n, index) in currentMonthDays"
            :key="index"
            @click="currentDate.date = index + 1"
          >
            {{ n }}
          </div>
          <div
            class="day-hidden"
            v-for="(n, index) in 43 - (currentMonthDays + firstMonthDay)"
            :key="index"
          >
            {{ n }}
          </div>
        </div>
        <!-- Open Slot for example Calendar booking button -->
        <slot></slot>
        <!-- End of Slot -->
        <div class="calendar-footer"></div>
        <div class="date-time-formate">
          <div
            class="day-text-formate"
            @click="getCurrentDate()"
            :class="{
              showTime: isMonthListHidden,
              hideTime: !isMonthListHidden,
            }"
          >
            Heute
          </div>
          <span class="test">
            <div class="date-time-value">
              <div
                class="time-formate"
                :class="{
                  showTime: isMonthListHidden,
                  hideTime: !isMonthListHidden,
                }"
              >
                {{ currentTime }}
              </div>
              <div
                class="date-formate"
                :class="{
                  showTime: isMonthListHidden,
                  hideTime: !isMonthListHidden,
                }"
              >
                {{ weekDayNames[currentDay] }}, {{ currentDatum }}
              </div>
            </div>
          </span>
        </div>
        <div
          class="month-list"
          :class="{ hide: isMonthListHidden, show: !isMonthListHidden }"
        >
          <div
            v-for="(monthName, index) in monthNames"
            :key="index"
            @click="hideMonthList()"
          >
            <div @click="currentDate.month = index">{{ monthName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/input-elements/Button.vue";
export default {
  data() {
    return {
      weekDays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      weekDayNames: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
      ],
      monthNames: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      currentDate: {
        date: 0,
        month: 0,
        year: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      isMonthListHidden: true,
    };
  },
  components: { Button },
  created() {
    this.getCurrentDate();
  },
  computed: {
    currentDateToTimeFormat() {
      const month = ("0" + (this.currentDate.month + 1)).slice(-2);
      const day = ("0" + this.currentDate.date).slice(-2);
      const selectedDate = `${this.currentDate.year}-${month}-${day}T${this.currentTime}`;
      return selectedDate;
    },
    currentDay() {
      this.currentDateToTimeFormat;
      this.$emit("selectedDate", this.currentDateToTimeFormat);
      return new Date(
        this.currentDate.year,
        this.currentDate.month,
        this.currentDate.date
      ).getDay();
    },
    currentTime() {
      return (
        ("0" + this.currentDate.hours).slice(-2) +
        ":" +
        ("0" + this.currentDate.minutes).slice(-2) +
        ":" +
        ("0" + this.currentDate.seconds).slice(-2)
      );
    },
    currentDatum() {
      return (
        this.currentDate.date +
        ". " +
        this.monthNames[this.currentDate.month] +
        " " +
        this.currentDate.year
      );
    },
    currentMonthDays() {
      return new Date(
        this.currentDate.year,
        this.currentDate.month + 1,
        0
      ).getDate();
    },
    prevMonthDays() {
      let year =
        this.currentDate.month === 0
          ? this.currentDate.year - 1
          : this.currentDate.year;

      let month = this.currentDate.month === 0 ? 11 : this.currentDate.month;

      return new Date(year, month, 0).getDate();
    },
    firstMonthDay() {
      let firstDay = new Date(
        this.currentDate.year,
        this.currentDate.month,
        1
      ).getDay();

      if (firstDay === 0) {
        firstDay = 7;
      }

      return firstDay;
    },
  },
  methods: {
    getCurrentDate() {
      let today = new Date();
      this.currentDate.date = today.getDate();
      // + 1, because .getMonth() starts with 0
      this.currentDate.month = today.getMonth();
      this.currentDate.year = today.getFullYear();
      this.currentDate.hours = today.getHours();
      this.currentDate.minutes = today.getMinutes();
      this.currentDate.seconds = today.getSeconds();
    },
    dateUp() {
      if (this.currentDate.date === this.currentMonthDays) {
        this.currentDate.date = 1;
        this.monthUp();
      } else {
        this.currentDate.date += 1;
      }
    },
    dateDown() {
      if (this.currentDate.date === 1) {
        this.currentDate.date = this.prevMonthDays;
        this.monthDown();
      } else {
        this.currentDate.date -= 1;
      }
    },
    monthUp() {
      if (this.currentDate.month === 11) {
        this.currentDate.month = 0;
        this.currentDate.year += 1;
      } else {
        this.currentDate.month += 1;
      }
    },
    monthDown() {
      if (this.currentDate.month === 0) {
        this.currentDate.month = 11;
        this.currentDate.year -= 1;
      } else {
        this.currentDate.month -= 1;
      }
    },
    showMonthList() {
      this.isMonthListHidden = false;
    },
    hideMonthList() {
      this.isMonthListHidden = true;
    },
  },
};
</script>

<style scoped>
.test {
  display: none;
}
.container {
  display: flex;
  justify-content: center;
  position: relative;
  right: 0;
  width: 100%;
  height: 100%;
}

.calendar {
  width: 100%;
  max-width: 450px;
  height: 95%;
  margin-top: 5%;
  padding: 2rem 1.25rem 0rem 1.25rem;
  background-color: var(--clr-sur-d);
  border-radius: var(--m-brd-rad);
  overflow: hidden;
  box-shadow: 0 0 20px var(--card-shadow);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
  color: var(--text-mid);
  border-top: var(--s-brd) solid var(--primary-middle);
  border-bottom: var(--s-brd) solid var(--primary-middle);
}
.calendar-body {
  padding: 0.5rem;
}

.calendar-week-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: var(--f-weight-bold);
  margin-top: var(--s-marg);
  cursor: pointer;
}

.calendar-week-days > div {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-middle);
  font-size: var(--font-list-label);
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.calendar-week-days > div:hover {
  color: var(--primary-middle);
  transform: scale(1.2);
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  color: var(--text-mid);
}

.calendar-days > div {
  aspect-ratio: 35 / 30;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  cursor: pointer;
  font-size: var(--font-list-label);
  font-weight: var(--f-weight-m);
  animation: to-top 1s forwards;
}

.month-picker {
  padding: 5px 10px;
  cursor: pointer;
}

.month-picker:hover {
  color: var(--primary-middle);
}

.year-picker,
.month-picker,
.day-picker {
  display: flex;
  justify-content: space-between;
}

.year-picker,
.day-picker {
  width: 30%;
}

.month-picker {
  width: 40%;
}

.year-change,
.day-change {
  margin: 0px 10px;
  cursor: pointer;
}

.year-change:hover,
.day-change:hover {
  color: var(--primary-middle);
}

.year-change:hover > pre {
  color: var(--primary-dark);
}

/* .calendar-footer {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
} */

#year:hover,
#month:hover,
#day:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.2s ease-in-out;
  color: var(--primary-middle);
}

.calendar-days div span {
  position: absolute;
}

.calendar-days div:hover {
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  background-color: var(--surface-hover);
  border-radius: 20%;
  color: var(--primary-dark);
}

.month-list {
  position: relative;
  left: 0;
  top: -125px;
  background-color: rgba(255, 255, 255, 0.75);
  color: var(--primary-dark);
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 5px;
  border-radius: 20px;
}

.month-list > div {
  display: grid;
  place-content: center;
  margin: 5px 10px;
  transition: all 0.2s ease-in-out;
}

.month-list > div > div {
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
}

.month-list > div > div:hover {
  background-color: var(--primary-light);
  color: white;
  transform: scale(0.9);
  transition: all 0.2s ease-in-out;
}

.month-list.show {
  animation: to-left 0.71s forwards;
  visibility: visible;
  pointer-events: visible;
  transition: 0.6 ease-in-out;
}

.month-list.hideonce {
  visibility: hidden;
}

.month-list.hide {
  animation: to-right 1s forwards;
  visibility: none;
  pointer-events: none;
}

.date-time-formate {
  font-weight: 600;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  color: var(--secondary-dark);
  margin-top: 2rem;
  height: 3rem;
}

.day-text-formate {
  font-size: var(--font-hr3);
  font-weight: 500;
  color: var(--primary-dark);
  padding-left: 1rem;
  padding-bottom: 0.3rem;
  margin-right: 0rem;
  border-bottom: 1px solid var(--primary-dark);
  /* left: -1rem; */
}

.date-time-value {
  display: block;
  height: 150px;
  position: relative;
  left: 30%;
  top: -5px;
  text-align: left;
  display: none;
}

.time-formate {
  font-size: 1.25rem;
  display: none;
}

.date-formate {
  font-size: 0.9rem;
  display: none;
}

/* .day-text-formate.hideTime,
.time-formate.hideTime,
.date-formate.hideTime {
  animation: hideTime 1.5s forwards;
} */

/* .day-text-formate.showTime,
.time-formate.showTime,
.date-formate.showTime {
  animation: showTime 1s forwards;
} */

.day-hidden {
  color: var(--secondary-mid);
}

.dayActive {
  color: hsl(0, 0%, 98%);
  background-color: var(--primary-dark);
  font-weight: 700;
  border-radius: 0.2rem;
  aspect-ratio: 1;
}

/* Animations */
@keyframes to-top {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
}

@keyframes to-left {
  0% {
    transform: translateX(-150%);
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes to-right {
  10% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(-150%);
    opacity: 1;
  }
}

@keyframes showTime {
  0% {
    transform: translateX(250%);
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

@keyframes hideTime {
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(-370%);
    opacity: 1;
  }
}

@media (max-width: 375px) {
  .month-list > div {
    margin: 5px 0px;
  }
}

@media screen and (min-width: 400px) {
  .date-formate {
    font-size: 1rem;
  }

  .day-text-formate {
    padding-right: 5%;
  }
}
</style>
