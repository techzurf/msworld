import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Phone, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Haj / Umrah", path: "/haj" },
  { name: "Visa", path: "/visa" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const location = useLocation();
  const isHajPage = location.pathname.startsWith("/haj");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl", 
              "bg-brand-primary"
            )}>
              MS
            </div>
            <div className="flex flex-col">
              <span className="font-black text-brand-primary leading-none tracking-tight text-lg">MS WORLD</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-secondary">Travel Services</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
              const isHajItem = item.path === "/haj";
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-semibold transition-colors duration-200 py-2",
                    isActive
                      ? "text-brand-primary border-b-2 border-brand-primary pb-1"
                      : "text-slate-600 hover:text-brand-primary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a href="tel:+919884353228" className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98843 53228</span>
            </a>
            <a 
              href="https://wa.me/919884353228" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all active:scale-95"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden p-2 text-slate-600 active:bg-slate-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-slate-100 shadow-xl flex flex-col px-4 py-4 gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-bold transition-colors",
                  isActive
                    ? "bg-brand-primary/10 text-brand-primary"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
