import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import ExampleComponent from './Components/ExampleComponent';
import AnimatedText from './Animations/ExAnimation';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ExampleComponent />
      <AnimatedText />
      {/* Removed duplicate component */}
    </div>
  );
}

export default App;