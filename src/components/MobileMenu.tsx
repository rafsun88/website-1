
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col md:hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold text-blue-600">SkyBrand</h2>
        <button 
          onClick={onClose}
          className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
          aria-label="Close mobile menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex flex-col p-4 space-y-4">
        <a href="#features" onClick={onClose} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Features</a>
        <a href="#testimonials" onClick={onClose} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Testimonials</a>
        <a href="#pricing" onClick={onClose} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Pricing</a>
        <a href="#contact" onClick={onClose} className="text-gray-700 hover:text-blue-600 transition-colors py-2">Contact</a>
      </nav>
      
      <div className="mt-auto p-4 flex flex-col space-y-2">
        <Button variant="outline" className="w-full">Log In</Button>
        <Button className="w-full">Sign Up</Button>
      </div>
    </div>
  );
};

export default MobileMenu;
