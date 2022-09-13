import React from 'react';


function Header() {
  const headerStyles = {
    textAlign: 'center',
    width: '100%',
    marginLeft: '0px',
  }
  const headerContainer = {
    display: 'flex',
    justifyContent: 'center',
    background: 'linear-gradient(360deg, rgb(231, 213, 177) 11%, rgb(207, 139, 24) 95%)',
    
  }
  return(
    <React.Fragment>
      <div style={headerContainer}>
        <div style={headerStyles}>
          <h1>The Hoover</h1>
          <h6>Come scream into the void</h6>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;