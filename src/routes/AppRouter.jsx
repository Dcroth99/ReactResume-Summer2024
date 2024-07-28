import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Certs from '../components/Certs';
import Wavesproject from '../components/Wavesproject';
import Todo from '../components/Todo';
import Portfolio from '../components/Portfolio';


function AppRouter() {
  console.log('Rendering AppRouter');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certs />} />
        <Route path="/projects/waves" element={<Wavesproject />} />
        <Route path="/projects/todo" element={<Todo />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default AppRouter;
