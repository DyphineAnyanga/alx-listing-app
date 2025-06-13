import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">StayMate</div>
      <input
        type="text"
        placeholder="Search properties..."
        className="mt-2 md:mt-0 border p-2 rounded w-full md:w-1/3"
      />
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="#" className="text-sm text-blue-500">Rooms</a>
        <a href="#" className="text-sm text-blue-500">Mansion</a>
        <a href="#" className="text-sm text-blue-500">Countryside</a>
        <a href="#" className="text-sm text-blue-500">Login</a>
        <a href="#" className="text-sm text-blue-500">Sign up</a>
      </div>
    </header>
  );
};

export default Header;
