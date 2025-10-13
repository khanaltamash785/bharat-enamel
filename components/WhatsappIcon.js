import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '918299497567'; // WhatsApp format: country code + number (no + or spaces)
  const message = 'Hello! I would like to know more about your services.'; // Default message
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 active:scale-105 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        {/* {/* Pulse Animation Ring 
        <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-20"></span> */}
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg transition-opacity duration-200">
            Chat with us!
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </a>
        {/* 
      {/* Optional: Notification Badge 
      <div className="fixed bottom-20 right-6 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center z-50 animate-bounce">
        1
      </div> */}
    </>
  );
}