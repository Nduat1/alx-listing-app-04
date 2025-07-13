import SEARCH_IMAGE from "@public/assets/Icons/Linear/Search/Magnifier.svg";
import React, {useState} from 'react';
import ROOM_ICON from "@public/assets/images/Logos/living-room 1.svg";
import MASION_ICON from "@public/assets/images/Logos/mansion 1.svg";
import COUNTRY_ICON from "@public/assets/images/Logos/farm 1.svg";
import VILLA_ICON from "@public/assets/images/Logos/villa 1.svg";
import TROPICAL_ICON from "@public/assets/images/Logos/palm-tree 1.svg";
import NEW_ICON from "@public/assets/images/Logos/key-chain 1.svg";
import POOL_ICON from "@public/assets/images/Logos/swimming-pool.svg";
import BEACH_HOUSE_ICON from "@public/assets/images/Logos/vacation 1.svg";
import ISLAND_ICON from "@public/assets/images/Logos/island 1.svg";
import CAMPING_ICON from "@public/assets/images/Logos/tent 1.svg";
import APARTMENT_ICON from "@public/assets/images/Logos/apartment 1.svg";
import HOUSE_ICON from "@public/assets/images/Logos/home 1.svg";
import LAKE_ICON from "@public/assets/images/Logos/cottage 1.svg";
import FARM_HOUSE_ICON from "@public/assets/images/Logos/barn 1.svg";
import TREEHOUSE_ICON from "@public/assets/images/Logos/tree-house 1.svg";
import CABINS_ICON from "@public/assets/images/Logos/cabin 1.svg";
import CASTLES_ICON from "@public/assets/images/Logos/castle-tower 1.svg";

const Header: React.FC = () => {
  const accommodationTypes = [
    { name: 'Room', icon: ROOM_ICON },
    { name: 'Mansion', icon: MASION_ICON },
    { name: 'Countryside', icon: COUNTRY_ICON },
    { name: 'Villa', icon: VILLA_ICON },
    { name: 'Tropical', icon: TROPICAL_ICON },
    { name: 'New', icon: NEW_ICON },
    { name: 'amazing pool', icon: POOL_ICON },
    { name: 'Beach house', icon: BEACH_HOUSE_ICON },
    { name: 'Island', icon: ISLAND_ICON },
    { name: 'Camping', icon: CAMPING_ICON },
    { name: 'Apartment', icon: APARTMENT_ICON },
    { name: 'House', icon: HOUSE_ICON },
    { name: 'Lakefront', icon: LAKE_ICON },
    { name: 'Farm house', icon: FARM_HOUSE_ICON },
    { name: 'Treehouse', icon: TREEHOUSE_ICON },
    { name: 'Cabins', icon: CABINS_ICON },
    { name: 'Castles', icon: CASTLES_ICON },
  ];

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      {/* Top Banner - Same for all sizes */}
      <div className="bg-emerald-600 text-white text-sm text-center py-2 px-4 flex items-center justify-center">
        <span>🧳 Overseas trip? Get the latest information on travel guides</span>
        <button className="ml-3 bg-black bg-opacity-20 text-white px-3 py-1 rounded-full text-xs hover:bg-opacity-40">
          More Info
        </button>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white">
        {/* Logo - Slightly larger on mobile */}
        <div className="text-2xl md:text-2xl font-bold text-gray-800">
          al<span className="text-black">x</span>
        </div>

        {/* Search Bar - Hidden on mobile, shown on tablet/desktop */}
        <div className="hidden md:flex items-center justify-between bg-white border rounded-full shadow-sm w-2/3 max-w-3xl px-4 py-2">
          <input
            type="text"
            placeholder="Location"
            className="w-1/4 px-2 py-1 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Check in"
            className="w-1/5 px-2 py-1 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Check out"
            className="w-1/5 px-2 py-1 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="People"
            className="w-1/4 px-2 py-1 outline-none text-sm"
          />
          <button className="ml-2 bg-yellow-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
            <img src={SEARCH_IMAGE} alt="Search" className="w-4 h-4" />
          </button>
        </div>

        {/* Buttons - Enlarged on mobile */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <button className="text-emerald-600 font-medium hover:underline text-sm md:text-base">
            Sign in
          </button>
          <button className="bg-emerald-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-emerald-700 text-sm font-semibold">
            Sign up
          </button>
        </div>
      </div>

      {/* Accommodation Types - Enlarged on mobile/tablet */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-2 md:px-4 py-2 md:py-3 overflow-x-auto">
          <nav className="flex space-x-4 md:space-x-6 lg:space-x-8 whitespace-nowrap">
            {accommodationTypes.map((type, index) => (
              <a 
                key={index}
                href="#"
                className="flex flex-col items-center text-gray-800 hover:text-emerald-600 transition-colors group min-w-[60px] md:min-w-[70px]"
              >
                <img 
                  src={type.icon} 
                  alt={type.name} 
                  className="w-7 h-7 md:w-6 md:h-6 mb-1 group-hover:scale-110 transition-transform"
                />
                <span className="text-xs md:text-xs font-medium">{type.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;