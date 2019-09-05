import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { Button } from "semantic-ui-react";
import Month from "./Month/Month";
import Week from "./Week/Week";
import { MainCalendar } from "./styles";

const Calendar = () => {
  const [today, setToday] = useState(moment());
  const [dateContext, setDateContext] = useState(moment());
  const [activeType, setActiveType] = useState("week");

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
  const prevMonth = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(newDateContext).subtract(1, "month");
    setDateContext(newDateContext);
  };
  const setToToday = () => {
    let newDateContext = Object.assign({}, moment());
    setDateContext(moment());
  };
  return (
    <MainCalendar>
      <div className="month-header">
        <h1>{`${year()} ${month()}`}</h1>
        <div className="left-buttons">
          <Button.Group color="blue">
            <Button onClick={setToToday}>Today</Button>
            <Button onClick={prevMonth}>Back</Button>
            <Button onClick={nextMonth}>Next</Button>
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
      <div style={{ width: "100vw", height: "100vh" }}>
        {activeType === "month" ? (
          <Month
            year={year}
            month={month}
            daysInMonth={daysInMonth}
            currentDay={currentDay}
            firstDayOfMonth={firstDayOfMonth}
          />
        ) : activeType === "week" ? (
          <Week />
        ) : null}
      </div>
    </MainCalendar>
  );
};

export default Calendar;
