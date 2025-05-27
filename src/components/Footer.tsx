
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg">J Sai Rakshith</h3>
            <p className="text-gray-400 text-sm mt-1"></p>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} J Sai Rakshith. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
