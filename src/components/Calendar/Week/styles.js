import styled from "styled-components";

const Week = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 625px;
  max-height: 625px;
  border: 0.7px solid #ddd;
`;

const WeekDay = styled.div`
  border-bottom: 0.7px solid #ddd;
  flex: 1;
  text-align: center;
  padding: 2px;
  font-weight: bold;
  max-height: 25px;
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

export { Row, Week, WeekDay, TimeRow };
