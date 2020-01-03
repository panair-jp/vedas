import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import WindowSizeService from '../../../services/window_size'

const WatchoutArea = (props) => {

  const dict = props.dict;
  const checkedCount = props.checkedCount;

  let WatchoutArea = styled.div`
  margin-top: ${450 + (350 * checkedCount)}px;
  margin-left: 6%;
`;

  let WatchoutTitle = styled.div`
  font-family: Roboto;
  font-size: 28px;
  color: #000;

  margin-top: 10%;
  
  line-height: 21px;
`;

  let WatchoutTexts = styled.div`
  font-family: Roboto;
  font-size: 16px;
  color: #000;

  margin-top: 5%;
  
  line-height: 36px;
`;

  if (isMobile) {
    const window_height = WindowSizeService.getWindowHeightSize();
    
    let intervalHeight = 0;

    if (window_height > 800){
      intervalHeight = 280;
    } else if (window_height > 700){
      intervalHeight = 315;
    } else if (window_height > 600){
      intervalHeight = 280;
    }

    WatchoutArea = styled(WatchoutArea)`margin-top: ${325 + (intervalHeight * checkedCount)}px; width: 89%;`;
  }

  return (
    <WatchoutArea>
      <WatchoutTitle>
        <p>{dict.watchout}</p>
      </WatchoutTitle>
      <WatchoutTexts>
        <p>{dict.watchout_info2}</p>
        <p>{dict.watchout_info3}</p>
        <p>{dict.watchout_info4}</p>
        <p>{dict.watchout_info5}</p>
      </WatchoutTexts>
    </WatchoutArea>
  )
}

export default WatchoutArea