import React from 'react'
import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import Color from 'services/color';

const Email = (props) => {

  const dict = props.dict;
  const email = props.email;
  const handleEmailChange = props.handleEmailChange;
  const removeError = props.removeError;
  const StyledComponents = getStyledComponents();
  const EmailLabel = StyledComponents.EmailLabel;

  return (
    <div>
      <EmailLabel>{dict.contact_item_mail}</EmailLabel>
      <input
        key="key_email"
        id="id_email"
        className={isMobile ? "email-input-mobile" : "email-input"}
        type="email"
        minLength="1"
        maxLength="254"
        placeholder={dict.contact_place_folder2}
        onFocus={() => removeError("id_email")}
        onChange={(event) => { handleEmailChange(event) }}
      />
      <input
        key="key_email_hidden"
        id="id_email_hidden"
        type="hidden"
        defaultValue={email}
      />
    </div>
  )
}

const getStyledComponents = () => {

  let EmailLabel = styled.label`
  font-family: Montserrat;
  font-size: 18px;
  color: ${Color.darkGray};

  height: 10%;
  width: 40%;

  padding: 0% 0% 0% 0%;
  margin:  0% 0% 0% 0%;
  
  position: absolute;
  top: 21%;
  left: 54%;
  right: 0%;
  bottom: 0%;
  
  line-height: 20px;
  `;

  if (isMobile) {
    EmailLabel = styled(EmailLabel)`
    font-size: 16px;

    height: 4%;
    
    top: 34%;
    `;
  }

  return {
    EmailLabel : EmailLabel
  };
}

export default Email