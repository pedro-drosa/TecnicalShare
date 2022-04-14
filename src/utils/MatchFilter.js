import { parseISO, differenceInHours, sub } from 'date-fns';

class MatchFilter {
  constructor(initialDate, finalDate) {
    this.initialDate = parseISO(initialDate);
    this.finalDate = parseISO(finalDate);
  }

  filterTwoProfiles(ArrayMentors) {
    const firstPlace = ArrayMentors.reduce(
      (acc, curr) => {
        if (curr.tags.length > acc.tags) acc = curr;
        return acc;
      },
      { tags: 0 },
    );

    const filterOne = ArrayMentors.filter(
      (mentor) => mentor.id !== firstPlace.id,
    );

    const secoundPlace = filterOne.reduce(
      (acc, curr) => {
        if (curr.tags.length > acc.tags) acc = curr;
        return acc;
      },
      { tags: 0 },
    );

    return [firstPlace, secoundPlace];
  }

  createRange() {
    const diff = differenceInHours(this.finalDate, this.initialDate);
    const initial = sub(this.initialDate, { hours: 3 }).getHours();
    const [date] = this.initialDate.toISOString().split('T');

    const range = Array.from(
      { length: diff + 1 },
      (value, i) => `${date}T${String(initial + i).padStart(2, 0)}:00:00-03:00`,
    );

    return range;
  }

  checkAvailableTimes(firstSchedule, secoundSchedule) {
    const rangeOfHours = this.createRange();

    const schedules = [firstSchedule, secoundSchedule];

    const availableTimes = schedules.map((schedule) => {
      const times = schedule.filter(
        (day) => rangeOfHours.includes(day.hour) && day.available,
      );
      return times;
    });

    return availableTimes;
  }
}

export default MatchFilter;
