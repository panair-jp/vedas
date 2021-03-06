import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';

const Information = (props) => {

  const dict = props.dict;
  const StyledComponents = getStyledComponents();
  const Information =StyledComponents.Information;
  const InformationP =StyledComponents.InformationP;

  return (
    <Information>
      <p>{dict.contact_text1}</p>
      <p>{dict.contact_text2}</p>
      <InformationP>{dict.contact_note}</InformationP>
    </Information>
  )
}

const getStyledComponents = () => {

  let Information = styled.div`
  font-family: Roboto;
  font-size: 18px;
  
  width: 90%;
  height: 10%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 5%;
  left: 5%;
  right: 0%;
  bottom: 0%;
  
  line-height: 42px;
  `;

  let InformationP = styled.p`
  color: ${Color.lightGray};
  `;

  if (isMobile) {
    Information = styled(Information)`
    font-size: 16px;

    line-height: 32px;
    `;
  }

  return {
    Information : Information,
    InformationP : InformationP
  };
}

export default Information