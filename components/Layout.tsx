
import React from 'react';
import { Menu, X } from 'lucide-react';

export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Accounting for the fixed header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update URL hash without jumping
    window.history.pushState(null, '', `#${id}`);
  }
};

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-effect top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between h-16 items-center">
          {/* Removed the NB. branding div from here */}
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-slate-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  scrollToSection(e, item.id);
                  setIsOpen(false);
                }}
                className="text-slate-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Nivetha B</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Passionate Computer Science student ready to contribute and grow in the tech industry.
        </p>
        <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nivetha B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
