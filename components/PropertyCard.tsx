import { PropertyProps } from '@/interfaces';

export default function PropertyCard({
  name,
  address,
  rating,
  category,
  price,
  offers,
  image,
  discount,
}: PropertyProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{address.city}, {address.state}</p>
        <p className="text-sm mt-1">⭐ {rating} · {category.join(', ')}</p>
        <p className="mt-2 text-lg font-bold">KES {price.toLocaleString()}</p>
        <p className="text-sm text-green-600">{discount}</p>
        <div className="text-sm text-gray-600 mt-2">
          {offers.bed} · {offers.shower} · {offers.occupants}
        </div>
      </div>
    </div>
  );
}
