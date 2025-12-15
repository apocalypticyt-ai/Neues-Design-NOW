import { useState } from 'react';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Wallet, 
  Palette, 
  Truck, 
  Code, 
  Heart, 
  Coffee, 
  TrendingUp, 
  Moon, 
  Menu,
  X
} from 'lucide-react';

// Content Configuration - Based on Screenshot 2 (Hypothetical Content extraction)
// REPLACE THESE STRINGS WITH THE EXACT TEXT FROM 123312312.png IF DIFFERENT
const content = {
  brand: "JobFinger", // Keeping the logo text from design unless specified
  nav: ["Jobs", "Unternehmen", "Preise", "Über uns"],
  user: "David Arbeitgeber",
  hero: {
    headline: {
      part1: "Starte deine",
      highlight: "Karriere hier.",
      part2: ""
    },
    subheadline: "Dein Profil wird automatisch zum professionellen Lebenslauf",
    search: {
      placeholder1: "Jobtitel, Stichwort...",
      placeholder2: "Stadt oder Remote...",
      button: "Jobs finden"
    }
  },
  categories: [
    { icon: Wallet, label: "FINANZEN & CONTROLLING", color: "text-yellow-400" },
    { icon: Palette, label: "DESIGN & KREATIVES", color: "text-pink-400" },
    { icon: Truck, label: "LOGISTIK & TRANSPORT", color: "text-blue-400" },
    { icon: Code, label: "IT & SOFTWARE", color: "text-cyan-400" },
    { icon: Heart, label: "GESUNDHEIT & PFLEGE", color: "text-red-400" },
    { icon: Coffee, label: "GASTRO & HOTEL", color: "text-orange-400" },
    { icon: TrendingUp, label: "MARKETING & SALES", color: "text-blue-500" },
  ],
  footer: {
    brandDescription: "Deutschlands führende Jobbörse für alle Karrierestufen.",
    contact: {
      email: "kontakt@jobfinger.de",
      phone: "+49 (0) 30 123 456 789",
      address: "Berlin, Deutschland"
    },
    columns: [
      {
        title: "Für Jobsuchende",
        links: ["Job-Suche", "Lebenslauf erstellen", "Gehaltsvergleich", "Karriere-Tipps", "Remote Jobs"]
      },
      {
        title: "Für Arbeitgeber",
        links: ["Stellenanzeige schalten", "Candidate Search", "Preise", "Erfolgsgeschichten", "Recruiting-Tipps"]
      },
      {
        title: "Unternehmen",
        links: ["Über uns", "Karriere", "Presse", "Hilfe & FAQ", "Kontakt"]
      }
    ],
    bottom: [
      "Impressum", "Datenschutz", "AGB", "Cookie-Einstellungen"
    ]
  }
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden relative">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Left Teal Gradient */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-900/30 blur-[120px] rounded-full"></div>
        {/* Bottom Right Purple Gradient */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/30 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">Job</span><span className="text-blue-500">Finger</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-gray-300 text-sm font-medium">
            {content.nav.map((item, idx) => (
              <a key={idx} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </nav>

          {/* User & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors text-gray-400">
              <Moon size={18} />
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-gray-700">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs">D</div>
              <span className="text-sm font-medium">{content.user}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </header>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 absolute top-16 left-0 w-full z-50 p-6 flex flex-col gap-4 border-b border-gray-800">
            {content.nav.map((item, idx) => (
              <a key={idx} href="#" className="text-gray-300 hover:text-white block py-2">{item}</a>
            ))}
          </div>
        )}

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-20">
          
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {content.hero.headline.part1} <span className="text-blue-500">{content.hero.headline.highlight}</span> {content.hero.headline.part2}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              {content.hero.subheadline}
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-3xl bg-[#0f0f11] border border-gray-800 rounded-full p-2 flex flex-col md:flex-row items-center shadow-lg shadow-blue-900/5 mb-24">
            
            <div className="flex-1 flex items-center px-4 w-full md:w-auto mb-2 md:mb-0">
              <Search className="text-gray-500 mr-3" size={20} />
              <input 
                type="text" 
                placeholder={content.hero.search.placeholder1} 
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500"
              />
            </div>
            
            <div className="hidden md:block w-px h-8 bg-gray-800 mx-2"></div>
            
            <div className="flex-1 flex items-center px-4 w-full md:w-auto mb-2 md:mb-0">
              <MapPin className="text-gray-500 mr-3" size={20} />
              <input 
                type="text" 
                placeholder={content.hero.search.placeholder2} 
                className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-medium flex items-center gap-2 transition-colors w-full md:w-auto justify-center">
              {content.hero.search.button}
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Categories Title */}
          <div className="w-full max-w-6xl mb-8">
            <h3 className="text-gray-400 font-semibold tracking-wider text-sm uppercase">Finde Jobs in jeder Kategorie</h3>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full max-w-6xl">
            {content.categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className={`p-4 rounded-full bg-gray-900/50 border border-gray-800 group-hover:border-gray-600 transition-colors ${cat.color}`}>
                  <cat.icon size={28} />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-center text-gray-400 group-hover:text-white transition-colors uppercase leading-tight max-w-[100px]">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#020203] border-t border-gray-900 pt-16 pb-8 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
               <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Job</span><span className="text-blue-500">Finger</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed">
                {content.footer.brandDescription}
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="opacity-60">✉</span> {content.footer.contact.email}
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-60">📞</span> {content.footer.contact.phone}
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-60">📍</span> {content.footer.contact.address}
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {content.footer.columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-white mb-6">{col.title}</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2024 {content.brand}. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {content.footer.bottom.map((item, idx) => (
                <a key={idx} href="#" className="hover:text-gray-300 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
