// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaMediumM,
  FaTiktok,
} from 'react-icons/fa';
import './footer-style.css'; // Custom CSS for any specific styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center mb-3">
          <Col className="d-flex justify-content-center">
            <FaFacebookF className="mx-2 footer-icon" />
            <FaInstagram className="mx-2 footer-icon" />
            <FaYoutube className="mx-2 footer-icon" />
            <FaTwitter className="mx-2 footer-icon" />
            <FaLinkedinIn className="mx-2 footer-icon" />
            <FaMediumM className="mx-2 footer-icon" />
            <FaTiktok className="mx-2 footer-icon" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center mb-2">
            <span>Copyright © 2024 Recipe Collection, Inc.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
