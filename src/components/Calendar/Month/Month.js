import React from "react";
import moment from "moment";
import { Month, Week, WeekDays, Day, WeekDay } from "./styles";
const MonthComp = props => {
  let year = props.year();
  let month = props.month();
  let daysInMonth = props.daysInMonth();
  let currentDay = props.currentDay();
  let firstDayOfMonth = props.firstDayOfMonth();

  return (
    <Month>
      <WeekDays>
        {moment.weekdaysShort().map(day => {
          return (
            <WeekDay key={day} className="weekday">
              {day}
            </WeekDay>
          );
        })}
      </WeekDays>
      <RenderDays {...{ firstDayOfMonth, currentDay, daysInMonth }} />
    </Month>
  );
};

const RenderDays = ({ firstDayOfMonth, daysInMonth }) => {
  const initialStart = 7 - firstDayOfMonth;
  return (
    <React.Fragment>
      <Week>
        {(() => {
          let arr = [];
          for (let i = 0; i < firstDayOfMonth; i++) {
            arr.push(
              <Day key={i}>
                <div className="day"></div>
              </Day>
            );
          }
          for (let i = 1; i <= initialStart; i++) {
            arr.push(
              <Day key={`day${i}`}>
                <div className="day">{i}</div>
              </Day>
            );
          }
          return arr;
        })()}
      </Week>
      {(() => {
        let week = [];
        let days = [];
        for (let i = 0; i < (daysInMonth - initialStart) / 7; i++) {
          let startNum = initialStart + 1 + i * 7;
          for (let j = startNum; j < startNum + 7; j++) {
            days.push(
              <Day key={`day${j}`}>
                <div className="day">{j > daysInMonth ? "" : j}</div>
              </Day>
            );
          }
          week.push(React.createElement(Week, { key: `month${i}` }, days));
          days = [];
        }
        return week;
      })()}
    </React.Fragment>
  );
};

export default MonthComp;
