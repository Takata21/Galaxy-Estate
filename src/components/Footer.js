import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="flex items-center justify-center p-2 my-3 b23">
      <p className="font-semibold m-0">© {year} FaState, Inc.</p>
    </footer>
  );
};

export default Footer;
