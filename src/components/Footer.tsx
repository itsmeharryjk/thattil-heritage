
import { Instagram, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-thattil-brown text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center space-x-6">
            <Link 
              to="https://instagram.com/thattilheritage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-thattil-gold transition-colors duration-300"
            >
              <Instagram size={20} />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
            <p className="font-opensans text-sm flex items-center">
              <Copyright size={16} className="mr-1" /> {currentYear} Thattil Heritage. All rights reserved.
            </p>
          </div>
          
          <div className="font-opensans text-sm text-thattil-gold">
            Designed and developed by IPMMA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
