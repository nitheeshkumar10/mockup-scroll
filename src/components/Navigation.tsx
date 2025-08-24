import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="fixed top-0 w-full z-50 nav-glass">
      <nav className="max-w-7xl mx-auto container-padding">
        <ul className="flex justify-between items-center h-11 text-sm">
          <li>
            <Link to="/" className="block">
              <img 
                src="/icon-foreground.png" 
                alt="eWarrants Logo" 
                className="h-4 w-auto"
              />
            </Link>
          </li>
          <li><Link to="/" className="text-apple-dark hover:opacity-80 transition-opacity">Home</Link></li>
          <li><a href="#about" className="text-apple-dark hover:opacity-80 transition-opacity">About Us</a></li>
          <li><Link to="/terms-conditions" className="text-apple-dark hover:opacity-80 transition-opacity">Terms & Conditions</Link></li>
          <li><Link to="/privacy-policy" className="text-apple-dark hover:opacity-80 transition-opacity">Privacy Policy</Link></li>
          <li><a href="#support" className="text-apple-dark hover:opacity-80 transition-opacity">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;