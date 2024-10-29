import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>This is the footer</p>
    </footer>
  );
}

const footerStyle = {
    backgroundColor: '#4b0512a6',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: '0',
    width: '100%'
  };
  

export default Footer;