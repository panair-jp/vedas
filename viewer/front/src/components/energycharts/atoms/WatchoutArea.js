import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import WindowSizeService from 'services/window_size'
import Color from 'services/color';

const WatchoutArea = (props) => {

  const dict = props.dict;
  const checkedCount = props.checkedCount;

  const StyledComponents = getStyledComponents(checkedCount);
  const WatchoutArea = StyledComponents.WatchoutArea;
  const WatchoutTitle = StyledComponents.WatchoutTitle;
  const WatchoutTexts = StyledComponents.WatchoutTexts;

  return (
    <WatchoutArea>
      <WatchoutTitle>
        <p>{dict.watchout}</p>
      </WatchoutTitle>
      <WatchoutTexts>
        <p>{dict.watchout_info1}</p>
        <p>{dict.watchout_info2}</p>
        <p>{dict.watchout_info3}</p>
        <p>{dict.watchout_info4}</p>
        <p>{dict.watchout_info5}</p>
      </WatchoutTexts>
    </WatchoutArea>
  )
}

const getStyledComponents = (checkedCount) => {

  let WatchoutArea = styled.div`
  padding: 0% 0% 0% 0%;
  margin:  ${450 + (350 * checkedCount)}px 0% 0% 6%;
`;

  let WatchoutTitle = styled.div`
  font-family: Roboto;
  font-size: 28px;
  color: ${Color.black};

  padding: 0% 0% 0% 0%;
  margin:  10% 0% 0% 0%;
  
  line-height: 21px;
`;

  let WatchoutTexts = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: ${Color.black};

  padding: 0% 0% 0% 0%;
  margin:  5% 5% 0% 0%;
  
  line-height: 36px;
`;

  if (isMobile) {
    const window_height = WindowSizeService.getWindowHeightSize();
    
    let intervalHeight = 0;

    if (window_height > 800){
      intervalHeight = 320;
    } else if (window_height > 700){
      intervalHeight = 355;
    } else if (window_height > 600){
      intervalHeight = 320;
    }

    WatchoutArea = styled(WatchoutArea)`margin-top: ${525 + (intervalHeight * checkedCount)}px; width: 89%;`;
  }

  return {
    WatchoutArea : WatchoutArea,
    WatchoutTitle : WatchoutTitle,
    WatchoutTexts : WatchoutTexts
  };
}

export default WatchoutArea