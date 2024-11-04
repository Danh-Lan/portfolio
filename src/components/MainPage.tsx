import React from 'react';
import Experiences from './Experiences';
import Projects from './Projects';
import Header from './Header';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          Expériences
        </h2>
        <Experiences />
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          Projets
        </h2>
        <Projects />
      </div>
    </>
  );
};

export default MainPage;