import React from 'react';

const Navigation = () => {
  return (
    <header className="fixed top-0 w-full z-50 nav-glass">
      <nav className="max-w-7xl mx-auto container-padding">
        <ul className="flex justify-between items-center h-11 text-sm">
          <li>
            <a href="#" className="block">
              <img 
                src="/icon-foreground.png" 
                alt="eWarrants Logo" 
                className="h-4 w-auto"
              />
            </a>
          </li>
          <li><a href="#" className="text-apple-dark hover:opacity-80 transition-opacity">Home</a></li>
          <li><a href="#" className="text-apple-dark hover:opacity-80 transition-opacity">About Us</a></li>
          <li><a href="#" className="text-apple-dark hover:opacity-80 transition-opacity">Terms & Conditions</a></li>
          <li><a href="#" className="text-apple-dark hover:opacity-80 transition-opacity">Privacy Policy</a></li>
          <li><a href="#" className="text-apple-dark hover:opacity-80 transition-opacity">Support</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;