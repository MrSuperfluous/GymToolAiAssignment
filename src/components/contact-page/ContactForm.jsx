import React from 'react';

const ContactForm = () => {
  return (
    <div style={styles.container}>
      {/* Logo and Title */}
      <div style={styles.logoContainer}>
        <img
          src="logo.png" /* Replace with your logo file */
          alt="GymFluencer Logo"
          style={styles.logo}
        />
        <h1 style={styles.title}>GymFluencer</h1>
      </div>

      {/* Tagline */}
      <p style={styles.tagline}>Where Fitness Meets Social Connection!</p>

      {/* Email Contact */}
      <div style={styles.emailContainer}>
        <span style={styles.icon}>✉️</span>
        <a
          href="mailto:hello@gym.birlaventures.com"
          style={styles.email}
        >
          hello@gym.birlaventures.com
        </a>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#0d0d0d',
    color: '#f2f2f2',
    fontFamily: 'Arial, sans-serif',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logo: {
    width: '60px',
    height: '60px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#fff',
  },
  tagline: {
    margin: '20px 0',
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  emailContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: '10px 20px',
    borderRadius: '8px',
    marginTop: '10px',
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.5rem',
  },
  email: {
    color: '#f2f2f2',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default ContactForm;
