<template>
  <h1>Kalender</h1>
  <h2>Buchen Sie hier Ihren nächsten Fahrt-Termin!</h2>
  <div class="container">
    <div class="calendar">
      <!-- Calendar Header -->
      <div class="calendar-header">
        <span class="month-picker" id="month-picker">{{ currentMonth }}</span>
        <div class="year-picker" id="year-picker">
          <span class="year-change" id="pre-year">
            <pre>&lt;</pre>
          </span>
          <span id="year">{{ currentYear }}</span>
          <div class="year-change" id="next-year">
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
            :class="{ dayActive: n === currentDate.getDate() }"
            v-for="(n, index) in currentMonthDays"
            :key="index"
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
          <div class="day-text-formate">Heute</div>
          <div class="date-time-value">
            <div class="time-formate">{{ currentTime }}</div>
            <div class="date-formate">{{ currentDatum }}</div>
          </div>
        </div>
        <div class="month-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      weekDays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
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
    };
  },
  created() {
    this.logPrevMonthDays();
  },
  computed: {
    currentMonth() {
      return this.monthNames[this.currentDate.getMonth()];
    },
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentTime() {
      return (
        this.currentDate.getHours() +
        ":" +
        this.currentDate.getMinutes() +
        ":" +
        this.currentDate.getSeconds()
      );
    },
    currentDatum() {
      return (
        this.currentDate.getDate() +
        ". " +
        this.monthNames[this.currentDate.getMonth()] +
        " " +
        this.currentDate.getFullYear()
      );
    },
    currentMonthDays() {
      return new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      ).getDate();
    },
    prevMonthDays() {
      let year =
        this.currentDate.getMonth() === 0
          ? this.currentDate.getFullYear() - 1
          : this.currentDate.getFullYear();

      let month =
        this.currentDate.getMonth() === 0 ? 11 : this.currentDate.getMonth();

      return new Date(year, month, 0).getDate();
    },
    firstMonthDay() {
      let firstDay = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        1
      ).getDay();

      if (firstDay === 0) {
        firstDay = 7;
      }

      return firstDay;
    },
  },
  methods: {
    logPrevMonthDays() {
      console.log(this.prevMonthDays);
      console.log(this.firstMonthDay);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: var(--l-font);
}

h2 {
  font-size: calc(var(--m-font) * 1.25);
}

.container {
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

.year-picker {
  width: 35%;
  display: flex;
  justify-content: space-between;
}

.year-change {
  margin: 0px 10px;
  cursor: pointer;
}

.year-change:hover {
  background-color: var(--secondary-light);
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

#year:hover {
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
  top: -50px;
  background-color: white;
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
  color: var(--primary-dark);
  transform: scale(0.9);
  transition: all 0.2s ease-in-out;
}

.month-list .show {
  visibility: visible;
  pointer-events: visible;
  transition: 0.6 ease-in-out;
  animation: to-left 0.71s forwards;
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
  color: var(--primary-mid);
  font-weight: 700;
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
    transform: translateX(230%);
    opacity: 1;
  }
  100% {
    transform: translateX(230%);
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
