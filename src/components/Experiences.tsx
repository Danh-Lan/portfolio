import React from 'react';
import internships from '../data/internships.json';
import { Internship } from '../types/Internship';

const Experiences: React.FC = () => {
  return (
    <div className="bg-white text-black p-4">
      {internships.map((internship: Internship, index: number) => (
        <div 
          key={index} 
          className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 transition-shadow hover:shadow-xl"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">{internship.title} - {internship.company}</h3>
            <p className="italic">{internship.period}</p>
          </div>
          <p className="font-semibold mb-4">{internship.technologies}</p>
          <p>{Array.isArray(internship.mainDescription) ? internship.mainDescription.join(' ') : internship.mainDescription}</p>
          <ul className="list-disc list-inside">
            {internship.subDescription.map((description, indexSubDescription) => (
              <li key={indexSubDescription}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experiences;