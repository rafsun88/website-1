
import React from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMobileMenu }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-blue-600">SkyBrand</a>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>
          
          <Link to="/admin/login">
            <Button variant="outline" className="hidden md:flex">
              Admin Login
            </Button>
          </Link>
        </div>
        
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Open mobile menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
