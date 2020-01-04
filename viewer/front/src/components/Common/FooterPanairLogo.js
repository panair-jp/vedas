import React from 'react'
import ReactGA from 'react-ga';

const FooterPanairLogo = (props) => {

  const track = (menu) => {

    const action = 'Logo Click at ' + menu;

    ReactGA.event({
      category: 'Go to Panair Site',
      action: action
    });
  };

  const public_url = process.env.PUBLIC_URL;
  const panair_logo_image = public_url + '/common/logo/panair-logo_big.png';
  
  return (
    <div>
      <a onClick={()=> track(props.menu)} onTouchStart={()=> track(props.menu)} href="https://corp.panair.jp/" target="_blank" rel="noopener noreferrer"><img width="100%" src={panair_logo_image} alt="panair logo"/></a>
    </div>
  )
}

export default FooterPanairLogo