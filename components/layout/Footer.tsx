import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-4 mt-10 border-t text-sm text-gray-600">
      © {new Date().getFullYear()} StayMate. All rights reserved.
    </footer>
  );
};

export default Footer;
