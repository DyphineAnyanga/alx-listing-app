import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        {/* ... rest of property content ... */}
        <ReviewSection reviews={property.reviews} />
      </div>

      <div className="md:col-span-1 sticky top-6">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};
