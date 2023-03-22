import React from 'react'
import './Footer.css'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
  }
  return (
    <footer className="bg-dark text-light  my-3" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; Sushmita Khadka
      </p>
    </footer>
  )
}

export default Footer
