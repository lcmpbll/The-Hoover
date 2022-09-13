import React from 'react';

function Footer(props){
  const footerStyles = {
  
  }
  const footerContainer = {
    background: 'linear-gradient(360deg, rgb(231, 213, 177) 11%, rgb(207, 139, 24) 95%)',
    position: 'fixed',
    bottom: '0px',
    width: '98vw',
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '10px'
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