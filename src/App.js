import React from "react";
import MyCalendar from "./components/Calendar/Calendar";
import moment from "moment";

function App() {
  console.log(moment().format("hh:00 A"));
  const dates = [
    {
      title: "Do Something...",
      startDate: new Date(),
      endDate: moment()
        .add(4, "hour")
        .toDate(),
      color: "green",
      done: false
    },
    {
      title: "Eat Boolgogi",
      startDate: moment()
        .subtract("5", "day")
        .toDate(),
      endDate: moment()
        .subtract("5", "day")
        .toDate(),
      color: "red",
      done: false
    }
  ];
  return (
    <div>
      <div style={{ width: "90vw", height: "100vh", margin: "auto" }}>
        <MyCalendar dates={dates} />
      </div>
    </div>
  );
}

export default App;
