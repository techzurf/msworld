import { useEffect } from "react";

export function Store() {
  useEffect(() => {
    // Only append the script if it doesn't already exist to prevent duplicates
    if (!document.querySelector('script[src="https://simplestores.in/api/public/store/meezon/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://simplestores.in/api/public/store/meezon/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary/90 to-brand-primary/40 text-white py-16 px-4 text-center overflow-hidden relative">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4">MS World Travels Store</h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-xl mx-auto text-balance">
            Explore our travel products and services.
          </p>
        </div>
      </section>

      {/* Store Embed Area */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full min-h-[50vh] flex-1">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-4 md:p-8 min-h-[500px]">
          {/* SimpleStores Anchor */}
          <div id="simplestores-store"></div>
        </div>
      </section>
    </div>
  );
}
