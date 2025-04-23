import React, { useEffect } from 'react';
import ExampleComponent from '../Components/ExampleComponent';
import '../App.css';
import ExAnimation from '../Animations/ExAnimation';

const HomePage = () => {
  useEffect(() => {
    console.log("HomePage component rendered");
  }, []);
  
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default HomePage;