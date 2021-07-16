import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
      <ul className="social">
        <li><a href="#" aria-label="find us on Facebook"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#" aria-label="find us on Instagram"><i className="fab fa-instagram-square"></i></a></li>
        <li><a href="#" aria-label="find us on Twitter"><i className="fab fa-twitter"></i></a></li>
      </ul>
      <nav aria-label="Legal" className="footer-nav">
        <ul className="legal">
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Accessibility Policy</a></li>
        </ul>
      </nav>
      <p className="copyright">&copy; Copyright, 1991.</p>
    </footer>
    )
}

export default Footer