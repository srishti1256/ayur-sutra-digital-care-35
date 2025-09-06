import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Stethoscope, 
  Pill, 
  Settings, 
  ArrowRight,
  Shield,
  Clock,
  MapPin,
  Languages,
  Smartphone,
  Wifi,
  Brain,
  Heart,
  FileText,
  Bell,
  CreditCard,
  Star,
  Database,
  TrendingUp,
  Globe,
  CheckCircle,
  Zap,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  Download,
  Truck,
  BarChart,
  Lock,
  Search,
  AlertTriangle,
  Award,
  Activity
} from "lucide-react";

const RoleSelection = () => {
  const roles = [
    {
      id: "patient",
      title: "Patient Portal",
      description: "Comprehensive Ayurveda healthcare management with government compliance",
      icon: User,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Aadhaar-verified onboarding",
        "Dosha-based consultations",
        "Panchakarma therapy tracking",
        "AI chatbot with voice support",
        "Multilingual interface",
        "Offline-ready access"
      ],
      badge: "For Patients"
    },
    {
      id: "doctor",
      title: "Doctor Dashboard",
      description: "Advanced practitioner portal with research integration and telemedicine",
      icon: Stethoscope,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      features: [
        "Government badge verification",
        "Real-time patient queue",
        "Research case contributions",
        "E-prescription with herbal database",
        "Telemedicine platform",
        "Achievement showcase"
      ],
      badge: "For Practitioners"
    },
    {
      id: "pharmacy",
      title: "Pharmacy System",
      description: "Complete inventory management with verified supply chain tracking",
      icon: Pill,
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        "License verification system",
        "Real-time stock management",
        "Batch tracking & expiry control",
        "Prescription fulfillment workflow",
        "Delivery partner coordination",
        "Low-stock herb notifications"
      ],
      badge: "For Pharmacies"
    },
    {
      id: "admin",
      title: "Admin Panel",
      description: "Comprehensive system management with national reporting and analytics",
      icon: Settings,
      color: "text-muted-foreground",
      bgColor: "bg-muted/20",
      features: [
        "Practitioner verification",
        "National registry checks",
        "Analytics dashboard",
        "Compliance monitoring",
        "Multilingual content management",
        "NDHM/AYUSH reporting"
      ],
      badge: "For Administrators"
    }
  ];

  const detailedFeatures = [
    {
      category: "Enhanced Patient App Features",
      icon: Heart,
      color: "text-primary",
      bgColor: "bg-primary/5",
      features: [
        {
          title: "Aadhaar-Verified Onboarding",
          description: "Secure identity verification following government portal standards",
          icon: Shield
        },
        {
          title: "Dynamic Language Selection",
          description: "Regional language support for inclusive healthcare access",
          icon: Languages
        },
        {
          title: "Panchakarma Scheduler",
          description: "Government health milestone tracking with clinical KPIs",
          icon: Calendar
        },
        {
          title: "AI Chatbot with Voice Support",
          description: "Elderly-friendly interface with doctor escalation for complex queries",
          icon: MessageCircle
        },
        {
          title: "Therapy Management",
          description: "Prescription playback and downloadable government-compliant documents",
          icon: FileText
        },
        {
          title: "Medication Ordering",
          description: "Verified supply chain with auto-refill and proximity-based matching",
          icon: Pill
        }
      ]
    },
    {
      category: "Doctor App Features",
      icon: Stethoscope,
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      features: [
        {
          title: "Government Badge Verification",
          description: "Certificate upload with admin approval for legal compliance",
          icon: Award
        },
        {
          title: "Advanced Dashboard",
          description: "Real-time queue management with urgent patient alerts",
          icon: BarChart
        },
        {
          title: "Research-First Workflow",
          description: "Mark cases for national AYUSH research pool contribution",
          icon: Search
        },
        {
          title: "E-Prescription Generator",
          description: "Herbal database with AI recommendations and direct pharmacy sharing",
          icon: Brain
        },
        {
          title: "Telemedicine Platform",
          description: "Integrated video consultations with government compliance",
          icon: Phone
        },
        {
          title: "Achievement Showcase",
          description: "Public profile visible on government portals for transparency",
          icon: Star
        }
      ]
    },
    {
      category: "Chemist/Pharmacy Features",
      icon: Pill,
      color: "text-accent",
      bgColor: "bg-accent/5",
      features: [
        {
          title: "Licensing Verification",
          description: "Integrated stock management with real-time prescription dashboard",
          icon: CheckCircle
        },
        {
          title: "Batch Management",
          description: "Government-compliant expiry control and quality tracking",
          icon: Database
        },
        {
          title: "Order Fulfillment",
          description: "Delivery partner coordination with comprehensive workflow management",
          icon: Truck
        },
        {
          title: "Smart Notifications",
          description: "Low-stock alerts for herbs with automated reorder suggestions",
          icon: Bell
        },
        {
          title: "Supply Chain Tracking",
          description: "End-to-end verification with government compliance checks",
          icon: Activity
        },
        {
          title: "Payment Integration",
          description: "UPI/Razorpay integration with government-approved gateways",
          icon: CreditCard
        }
      ]
    },
    {
      category: "Cross-Role System Features",
      icon: Globe,
      color: "text-success",
      bgColor: "bg-success/5",
      features: [
        {
          title: "Pan-India Portability",
          description: "Access records and services nationwide with seamless data sync",
          icon: MapPin
        },
        {
          title: "Elderly Mode",
          description: "Large fonts, voice navigation certified by government guidelines",
          icon: Smartphone
        },
        {
          title: "AI-Driven Recommendations",
          description: "Personalized Ayurveda suggestions using fine-tuned Indian models",
          icon: Brain
        },
        {
          title: "Offline Mode",
          description: "Secure caching for consultation access in low-connectivity regions",
          icon: Wifi
        },
        {
          title: "Multilingual Support",
          description: "Regional language interfaces following inclusivity guidelines",
          icon: Languages
        },
        {
          title: "Government Integration",
          description: "FHIR-R4, EHR standards with open API interoperability",
          icon: Lock
        }
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-muted/10 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="text-primary">Access Portal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AyurSutra provides specialized interfaces for different healthcare roles, 
            ensuring optimal user experience and government compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <Card 
              key={role.id} 
              className="relative group elevated-shadow hover:shadow-2xl transition-all duration-500 cursor-pointer border border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover:bg-card/95 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-lg ${role.bgColor}`}>
                    <role.icon className={`h-6 w-6 ${role.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {role.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
                <CardDescription className="text-sm">
                  {role.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {role.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                >
                  Access Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>

              {/* Government Compliance Indicator */}
              <div className="absolute top-4 right-4">
                <Shield className="h-4 w-4 text-primary/60" />
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 p-4 bg-background rounded-lg card-shadow">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-success" />
              <span>Government Verified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-success" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-success" />
              <span>Pan-India Coverage</span>
            </div>
          </div>
        </div>

        {/* Detailed Feature Sections */}
        <div className="mt-20 space-y-16">
          {detailedFeatures.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-8">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center p-3 rounded-lg ${section.bgColor} mb-4`}>
                  <section.icon className={`h-8 w-8 ${section.color}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {section.category}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.features.map((feature, featureIndex) => (
                  <Card 
                    key={featureIndex}
                    className="group hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card/60 backdrop-blur-sm hover:bg-card/80"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${section.bgColor} flex-shrink-0`}>
                          <feature.icon className={`h-5 w-5 ${section.color}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg leading-tight">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core System Highlights */}
        <div className="mt-20 p-8 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Government-Grade Healthcare Technology
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Built with modern, scalable technology following Indian government health data standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="p-3 bg-primary/10 rounded-lg inline-flex">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Modern Tech Stack</h4>
              <p className="text-sm text-muted-foreground">React, Node.js, MongoDB with cloud storage</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="p-3 bg-secondary/10 rounded-lg inline-flex">
                <Lock className="h-6 w-6 text-secondary" />
              </div>
              <h4 className="font-semibold">FHIR-R4 Compliant</h4>
              <p className="text-sm text-muted-foreground">Interoperable with EHR and open API standards</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="p-3 bg-accent/10 rounded-lg inline-flex">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold">Payment Integration</h4>
              <p className="text-sm text-muted-foreground">Razorpay/UPI with government-approved gateways</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="p-3 bg-success/10 rounded-lg inline-flex">
                <Globe className="h-6 w-6 text-success" />
              </div>
              <h4 className="font-semibold">Accessibility First</h4>
              <p className="text-sm text-muted-foreground">Multilingual, elderly-friendly, offline-capable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleSelection;