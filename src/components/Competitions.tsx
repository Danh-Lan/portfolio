import React from 'react';
import competitions from '../data/competitions.json';
import { Competition } from '../types/Competition';

const Competitions: React.FC = () => {
  return (
    <div className="bg-white text-black p-4">
      {competitions.map((competition: Competition, index: number) => (
        <div 
          key={index} 
          className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 transition-shadow hover:shadow-xl"
        >
          <h3 className="text-xl font-bold mb-2">{competition.title}</h3>
          <p className="mb-2">{competition.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Competitions;