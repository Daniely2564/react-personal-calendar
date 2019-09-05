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

export { Month, Week, WeekDays, Day, WeekDay };
