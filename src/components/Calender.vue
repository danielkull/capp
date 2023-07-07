<template>
  <h1>Kalender</h1>
  <h2>Buchen Sie hier Ihren nächsten Fahrt-Termin!</h2>
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
  created() {
    this.getCurrentDate();
  },
  computed: {
    currentDay() {
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
h1,
h2 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
}

h1 {
  font-size: var(--l-font);
  color: var(--primary-dark);
}

h2 {
  font-size: calc(var(--m-font) * 1.15);
  margin-bottom: 2rem;
  color: var(--secondary-dark);
}

body {
  padding-inline: 2.5rem;
}

.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  position: relative;
  top: 10%;
  right: 0;
  width: 100%;
}

.calendar {
  width: 450px;
  height: 610px;
  padding: 30px 50px 0px 50px;
  background-color: whitesmoke;
  border-radius: 25px;
  overflow: hidden;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--primary-mid);
  color: var(--secondary-light);
  border-radius: 1rem;
}

.calendar-body {
  padding: 0.5rem;
}

.calendar-week-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 600;
  cursor: pointer;
}

.calendar-week-days > div {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-dark);
  transition: color 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.calendar-week-days > div:hover {
  color: var(--primary-mid);
  transform: scale(1.2);
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  color: black;
}

.calendar-days > div {
  _width: 35px;
  _height: 30px;
  aspect-ratio: 35 / 30;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  position: relative;
  cursor: pointer;
  animation: to-top 1s forwards;
}

.month-picker {
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.month-picker:hover {
  background-color: var(--list-hover);
  color: var(--primary-dark);
}

.year-picker,
.month-picker,
.day-picker {
  width: 32%;
  display: flex;
  justify-content: space-between;
}

.year-change,
.day-change {
  margin: 0px 10px;
  cursor: pointer;
}

.year-change:hover,
.day-change:hover {
  background-color: var(--secondary-light);
  color: var(--primary-dark);
}

.year-change:hover > pre {
  color: var(--primary-dark);
}

.calendar-footer {
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#year:hover,
#month:hover,
#day:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.2s ease-in-out;
}

.calendar-days div span {
  position: absolute;
}

.calendar-days div:hover {
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  background-color: var(--secondary-light);
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
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  position: relative;
  _display: inline;
  top: 140px;
  justify-content: center;
  color: var(--secondary-dark);
}

.day-text-formate {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--primary-dark);
  padding-right: 5%;
  border-right: 3px solid var(--primary-light);
  position: absolute;
  left: -1rem;
}

.date-time-value {
  display: block;
  height: 150px;
  position: relative;
  left: 30%;
  top: -5px;
  text-align: left;
}

.time-formate {
  font-size: 1.25rem;
}

.day-text-formate.hideTime,
.time-formate.hideTime,
.date-formate.hideTime {
  animation: hideTime 1.5s forwards;
}

.day-text-formate.showTime,
.time-formate.showTime,
.date-formate.showTime {
  animation: showTime 1s forwards;
}

.day-hidden {
  color: var(--secondary-mid);
}

.dayActive {
  color: white;
  background-color: var(--primary-light);
  font-weight: 700;
  border-radius: 50%;
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

/* 
https://www.youtube.com/watch?v=aremw7qlJYk 
17:36
*/
</style>
