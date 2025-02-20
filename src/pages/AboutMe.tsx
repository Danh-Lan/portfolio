import React, { useEffect, useState } from 'react';
import aboutMeData from '../data/aboutMe.json';
import { AboutMeData } from '../types/AboutMe';

const AboutMe: React.FC = () => {
  const [data, setData] = useState<AboutMeData | null>(null);

  useEffect(() => {
    setData(aboutMeData as AboutMeData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <p className="mb-8">{data.aboutMe.description}</p>
      <h2 className="text-3xl font-semibold mb-4">{data.hobbies.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {data.hobbies.items.map((hobby, index) => (
          <div key={index} className="bg-green-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
            <p>
              {hobby.description}
              {hobby.link && (
                <>
                  {' '}
                  <a href={hobby.link.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    {hobby.link.text}
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;