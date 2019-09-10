import styled from "styled-components";

const Day = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: ${props => props.flex};
  min-height: 620px;
  max-height: 620px;
  border: 0.7px solid #ddd;
`;

const WeekDay = styled.div`
  border-bottom: 0.7px solid #ddd;
  overflow: hidden;
  flex: 1;
  text-align: center;
  padding: 2px;
  font-weight: bold;
  min-height: 20px;
  max-height: 20px;
`;

const TimeRow = styled.div`
  border-bottom: 0.7px solid #ddd;
  min-height: ${600 / 20}px;
  max-height: ${600 / 20}px;
  width: 100%;
  position: relative;
  flex: 1;
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Schedule = styled.div`
  width: 100%;
  position: absolute;
  top: ${props => 20.7 + 30 * props.time}px;
  background-color: ${props => props.color};
  color: white;
  height: 30px;
`;

export { Row, Day, WeekDay, TimeRow, Schedule };
