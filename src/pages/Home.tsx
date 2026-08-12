import { ArrowRight, Plane, FileText, Map, ShieldCheck, Hotel, Stamp, Compass, CreditCard, Star, Users, CheckCircle2, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const quickServices = [
    { name: "Flight Tickets", icon: Plane },
    { name: "Visa Assistance", icon: FileText },
    { name: "Tour Packages", icon: Map },
    { name: "Travel Insurance", icon: ShieldCheck },
    { name: "Hotel Booking", icon: Hotel },
    { name: "Attestation", icon: Stamp },
    { name: "Haj & Umrah", icon: Compass },
    { name: "Forex", icon: CreditCard },
  ];

  const popularDestinations = [
    { name: "Saudi Arabia", desc: "Spiritual & Business Travel", img: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=800&auto=format&fit=crop" },
    { name: "United Arab Emirates", desc: "Luxury & Shopping", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop" },
    { name: "Oman", desc: "Culture & Landscapes", img: "https://images.unsplash.com/photo-1589803138865-c32c253c0cb9?q=80&w=800&auto=format&fit=crop" },
    { name: "Maldives", desc: "Tropical Paradise", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop" 
          alt="Travel Hero" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center text-center px-5 max-w-4xl mx-auto mt-8 md:mt-0">
          <span className="text-brand-secondary font-bold uppercase tracking-widest text-xs mb-4">Trust & Excellence Since 1998</span>
          <h1 className="text-[clamp(2.25rem,8vw,4.5rem)] font-black text-white leading-[1.1] mb-6 px-2">
            Your Journey, <br />Our Responsibility
          </h1>
          <p className="text-blue-50 text-base md:text-xl font-medium mb-10 max-w-2xl text-balance">
            Flights, Visas, Tours, Travel Assistance and Haj & Umrah Services — all under one trusted travel partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/contact" className="bg-brand-secondary w-full sm:w-auto hover:bg-brand-secondary/90 text-white font-bold py-3.5 px-8 rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-xl shadow-brand-secondary/20 text-sm h-12">
              Plan Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/919884353228" target="_blank" rel="noopener noreferrer" className="bg-white/10 w-full sm:w-auto hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-3.5 px-8 rounded-xl transition-all text-center flex items-center justify-center text-sm h-12">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Service Grid */}
      <section className="relative z-30 mt-8 md:-mt-12 px-4 max-w-7xl mx-auto w-full mb-16">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {quickServices.map((service) => (
            <div key={service.name} className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center group hover:border-brand-accent transition-colors cursor-pointer">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-accent mb-3 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                <service.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-slate-800 leading-tight group-hover:text-brand-accent transition-colors">{service.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Visa Section */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-3">Visa Assistance Made Simple</h2>
            <p className="text-slate-500 font-medium text-lg">Fast, reliable, and hassle-free visa processing for your global destinations.</p>
          </div>
          <Link to="/visa" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Explore Visa Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["UAE Visa", "Saudi Visa", "Tourist Visas", "Visit Visas", "Business Visas"].map((visa, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col items-start gap-4 hover:shadow-lg hover:border-brand-primary/20 transition-all cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900">{visa}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Haj & Umrah Highlight (Distinct Design) */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 to-haj-secondary">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1591834907153-276e01768822?q=80&w=2000&auto=format&fit=crop" alt="Kaaba" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-haj-primary/10 blur-[80px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 blur-[80px] rounded-full mix-blend-screen" />
        </div>
        
        <div className="relative z-10 px-4 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-haj-primary/20 text-haj-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
              <Compass className="w-3 h-3" /> Sacred Service
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">Begin Your Sacred Journey</h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 max-w-2xl text-balance">
            Complete Haj & Umrah travel assistance with carefully planned packages and dedicated support from our experienced team.
          </p>
          <Link to="/haj" className="bg-haj-primary hover:bg-haj-primary/90 text-slate-950 font-black py-4 px-10 rounded-2xl transition-all text-center flex items-center justify-center shadow-xl shadow-haj-primary/20">
            Explore Haj & Umrah
          </Link>
        </div>
      </section>

      {/* Popular Destinations (Horizontal Scroll on Mobile) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-4 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-10">Popular Destinations</h2>
          
          <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x">
            {popularDestinations.map((dest, i) => (
              <div key={i} className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group snap-center shrink-0">
                <div className="h-48 overflow-hidden relative">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{dest.name}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-4">{dest.desc}</p>
                  <button className="text-brand-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#F4F7FB]">
        <div className="px-4 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 mb-6 leading-tight">Your Trusted Travel Partner</h2>
            <p className="text-slate-600 text-lg mb-8 text-balance">
              With years of established experience, MS World Travels provides comprehensive travel solutions. From simple flight bookings to complex visa processing and sacred pilgrimage journeys, we handle every detail with care.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              About MS World Travels
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Experienced Professionals", icon: Users },
              { title: "Complete Assistance", icon: Star },
              { title: "Dedicated Visa Support", icon: CheckCircle2 },
              { title: "Personalized Support", icon: Phone },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#DCE6F5] py-16 md:py-24">
        <div className="px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-brand-primary mb-6">Ready to Plan Your Journey?</h2>
          <p className="text-slate-700 text-lg mb-10">Get in touch with our travel experts today and let us handle all your travel requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="tel:+919884353228" className="bg-white text-brand-primary font-bold py-4 px-8 rounded-xl transition-all text-center shadow-md hover:shadow-lg active:scale-95">
              Call Now
            </a>
            <a href="https://wa.me/919884353228" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all text-center shadow-md shadow-green-600/30 hover:bg-green-700 active:scale-95 flex items-center justify-center gap-2">
              WhatsApp Us
            </a>
            <Link to="/contact" className="border-2 border-brand-primary text-brand-primary font-bold py-4 px-8 rounded-xl transition-all text-center hover:bg-brand-primary/5 active:scale-95">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
