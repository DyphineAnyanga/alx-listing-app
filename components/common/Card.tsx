import React from 'react';
import { CardProps } from '../../interfaces';
import Image from 'next/image';
import Button from './Button';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, onBook }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden max-w-sm">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="font-bold text-gray-800 mb-3">${price} / night</p>
        <Button label="Book Now" onClick={onBook} />
      </div>
    </div>
  );
};

export default Card;



