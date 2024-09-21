import React from "react";

const Header = () => {
  return (
    <header className="header-container" style={headerStyles}>
      {/* Left Section with Logo */}
      <div style={leftSectionStyles}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flipkart_logo.png" // Flipkart logo URL
          alt="Logo"
          style={logoStyles}
        />
       
      </div>

      {/* Middle Section with Search Bar */}
      <div style={searchSectionStyles}>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          style={searchInputStyles}
        />
        <button style={searchButtonStyles}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#2874F1" fillRule="evenodd">
              <path
                className="EwE-Fa"
                d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
              ></path>
              <path
                className="EwE-Fa"
                d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      {/* Right Section with Buttons */}
      <div style={rightSectionStyles}>
        <button style={loginButtonStyles}>Login</button>
        <button style={sellButtonStyles}>Become a Seller</button>
        <span style={moreStyles}>More</span>
        <button style={cartButtonStyles}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .485.379L3.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L1.01 2H1a1 1 0 0 1-1-1zm4.383 4h8.925l1.2 6H4.29L4.383 5zM5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm9 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
          </svg>
          Cart
        </button>
      </div>
    </header>
  );
};

// Styles (in JavaScript)
const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#2874F1',
};

const leftSectionStyles = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyles = {
  height: '40px',
};

// const exploreTextStyles = {
//   fontSize: '12px',
//   marginLeft: '10px',
//   color: '#fff',
// };

// const plusTextStyles = {
//   color: '#FFD700',
//   fontWeight: 'bold',
// };

const searchSectionStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '50%',
};

const searchInputStyles = {
  width: '100%',
  padding: '10px',
  borderRadius: '2px 0 0 2px',
  border: 'none',
  outline: 'none',
};

const searchButtonStyles = {
  padding: '10px',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '0 2px 2px 0',
  cursor: 'pointer',
};

const rightSectionStyles = {
  display: 'flex',
  alignItems: 'center',
};

const loginButtonStyles = {
  backgroundColor: '#fff',
  color: '#2874F1',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '2px',
  marginRight: '10px',
  cursor: 'pointer',
};

const sellButtonStyles = {
  backgroundColor: 'transparent',
  color: '#fff',
  border: 'none',
  marginRight: '10px',
  cursor: 'pointer',
};

const moreStyles = {
  color: '#fff',
  marginRight: '10px',
  cursor: 'pointer',
};

const cartButtonStyles = {
  backgroundColor: 'transparent',
  color: '#fff',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

export default Header;


