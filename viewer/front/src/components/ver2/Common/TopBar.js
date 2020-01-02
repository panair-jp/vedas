import React from 'react'
import styled from 'styled-components';
import { AppProvider, Select } from '@shopify/polaris';
import { isMobile } from "react-device-detect";

const baseUrl = process.env.REACT_APP_FRONT_BASE_URL + '/';

const TopBar = (props) => {

  const lang = props.lang;
  const menu = props.menu;
  const handleMenuChange = props.handleMenuChange;
  const handleLangChange = props.handleLangChange;
  const public_url = process.env.PUBLIC_URL;
  const vedas_logo_top_bar_image = public_url + '/vedas_v1.png';

  let TopBarArea = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 1440px;
    z-index: 999;
  `;
  let VedasLogoTopBar = styled.div`
      padding-top: 1.5%;
      padding-left: 3%;
      padding-bottom: 3%;
      width: 245px;
  `;
  let MobileDropdown = styled.div`
      display: none;
    `;
  let MenuArea = styled.div`
      position: absolute;
      width: 53%;
      margin-left: 45%;
      padding-left: 3%;
      padding-right: 2%;
      height: 56%;
      top: 17%;

      background: #EFEFEF;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 12px;
    `;
  let MenuItem = styled.div`
      padding-left: 3%;
      padding-right: 3%;
      display: inline-block;
      vertical-align: middle;
      font-family: Roboto;
      font-size: 140%;
      letter-spacing: 0.03em;
      cursor: pointer;
      color: #4E4E4E;
    `;
  let MenuItemDropdownWrapper = styled.div`
      width: 28%;
      padding-top: 2.5%;
      padding-left: 7%;
      padding-right: 2%;
      display: inline-block;
    `;

  if (isMobile) {
    TopBarArea = styled(TopBarArea)`
      width:100%;
      height: 8%;
      border-radius: 12px;
      background: #efefef;
      opacity: 0.7;
    `;
    VedasLogoTopBar = styled(VedasLogoTopBar)`
      display: none;
    `;
    MobileDropdown = styled(MobileDropdown)`
      margin: 1%;
      position: relative;
      display: inline-block;
    `;
    MenuArea = styled(MenuArea)`
      position: absolute;
      height: 0%;
      width: 100%;
      margin-left: 0%;
      padding-left: 0%;
      padding-right: 0%;
      margin-right: 10%;
      top: 0%;
      border: 1px solid #fff;
      box-sizing: border-box;
      border-radius: 12px;
    `;
    MenuItem = styled(MenuItem)`
      display: none;
    `;
    MenuItemDropdownWrapper = styled(MenuItemDropdownWrapper)`
      width: 160px;
      margin-top: 1%;
      margin-right: 25%;
      padding-top: 0%;
      padding-left: 0%;
      padding-right: 0%;
      display: inline-block;
    `;
  }

  return (
    <TopBarArea>
      <VedasLogoTopBar>
        <a href={baseUrl + '?lang=' + lang}><img width="100%" src={vedas_logo_top_bar_image} alt="top bar logo" /></a>
      </VedasLogoTopBar>
      <MenuArea>
        <MenuItem>
          <p onClick={() => handleMenuChange('usage')}>Usage</p>
        </MenuItem>
        <MenuItem>
          <p onClick={() => handleMenuChange('about')}>About</p>
        </MenuItem>
        <MenuItem>
          <p onClick={() => handleMenuChange('news')}>News</p>
        </MenuItem>
        <MenuItem>
          <p onClick={() => handleMenuChange('contact')}>Contact</p>
        </MenuItem>
        <MenuItemDropdownWrapper>
          <AppProvider>
            <Select
              key="id-lang-item-dropdown"
              options={[
                { value: "jp", label: "japanese" }, 
                { value: "en", label: "english" }, 
                { value: "ch", label: "china" }
              ]}
              onChange={(value) => handleLangChange(value)}
              value={lang}
            />
          </AppProvider>
        </MenuItemDropdownWrapper>
              <MobileDropdown>
        <AppProvider>
          <Select
            key="id-menu-item-dropdown"
            options={[
              { value: "home", label: "home" }, 
              { value: "usage", label: "usage" }, 
              { value: "about", label: "about" },
              { value: "news", label: "news" },
              { value: "contact", label: "contact" },
            ]}
            onChange={(value) => handleMenuChange(value)}
            value={menu}
          />
        </AppProvider>
      </MobileDropdown>
      </MenuArea>
    </TopBarArea>
  )
}

export default TopBar