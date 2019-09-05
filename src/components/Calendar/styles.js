import styled from "styled-components";

const MainCalendar = styled.div`
  width: 100%;
  height: 100%;
  .month-header {
    min-height: 90px;
    position: relative;
    h1 {
      margin-top: 10px;
      text-align: center;
    }
    .left-buttons {
      position: absolute;
      bottom: 5px;
      left: 5px;
    }
    .right-buttons {
      position: absolute;
      right: 5px;
    }
  }
`;

export { MainCalendar };
