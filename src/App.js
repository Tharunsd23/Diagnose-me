import './App.css';
import React from 'react'
import Header from './common_assets/header/header.js'
import Footer from './common_assets/footer/footer.js'
import HomePage from './pages/home/home.js'

function App() {
  return (
    <div className="App">
      <Header />
        <HomePage />
      <Footer />
    </div>
  );
}

export default App;
