
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
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
