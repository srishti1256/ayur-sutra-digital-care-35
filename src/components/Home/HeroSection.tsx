import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, MapPin, Smartphone } from "lucide-react";
import heroImage from "@/assets/ayursutra-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-primary/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/3 to-accent/5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="gov-badge mb-4">
                Government of India Approved Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">AyurSutra</span><br />
                <span className="text-2xl md:text-4xl text-muted-foreground">
                  Digital Ayurveda Healthcare
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Government-grade Ayurveda management platform ensuring authentic 
                healthcare delivery, AYUSH compliance, and accessible care for all ages 
                across India.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">NDHM Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Multi-lingual</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Pan-India Access</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Elderly Friendly</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 pt-4 border-t">
              <Badge variant="secondary" className="text-xs">
                ✓ AYUSH Ministry Approved
              </Badge>
              <Badge variant="secondary" className="text-xs">
                ✓ National Digital Health Blueprint
              </Badge>
              <Badge variant="secondary" className="text-xs">
                ✓ Data Privacy Compliant
              </Badge>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative -mt-24">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="AyurSutra Healthcare Platform"
                className="w-full h-auto rounded-2xl card-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <Card className="absolute -bottom-6 -left-6 p-4 bg-background/95 backdrop-blur card-shadow z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Verified Doctors</div>
              </div>
            </Card>
            
            <Card className="absolute -top-6 -right-6 p-4 bg-background/95 backdrop-blur card-shadow z-20">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;