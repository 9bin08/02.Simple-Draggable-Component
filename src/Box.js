import React from "react";
import styled from "styled-components";

function Box() {
  return <BoxItem />;
}

export default Box;
const BoxItem = styled.div`
  width: 10vw;
  height: 10vh;
  background: red;
`;
