import { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className={`w-[35px] h-[2px] bg-white ${isOpen ? 'hidden' : ''}`}></div>
      <button onClick={toggleDropdown} className="w-[35px] h-[2px] bg-white">
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="absolute top-8 left-0">
          <div className="w-[35px] h-[2px] bg-white"></div>
          <div className="w-[35px] h-[2px] bg-white"></div>
          <div className="w-[35px] h-[2px] bg-white"></div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
