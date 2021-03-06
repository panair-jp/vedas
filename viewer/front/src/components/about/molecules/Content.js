import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';
import Text1 from 'components/about/atoms/Text1';
import Text2 from 'components/about/atoms/Text2';
import Text3 from 'components/about/atoms/Text3';
import Text4 from 'components/about/atoms/Text4';
import Text5 from 'components/about/atoms/Text5';

const Content = (props) => {

  const dict = props.dict;
  const StyledComponents = getStyledComponents();
  const Content = StyledComponents.Content;

  return (
    <Content>
      <Text1 dict={dict}/>
      <Text2 dict={dict}/>
      <Text3 dict={dict}/>
      <Text4 dict={dict}/>
      <Text5 dict={dict}/>
    </Content>
  )
}

const getStyledComponents = () => {

  let Content = styled.div`
  border: 1px solid ${Color.white};
  border-radius: 16px;

  background: ${Color.white};

  height: 80%;
  width: 92%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;

  position: absolute;
  top: 8%;
  left: 4%;
  right: 0%;
  bottom: 0%;
  `;

  if (isMobile) {
    Content = styled(Content)`
    height: 78%;

    top: 12%;
    left: 2%;
    `;
  }

  return {
    Content : Content
  };
}

export default Content