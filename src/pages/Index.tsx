import { useState } from "react";
import Header from "@/components/Layout/Header";
import HeroSection from "@/components/Home/HeroSection";
import RoleSelection from "@/components/Home/RoleSelection";

const Index = () => {
  const [isElderlyMode, setIsElderlyMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    // In a real app, this would trigger translation logic
    console.log('Language changed to:', lang);
  };

  const handleElderlyModeToggle = () => {
    setIsElderlyMode(!isElderlyMode);
    // Apply elderly mode styles to body
    if (!isElderlyMode) {
      document.body.classList.add('elderly-mode');
    } else {
      document.body.classList.remove('elderly-mode');
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isElderlyMode ? 'elderly-mode' : ''}`}>
      <Header 
        onLanguageChange={handleLanguageChange}
        onElderlyModeToggle={handleElderlyModeToggle}
        isElderlyMode={isElderlyMode}
      />
      <main>
        <HeroSection />
        <RoleSelection />
      </main>
      
      {/* Footer with Government Compliance */}
      <footer className="relative bg-gradient-to-r from-primary via-primary-hover to-primary text-primary-foreground py-12 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-3">AyurSutra</h3>
              <p className="text-sm opacity-90">
                Government-grade digital Ayurveda healthcare platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Patient Portal</li>
                <li>Doctor Registration</li>
                <li>Pharmacy Network</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Compliance</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>AYUSH Ministry</li>
                <li>NDHM Standards</li>
                <li>Data Privacy</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Help & Support</li>
                <li>Government Helpline</li>
                <li>Emergency Care</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-90">
            <p>© 2024 AyurSutra - Government of India Approved Healthcare Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;