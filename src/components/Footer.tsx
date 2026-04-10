import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Star className="h-6 w-6 fill-primary text-primary" />
              <span className="font-serif text-2xl font-bold tracking-tight text-secondary">
                Dr. Sekar <span className="text-primary">Chivukula</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Guiding souls through the ancient wisdom of Vedic Astrology. 
              Discover your cosmic blueprint and navigate life's transitions with clarity and purpose.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Dr. Sekar</Link></li>
              <li><Link to="/booking" className="text-muted-foreground hover:text-primary transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>Email: contact@sekarchivukula.com</li>
              <li>Location: Global Consultations (Online)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dr. Sekar Chivukula, PhD. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-50 italic">Ancient Wisdom for the Modern Soul</p>
        </div>
      </div>
    </footer>
  );
};
