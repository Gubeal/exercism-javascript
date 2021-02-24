const HOURS_DAY = 24;
const MINUTES_HOUR = 60;
const ZERO = 0;
const ONES_MAX_DECIMAL = 9;

export class Clock {
  constructor(hour=ZERO, minute=ZERO) {
      this.hour = hour;
      this.minute = minute;
  }

  intHours(hours) {
    return (hours >= HOURS_DAY) ? this.intHours(hours - HOURS_DAY) : (hours < ZERO) ? this.intHours(hours + HOURS_DAY) : hours;
  }

  intMinutes(hours, minutes) {
    return (minutes >= MINUTES_HOUR) ? this.intMinutes(hours + 1, minutes - MINUTES_HOUR) : (minutes < ZERO) ? this.intMinutes(hours - 1, minutes + MINUTES_HOUR) : {hours, minutes};
  }

  toString() {
    let timeSpend = this.intMinutes(ZERO, this.minute);
    let hours = this.intHours(this.hour + timeSpend.hours);

    hours = (hours > ONES_MAX_DECIMAL)? hours : `0${hours}`;
    let minutes = (timeSpend.minutes > ONES_MAX_DECIMAL) ? timeSpend.minutes : `0${timeSpend.minutes}`;
    return `${hours}:${minutes}`;
  }

  plus(minute=ZERO) {
    let timeSpend = this.intMinutes(ZERO, minute);
    this.hour += Number(timeSpend.hours);
    this.minute += Number(timeSpend.minutes);
    return this;
  }

  minus(minute=ZERO) {
    let timeSpend = this.intMinutes(ZERO, -Math.abs(minute));
    this.hour += Number(timeSpend.hours);
    this.minute += Number(timeSpend.minutes);
    return this;
  }

  equals(time) {
    return this.toString() == time.toString();
  }
}
