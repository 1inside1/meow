import React from 'react';
import '../assets/styles.css';

const Section = ({ title, children, linkText, linkHref = "#" }) => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>{title}</h2>
        {linkText && <a href={linkHref}>{linkText}</a>}
      </div>
      {children}
    </section>
  );
};

export default Section;