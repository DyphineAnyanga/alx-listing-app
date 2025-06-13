// constants/index.ts

import { PropertyProps } from '@/interfaces';

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: 'Cozy Beachfront Bungalow',
    address: {
      city: 'Mombasa',
      state: 'Coast',
      country: 'Kenya',
    },
    rating: 4.7,
    category: ['Beachfront', 'Tropical'],
    price: 150,
    offers: {
      bed: '2 Beds',
      shower: '1 Shower',
      occupants: '4 Guests',
    },
    image: '/images/property1.jpg',
    discount: '10% off',
  },
  {
    name: 'Modern City Apartment',
    address: {
      city: 'Nairobi',
      state: 'Nairobi County',
      country: 'Kenya',
    },
    rating: 4.5,
    category: ['Urban', 'Luxury'],
    price: 200,
    offers: {
      bed: '3 Beds',
      shower: '2 Showers',
      occupants: '6 Guests',
    },
    image: '/images/property2.jpg',
    discount: '15% off',
  },
  {
    name: 'Rustic Safari Lodge',
    address: {
      city: 'Maasai Mara',
      state: 'Narok',
      country: 'Kenya',
    },
    rating: 4.8,
    category: ['Safari', 'Nature'],
    price: 180,
    offers: {
      bed: '4 Beds',
      shower: '3 Showers',
      occupants: '8 Guests',
    },
    image: '/images/property3.jpg',
    discount: '20% off',
  },
  {
    name: 'Lakeview Cabin',
    address: {
      city: 'Kisumu',
      state: 'Nyanza',
      country: 'Kenya',
    },
    rating: 4.6,
    category: ['Lakefront', 'Remote'],
    price: 120,
    offers: {
      bed: '2 Beds',
      shower: '1 Shower',
      occupants: '4 Guests',
    },
    image: '/images/property4.jpg',
    discount: '5% off',
  },
];

