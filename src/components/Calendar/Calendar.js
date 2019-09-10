import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Button } from "semantic-ui-react";
import Month from "./Month/Month";
import Week from "./Week/Week";
import Day from "./Day/Day";
import CalendarHelper from "../../utils/CalendarHelper";
import { MainCalendar } from "./styles";

const Calendar = ({ dates }) => {
  const [dateContext, setDateContext] = useState(moment());
  const [activeType, setActiveType] = useState("month");
  const Helper = new CalendarHelper(dates);
  const year = () => dateContext.format("Y");
  const month = () => dateContext.format("MMMM");
  const daysInMonth = () => dateContext.daysInMonth();
  const currentDay = () => dateContext.format("D");
  const firstDayOfMonth = () => {
    let copyDateContext = dateContext;
    let firstDay = moment(copyDateContext)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  };
  const nextMonth = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(newDateContext).add(1, "month");
    setDateContext(newDateContext);
  };
  const getDate = () => {
    return moment(dateContext).format("YYYY-MM-DD");
  };
  const prevMonth = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(newDateContext).subtract(1, "month");
    setDateContext(newDateContext);
  };
  const nextWeek = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(newDateContext).add(7, "day");
    setDateContext(newDateContext);
  };
  const prevWeek = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(newDateContext).subtract(7, "day");
    setDateContext(newDateContext);
  };
  const nextDay = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(newDateContext).add(1, "day");
    setDateContext(newDateContext);
  };
  const prevDay = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(newDateContext).subtract(1, "day");
    setDateContext(newDateContext);
  };
  const setToToday = () => {
    let newDateContext = Object.assign({}, moment());
    setDateContext(moment());
  };
  const getWeek = () => {
    let arr = [];
    for (let i = dateContext.day(); i > 0; i--) {
      arr.push(
        moment(dateContext)
          .subtract(i, "day")
          .format("MM/DD")
      );
    }
    arr.push(moment(dateContext).format("MM/DD"));
    for (let i = dateContext.day() + 1; i < 7; i++) {
      arr.push(
        moment(dateContext)
          .add(i - dateContext.day(), "day")
          .format("MM/DD")
      );
    }
    return arr;
  };
  const getDay = () => {
    return moment(dateContext).format("MM/DD");
  };
  const day = () => {
    return moment(dateContext).day();
  };
  console.log(Helper.filterByDate(new Date()));
  return (
    <MainCalendar>
      <div className="month-header">
        <h1>{`${year()} ${month()}`}</h1>
        <div className="left-buttons">
          <Button.Group color="blue">
            <Button onClick={setToToday}>Today</Button>
            <Button
              onClick={
                activeType === "month"
                  ? prevMonth
                  : activeType === "week"
                  ? prevWeek
                  : prevDay
              }
            >
              Back
            </Button>
            <Button
              onClick={
                activeType === "month"
                  ? nextMonth
                  : activeType === "week"
                  ? nextWeek
                  : nextDay
              }
            >
              Next
            </Button>
          </Button.Group>
        </div>
        <div className="right-buttons">
          <Button.Group color="grey">
            <Button
              active={activeType === "month"}
              onClick={() => setActiveType("month")}
            >
              Month
            </Button>
            <Button
              active={activeType === "week"}
              onClick={() => setActiveType("week")}
            >
              Week
            </Button>
            <Button
              active={activeType === "day"}
              onClick={() => setActiveType("day")}
            >
              Day
            </Button>
          </Button.Group>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {activeType === "month" ? (
          <Month
            year={year}
            month={month}
            daysInMonth={daysInMonth}
            currentDay={currentDay}
            firstDayOfMonth={firstDayOfMonth}
            Helper={Helper}
          />
        ) : activeType === "week" ? (
          <Week dateContext={dateContext} getWeek={getWeek} />
        ) : (
          <Day
            getDay={getDay}
            day={day}
            dates={Helper.filterByDate(getDate())}
          />
        )}
      </div>
    </MainCalendar>
  );
};

export default Calendar;
