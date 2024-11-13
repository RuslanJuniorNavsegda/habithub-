import React from 'react';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <main>
      <TaskList />
    </main>
    <Footer />
  </div>
);

export default Home;