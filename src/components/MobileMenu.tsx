
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div 
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg p-6 overflow-y-auto"
      >
        <div className="flex justify-end mb-6">
          <button 
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <a 
            href="#about" 
            onClick={onClose}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            onClick={onClose}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
          >
            Contact Us
          </a>
          <Link to="/admin/login">
            <Button variant="outline" className="w-full mt-4" onClick={onClose}>
              Admin Login
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
