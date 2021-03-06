import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogo from 'components/common/molecules/FooterLogo'
import Title from 'components/usage/atoms/Title'
import Content1 from 'components/usage/molecules/Content1'
import Content2 from 'components/usage/molecules/Content2'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';
import 'css/Usage.css';

const Usage = (props) => {

  const lang = props.lang;
  const dict = props.dict;
  const pathname = props.pathname;

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const StyledComponents = getStyledComponents();
  const ContentArea = StyledComponents.ContentArea;
  const Text1 = StyledComponents.Text1;
  const Text2 = StyledComponents.Text2;
  const LogoArea = StyledComponents.LogoArea;

  return (
    <ContentArea>
      <Title/>
      <Content1 dict={dict} Text1={Text1} Text2={Text2}/>
      <Content2 dict={dict} lang={lang} Text1={Text1}/>
      <FooterLogo LogoArea={LogoArea} menu={props.menu} handleMenuChange={props.handleMenuChange}/>
    </ContentArea>
  )
}

const getStyledComponents = (lang) => {

  let ContentArea = styled.div`
  border-radius: 54px;

  background: ${Color.gray};

  height: 4300px;
  width: 91%;

  padding: 2% 0% 0% 4%;
  margin:  0% 0% 0% 4%;
  `;

  if (lang === "en"){
    ContentArea = styled(ContentArea)`
    height: 4400px;
  `;
  }

  let Text1 = styled.div`
  font-family: Roboto;
  font-size: 26px;
  color: ${Color.black};

  border-radius: 54px;
  border: 8px solid ${Color.white};

  padding: 3% 0% 0% 3%;
  margin:  0% 0% 0% 0%;

  line-height: 40px;
  `;

  let Text2 = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: ${Color.ashGray};

  padding: 1% 0% 0% 3.8%;
  margin:  0% 0% 0% 0%;

  line-height: 19px;
  `;

  let LogoArea = styled.div`
  width: 60%;

  padding: 0% 0% 0% 0%;
  margin:  5% 0% 0% -7%;

  position: absolute;
  `;

  if (isMobile) {
    if (lang === "en"){
      ContentArea = styled(ContentArea)`
      background: none;

      height: 2100px;
      width: 100%;

      padding-left: 1%;
      margin-left: 1%;
    `;
    } else {
      ContentArea = styled(ContentArea)`
      background: none;

      height: 1800px;
      width: 100%;

      padding-left: 1%;
      margin-left: 1%;
    `;
    }

    Text1 = styled(Text1)`
      font-size: 19px;
    `;

    Text2 = styled(Text2)`
      display: none;
    `;

    LogoArea = styled(LogoArea)`
    margin-top: 0px;
    margin-left: -3%;
  `;
  }

  return {
    ContentArea : ContentArea,
    Text1 : Text1,
    Text2 : Text2,
    LogoArea : LogoArea
  };
}

export default Usage