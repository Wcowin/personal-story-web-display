
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">MyPortfolio</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
