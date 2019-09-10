import moment from "moment";
export default class CalendarHelper {
  constructor(dates) {
    this.dates = dates;
  }
  filterByDate(target) {
    return this.dates.filter(({ startDate }) => {
      return (
        moment(startDate).format("YYYY-MM-DD") ===
        moment(target).format("YYYY-MM-DD")
      );
    });
  }
}
