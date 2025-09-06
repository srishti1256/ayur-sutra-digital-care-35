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
  MapPin
} from "lucide-react";

const RoleSelection = () => {
  const roles = [
    {
      id: "patient",
      title: "Patient Portal",
      description: "Access your health records, book appointments, track treatments",
      icon: User,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        "Aadhaar-verified profile",
        "Panchakarma tracking",
        "Voice-enabled chat",
        "Multilingual support"
      ],
      badge: "For Patients"
    },
    {
      id: "doctor",
      title: "Doctor Dashboard",
      description: "Manage patients, create prescriptions, conduct consultations",
      icon: Stethoscope,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      features: [
        "Government verification",
        "Telemedicine platform",
        "Research contributions",
        "E-prescription system"
      ],
      badge: "For Practitioners"
    },
    {
      id: "pharmacy",
      title: "Pharmacy System",
      description: "Manage inventory, process prescriptions, track deliveries",
      icon: Pill,
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        "License verification",
        "Stock management",
        "Batch tracking",
        "Delivery coordination"
      ],
      badge: "For Pharmacies"
    },
    {
      id: "admin",
      title: "Admin Panel",
      description: "System management, analytics, compliance monitoring",
      icon: Settings,
      color: "text-muted-foreground",
      bgColor: "bg-muted/20",
      features: [
        "User verification",
        "Analytics dashboard",
        "Compliance monitoring",
        "National reporting"
      ],
      badge: "For Administrators"
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
      </div>
    </section>
  );
};

export default RoleSelection;