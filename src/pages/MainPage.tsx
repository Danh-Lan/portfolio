import React from 'react';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Header from '../components/Header';
import Competitions from '../components/Competitions';

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
      <div>
        <h2 className="text-3xl font-semibold mb-4 flex items-center">
          Compétitions
        </h2>
        <Competitions />
      </div>
    </>
  );
};

export default MainPage;