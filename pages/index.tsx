import React from 'react';
import Card from '../components/common/Card';

const HomePage = () => {
  const handleBooking = () => {
    alert('Booking successful!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>
      <Card
        title="Cozy Beach House"
        description="Enjoy your stay at this beautiful beach house."
        imageUrl="/assets/sample-property.jpg"
        price={120}
        onBook={handleBooking}
      />
    </div>
  );
};

export default HomePage;
