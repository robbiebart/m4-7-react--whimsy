import React from "react";

import styled from "styled-components";

const Stat = ({ statName, statNumber }) => {
  return (
    <StatSpan>
      <StatStyle>{statNumber + " "} </StatStyle> {statName}
    </StatSpan>
  );
};

const StatStyle = styled.div`
  font-weight: bold;
  margin-right: 8px;
`;

const StatSpan = styled.span`
  display: flex;
  margin-right: 10px;
`;

export default Stat;
