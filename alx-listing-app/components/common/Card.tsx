import React from 'react';
import { CardProps } from '../../interfaces';
import Button from './Button';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  imageUrl = '/assets/placeholder.jpeg', 
  price 
}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md max-w-sm">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {price && (
          <div className="text-lg font-semibold mb-4">
            ${price.toFixed(2)} per night
          </div>
        )}
        <div className="flex justify-between">
          <Button label="Details" variant="secondary" />
          <Button label="Book Now" variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default Card;