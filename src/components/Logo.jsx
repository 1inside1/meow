import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="logo-container" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
      <img
        src="/images/ui/logo_face.png"
        alt="Северяночка"
        style={{ width: '40px', height: '32px', objectFit: 'contain' }}
      />
      <img
        src="/images/ui/wordmark.png"
        alt="СЕВЕРЯНОЧКА"
        style={{ height: '20px', objectFit: 'contain' }}
      />
    </Link>
  );
};

export default Logo;