import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Settings, User, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ayursutraLogo from "@/assets/ayursutra-logo.png";

interface HeaderProps {
  onLanguageChange?: (lang: string) => void;
  onElderlyModeToggle?: () => void;
  isElderlyMode?: boolean;
}

const Header = ({ onLanguageChange, onElderlyModeToggle, isElderlyMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img
              src={ayursutraLogo}
              alt="AyurSutra Logo"
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">AyurSutra</h1>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="gov-badge text-xs">
                  AYUSH Verified
                </Badge>
                <Badge variant="outline" className="gov-badge text-xs">
                  NDHM Compliant
                </Badge>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm">
              Patient Portal
            </Button>
            <Button variant="ghost" size="sm">
              Doctor Portal
            </Button>
            <Button variant="ghost" size="sm">
              Pharmacy
            </Button>
            <Button variant="ghost" size="sm">
              About
            </Button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <select
              className="text-sm border rounded px-2 py-1 bg-background"
              onChange={(e) => onLanguageChange?.(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            {/* Elderly Mode Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={onElderlyModeToggle}
              className={isElderlyMode ? "bg-secondary text-secondary-foreground" : ""}
            >
              <Settings className="h-4 w-4 mr-2" />
              {isElderlyMode ? "Standard" : "Elderly"}
            </Button>

            {/* Login Button */}
            <Button size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Button variant="ghost" className="justify-start">
                    Patient Portal
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Doctor Portal
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    Pharmacy
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    About
                  </Button>
                  <Button className="mt-4">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;