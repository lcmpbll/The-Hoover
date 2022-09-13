import React from 'react';

function Footer(props){
  const footerStyles = {
  
  }
  const footerContainer = {
    background: 'linear-gradient(180deg, rgb(231, 213, 177) 11%, rgb(207, 139, 24) 95%)',
    position: 'fixed',
    bottom: '0px',
    width: '98vw',
    height: '100px',
    paddingLeft: '10px',
    display: 'flex',
    alignItems: 'center'
  }
  return(
    <div style={footerContainer}>
      <div style={footerStyles}>
        <h4>All Rights Reserved: The Hoover © 2022</h4>
      </div>
    </div>
  );
}

export default Footer;