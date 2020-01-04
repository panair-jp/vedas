import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import FooterLogo from '../../common/molecules/FooterLogo'

const FooterLogoArea = (props) => {
  
  const StyledComponents = getStyledComponents();
  const LogoArea = StyledComponents.LogoArea;

  return (
    <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
  )
}

const getStyledComponents = () => {

  let LogoArea = styled.div`
  height: 0%;
  width: 60%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 91%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  `;

  if (isMobile) {
    LogoArea = styled(LogoArea)`
    top: 93.63%;
    `;
  }

  return {
    LogoArea : LogoArea
  };
}

export default FooterLogoArea