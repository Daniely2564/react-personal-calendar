import styled from "styled-components";

const Month = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeekDays = styled.div`
  flex: 1;
  display: flex;
`;

const Week = styled.div`
  display: flex;
  min-height: 160px;
`;

const Day = styled.div`
  border: 0.7px solid #ddd;
  flex: 1;
  overflow: hidden;
  .day {
    text-align: right;
    margin-right: 10px;
    margin-top: 10px;
    font-size: 17px;
  }
`;

const WeekDay = styled.div`
  border: 0.7px solid #ddd;
  flex: 1;
  text-align: center;
  padding: 2px;
  font-weight: bold;
`;

const Schedule = styled.div`
  background: ${props => props.color};
  color: white;
  text-align: center;
  border-radius: 3px;
  font-size: 18px;
  padding: 3px;
  width: 99%;
  cursor: pointer;
  margin: 0 auto;
`;

export { Month, Week, WeekDays, Day, WeekDay, Schedule };
