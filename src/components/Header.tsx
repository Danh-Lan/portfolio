import React from 'react';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Header: React.FC = () => {
  return (
    <div className="text-black p-8 rounded-lg shadow-lg mb-8 bg-white">
      <h1 className="text-4xl font-bold text-center mb-2">Danh Lan NGUYEN</h1>
      <div className="text-center mb-4">
        <p className="text-lg text-gray-700">danhlan.nguyen1@gmail.com</p>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/nguyen-danh-lan/" className="transition-transform transform hover:scale-110">
          <img
            src={linkedin}
            alt="LinkedIn"
            className="w-8 h-8"
          />
        </a>
        <a href="https://github.com/Danh-Lan" className="transition-transform transform hover:scale-110">
          <img
            src={github}
            alt="GitHub"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;