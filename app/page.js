import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h2>Welcome to HabitHub</h2>
        <p>Your personal task and habit tracker.</p>
        {/* Здесь будет отображаться TaskList позже */}
      </main>
      <Footer />
    </div>
  );
}