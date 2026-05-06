import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ setCategory, activeCategory }) {
  const categories = ["General", "Sports", "Technology", "Business", "Entertainment"];

  return (
    <div className="bg-[#fdfbf7] border-b-4 border-black px-4 md:px-6 pt-2">
      <div className="py-2 md:py-4 text-center">
        <Link to="/" className="text-4xl md:text-7xl lg:text-8xl font-serif font-black uppercase  ">
          NewsPoint
        </Link>
        <p className="text-[12px] md:text-[16px] font-serif italic mt-1 uppercase ">The Daily Digital </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-3 border-t-2 border-black text-[12px] md:text-[14px] font-bold uppercase ">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat.toLowerCase());
              
            }}
            className={activeCategory === cat.toLowerCase() ? "underline underline-offset-4 decoration-2" : "hover:underline underline-offset-4"}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;