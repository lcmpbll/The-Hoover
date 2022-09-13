import Header from './Header';
import Footer from './Footer';
import React from 'react';
import PostControl from './PostControl';

function App() {
  const parentContainer = {
    display: 'flex',
    flexDirection: 'column'
  }
  const parentHeaderContainer = {
    
  }
  const parentFooterContainer = {
    
  }
  const parentPostControlContainer = {
    marginTop: '150px',
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <React.Fragment>
      <div style={parentContainer}>
        <div style={parentHeaderContainer}>
          <Header />
        </div>
        <div style={parentPostControlContainer}>
          <PostControl />
        </div>
        <div style={parentFooterContainer}>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
