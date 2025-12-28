"use client";

import Navbar from "../components/Navbar";
import ScrollAnimation from "../components/ScrollAnimation";

const INSTAGRAM_USERNAME = "stefanovictattoo";

export default function Home() {
  const instagramUrl = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-black to-black"></div>
        <div 
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <ScrollAnimation delay={0}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 text-red-400 text-sm uppercase tracking-widest mb-8">
                Profesionalni Tattoo Studio
              </span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none">
              <span className="block text-white drop-shadow-2xl animate-fade-in">stefanović</span>
              <span className="block text-red-600 drop-shadow-2xl animate-fade-in-delay">tattoo</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide">
              Gde umetnost susreće kožu
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Kreiranje jedinstvenih tetovaža koje pričaju vašu priču
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-none border-2 border-red-600 hover:border-red-700 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm overflow-hidden"
                aria-label="Zakazite termin na Instagramu"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="relative z-10">Zakazi termin</span>
                <span className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" aria-hidden="true"></span>
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#gallery");
                  if (element) {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="inline-block bg-transparent hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-none border-2 border-white/30 hover:border-white transition-all duration-300 uppercase tracking-wider text-sm"
                aria-label="Pogledaj galeriju tetovaža"
              >
                Vidi Galeriju
              </a>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#about");
              if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="flex flex-col items-center text-gray-400 hover:text-red-600 transition-colors"
            aria-label="Skroluj na sekciju O nama"
          >
            <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl font-bold mb-12 text-center text-red-600 uppercase tracking-wide">
              O nama
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation delay={0}>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Dobrodošli u <span className="text-red-600 font-semibold">stefanović tattoo</span>, 
                  mesto gde se tradicionalna tetovaža susreće sa modernim dizajnom.
                </p>
                <p>
                  Naš tim iskusnih umetnika posvećen je stvaranju jedinstvenih, 
                  visokokvalitetnih tetovaža koje odražavaju vašu ličnost i priču. 
                  Koristimo samo najkvalitetnije materijale i pratiramo najstrožije 
                  standarde higijene i bezbednosti.
                </p>
                <p>
                  Sa godinama iskustva i strastvenim pristupom umetnosti tetovaže, 
                  pružamo personalizovane usluge koje prevazilaze očekivanja.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <div className="bg-gray-800 p-8 border-l-4 border-red-600 hover:shadow-2xl hover:shadow-red-600/20 transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Naša filozofija</h3>
                <p className="text-gray-300">
                  Verujemo da je svaka tetovaža umetničko delo koje treba da traje 
                  ceo život. Zato pažljivo radimo sa svakim klijentom kako bismo 
                  stvorili nešto što će biti izvor ponosa i radosti godinama.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-black scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl font-bold mb-12 text-center text-red-600 uppercase tracking-wide">
              Galerija
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <ScrollAnimation key={i} delay={i * 50}>
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 border-2 border-red-600 mx-auto mb-2 transform group-hover:rotate-45 transition-transform duration-300"></div>
                      <p className="text-sm text-gray-400 font-medium">Placeholder {i + 1}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-5xl font-bold mb-12 text-center text-red-600 uppercase tracking-wide">
              Kontakt & Zakazivanje
            </h2>
          </ScrollAnimation>
          
          <div className="text-center max-w-2xl mx-auto">
            <ScrollAnimation delay={0}>
              <p className="text-xl text-gray-300 mb-8">
                Za zakazivanje termina i kontakt, posetite naš Instagram profil
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-6 px-12 rounded-none border-2 border-transparent hover:border-white/30 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-lg shadow-2xl shadow-red-600/20"
                aria-label="Zakazite termin na Instagramu"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Zakazi termin na Instagramu</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="mt-16 space-y-6 text-gray-300">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-4 text-2xl">📍</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Lokacija</h3>
                      <p>Valjevo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-4 text-2xl">🕐</span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Radno vreme</h3>
                      <p>Pon-Pet: 10:00-20:00</p>
                      <p>Subota: 10:00-18:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    Za sve dodatne informacije i zakazivanje termina, kontaktirajte nas putem Instagrama
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 stefanović tattoo. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  );
}
