import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        ALX Listing App
      </h1>
      <div className="flex justify-center">
        <Card 
          title="Cozy Apartment" 
          description="Beautiful apartment in the heart of the city" 
          price={99.99}
        />
      </div>
    </div>
  );
};

export default Home;