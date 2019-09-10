import React from "react";
import moment from "moment";
import { Week, Row, WeekDay, TimeRow } from "./styles";

const WeekComp = ({ dateContext, getWeek }) => {
  const times = [
    "12:00 A.M.",
    "1:00 A.M.",
    "2:00 A.M.",
    "3:00 A.M.",
    "8:00 A.M.",
    "9:00 A.M.",
    "10:00 A.M.",
    "11:00 A.M.",
    "12:00 P.M.",
    "1:00 P.M.",
    "2:00 P.M.",
    "3:00 P.M.",
    "4:00 P.M.",
    "5:00 P.M.",
    "6:00 P.M.",
    "7:00 P.M.",
    "8:00 P.M.",
    "9:00 P.M.",
    "10:00 P.M.",
    "11:00 P.M."
  ];
  const weekDays = moment.weekdaysShort();
  const week = getWeek();
  return (
    <Week>
      <Row>
        <WeekDay>Time</WeekDay>
        <RenderTimeRow times={times} />
      </Row>
      <Row>
        <WeekDay>{`${weekDays[0]} ${week[0]}`}</WeekDay>
      </Row>
      <Row>
        <WeekDay>{`${weekDays[1]} ${week[1]}`}</WeekDay>
      </Row>
      <Row>
        <WeekDay>{`${weekDays[2]} ${week[2]}`}</WeekDay>
      </Row>
      <Row>
        <WeekDay>{`${weekDays[3]} ${week[3]}`}</WeekDay>
      </Row>
      <Row>
        <WeekDay>{`${weekDays[4]} ${week[4]}`}</WeekDay>
      </Row>
      <Row>
        <WeekDay>{`${weekDays[5]} ${week[5]}`}</WeekDay>
      </Row>
      <Row>
        <WeekDay>{`${weekDays[6]} ${week[6]}`}</WeekDay>
      </Row>
    </Week>
  );
};

const RenderTimeRow = ({ times }) => {
  return (
    <React.Fragment>
      {times.map(time => {
        return (
          <TimeRow key={time}>
            <div className="text">{time}</div>
          </TimeRow>
        );
      })}
    </React.Fragment>
  );
};

export default WeekComp;
