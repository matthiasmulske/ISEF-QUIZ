import React from "react";

function LoginButton({ buttonLabel, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-primary"
      style={buttonStyles}
    >
      {buttonLabel}
    </button>
  );
}

const buttonStyles = {
  fontSize: "24px",
  padding: "15px 30px", 
  borderRadius: "8px",
  width: "300px", 
  height: "80px", 
  margin: "auto", 
  display: "block", 
  textDecoration: "none",
};

export default LoginButton;
