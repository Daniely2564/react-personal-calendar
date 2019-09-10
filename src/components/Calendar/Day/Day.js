import React from "react";
import moment from "moment";
import { Day, Row, WeekDay, TimeRow, Schedule } from "./styles";

const WeekComp = ({ getDay, day, dates }) => {
  const times = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM"
  ];
  const weekDays = moment.weekdaysShort();
  const date = getDay();
  const dayNo = day();
  return (
    <Day>
      <Row flex={1}>
        <WeekDay>Time</WeekDay>
        <RenderTimeRow times={times} />
      </Row>
      <Row flex={7}>
        <WeekDay>{`${weekDays[dayNo]} ${date}`}</WeekDay>
        {dates.map(({ startDate, title, color }) => {
          return (
            <Schedule
              key={title}
              time={times.indexOf(moment(startDate).format("hh:00 A"))}
              color={color}
            >
              {title}
            </Schedule>
          );
        })}
      </Row>
    </Day>
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
