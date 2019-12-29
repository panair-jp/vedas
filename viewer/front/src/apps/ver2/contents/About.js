import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import FooterLogoArea from '../../../components/ver2/FooterLogoArea'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";

const About = (props) => {

  const lang = props.lang;
  const handleMenuChange = props.handleMenuChange;

  useEffect(() => {
    const pathname = '/' + lang + '/about';
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  const ContentArea = styled.div`
    height: 200%;
    width: 91%;
    position: absolute;
    padding-top: 10%;
    left: 4.1%;
    right: 4.1%;
    top: 100%;
    bottom: 10.65%;
    background: #EFEFEF;
    border-radius: 54px;
  `;

  let ContentTitle = styled.div`
    position: absolute;
    left: 5%;
    top: 10%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 200%;
    line-height: 54px;
    color: #25282B;
  `;

  const Content = styled.div`
    position: absolute;
    width: 92%;
    height: 50%;
    left: 4%;
    top: 20%;

    background: #fff;
    border: 1px solid #fff;
    box-sizing: border-box;
    border-radius: 16px;
  `;

  let LogoArea = styled.div`
    position: absolute;
    width: 60%;
    height: 11%;
    top: 73%;
  `;

  let VedasLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 48%;
    cursor: pointer;
  `;

  let PanairLogo = styled.div`
    position: absolute;
    display: inline-block;
    width: 30%;
    top: 160%;
    left: 92%;
    cursor: pointer;
  `;

  if(isMobile){
    ContentTitle = styled(ContentTitle)`
      top: 2%;
    `;
  } 

  const Title = (
    <svg width="121" height="24" viewBox="0 0 121 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.536 17.816H7.336L5.128 23H0.84L10.92 0.599998H15.016L25.128 23H20.776L18.536 17.816ZM17.16 14.552L12.936 4.76L8.744 14.552H17.16ZM43.8488 11.352C45.0861 11.7573 46.0674 12.44 46.7928 13.4C47.5181 14.3387 47.8808 15.512 47.8808 16.92C47.8808 18.8613 47.1341 20.3653 45.6408 21.432C44.1474 22.4773 41.9714 23 39.1128 23H27.9768V0.599998H38.4728C41.1181 0.599998 43.1554 1.12267 44.5848 2.168C46.0141 3.192 46.7288 4.61067 46.7288 6.424C46.7288 7.53333 46.4728 8.51467 45.9608 9.368C45.4488 10.2213 44.7448 10.8827 43.8488 11.352ZM32.1368 3.864V10.04H38.0248C39.4754 10.04 40.5848 9.784 41.3528 9.272C42.1421 8.73867 42.5368 7.97067 42.5368 6.968C42.5368 5.944 42.1421 5.176 41.3528 4.664C40.5848 4.13067 39.4754 3.864 38.0248 3.864H32.1368ZM38.8568 19.736C42.0781 19.736 43.6888 18.6587 43.6888 16.504C43.6888 14.3493 42.0781 13.272 38.8568 13.272H32.1368V19.736H38.8568ZM62.7845 23.32C60.5018 23.32 58.4432 22.8293 56.6085 21.848C54.7738 20.8453 53.3338 19.4693 52.2885 17.72C51.2432 15.9493 50.7205 13.976 50.7205 11.8C50.7205 9.624 51.2432 7.66133 52.2885 5.912C53.3338 4.14133 54.7738 2.76533 56.6085 1.784C58.4432 0.781332 60.5018 0.279999 62.7845 0.279999C65.0672 0.279999 67.1258 0.781332 68.9605 1.784C70.7952 2.76533 72.2352 4.13067 73.2805 5.88C74.3258 7.62933 74.8485 9.60267 74.8485 11.8C74.8485 13.9973 74.3258 15.9707 73.2805 17.72C72.2352 19.4693 70.7952 20.8453 68.9605 21.848C67.1258 22.8293 65.0672 23.32 62.7845 23.32ZM62.7845 19.672C64.2778 19.672 65.6218 19.3413 66.8165 18.68C68.0112 17.9973 68.9498 17.0587 69.6325 15.864C70.3152 14.648 70.6565 13.2933 70.6565 11.8C70.6565 10.3067 70.3152 8.96267 69.6325 7.768C68.9498 6.552 68.0112 5.61333 66.8165 4.952C65.6218 4.26933 64.2778 3.928 62.7845 3.928C61.2912 3.928 59.9472 4.26933 58.7525 4.952C57.5578 5.61333 56.6192 6.552 55.9365 7.768C55.2538 8.96267 54.9125 10.3067 54.9125 11.8C54.9125 13.2933 55.2538 14.648 55.9365 15.864C56.6192 17.0587 57.5578 17.9973 58.7525 18.68C59.9472 19.3413 61.2912 19.672 62.7845 19.672ZM88.89 23.32C85.7967 23.32 83.386 22.456 81.658 20.728C79.93 18.9787 79.066 16.4827 79.066 13.24V0.599998H83.226V13.08C83.226 17.4747 85.1247 19.672 88.922 19.672C92.698 19.672 94.586 17.4747 94.586 13.08V0.599998H98.682V13.24C98.682 16.4827 97.818 18.9787 96.09 20.728C94.3833 22.456 91.9833 23.32 88.89 23.32ZM108.646 4.12H101.222V0.599998H120.23V4.12H112.806V23H108.646V4.12Z" fill="#25282B" />
    </svg>
  );

  return (
    <ContentArea>
      <ContentTitle>{Title}</ContentTitle>
      <Content>
        <p>contact</p>
      </Content>
      <FooterLogoArea
        handleMenuChange={handleMenuChange}
        LogoArea={LogoArea}
        VedasLogo={VedasLogo}
        PanairLogo={PanairLogo}
      />
    </ContentArea>
  )
}

export default About