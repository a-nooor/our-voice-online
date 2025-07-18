
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "../contexts/TranslationContext";

const Index = () => {
  const { t } = useTranslation();

  const handleContactUs = () => {
    // Open WhatsApp with the specified number
    window.open("https://wa.me/+96178899713", "_blank");
  };

  return (
    <div className="font-kufi">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--secondary)/0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.2),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Hero Slogan */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 tracking-tight">
                {t("heroSlogan")}
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("heroSubtitle")}
            </h2>
            
            {/* Description Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl shadow-card border border-border/50 text-left hover:shadow-soft transition-all duration-300">
                <p className="text-card-foreground leading-relaxed">{t("websiteDescription")}</p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl shadow-card border border-border/50 text-left hover:shadow-soft transition-all duration-300">
                <p className="text-card-foreground leading-relaxed">{t("websiteDescription2")}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl shadow-card border border-border/50 text-left hover:shadow-soft transition-all duration-300">
                <p className="text-card-foreground leading-relaxed">{t("websiteDescription3")}</p>
              </div>
              <div className="bg-card/60 backdrop-blur-sm p-8 rounded-2xl shadow-card border border-border/50 text-left hover:shadow-soft transition-all duration-300">
                <p className="text-card-foreground font-medium leading-relaxed">{t("websiteDescription4")}</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
              onClick={handleContactUs}
            >
              {t("contactUs")}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("ourServices")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t("servicesDescription")}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("mediaProduction"),
                description: t("mediaProductionDesc"),
                gradient: "from-primary/10 to-secondary/10"
              },
              {
                title: t("digitalEmpowerment"),
                description: t("digitalEmpowermentDesc"),
                gradient: "from-accent/10 to-primary/10"
              },
              {
                title: t("psychologicalSupport"),
                description: t("psychologicalSupportDesc"),
                gradient: "from-secondary/10 to-accent/10"
              },
              {
                title: t("researchDocumentation"),
                description: t("researchDocumentationDesc"),
                gradient: "from-primary/10 to-accent/10"
              },
              {
                title: t("digitalPlatform"),
                description: t("digitalPlatformDesc"),
                gradient: "from-accent/10 to-secondary/10"
              },
              {
                title: t("opportunities"),
                description: t("opportunitiesDesc"),
                gradient: "from-secondary/10 to-primary/10"
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.gradient} p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-soft transition-all duration-300 hover:scale-105 group`}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">{t("contactUs")}</h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("servicesDescription")}
          </p>
          <Button 
            size="lg"
            className="bg-background text-primary hover:bg-background/90 px-12 py-6 text-xl rounded-xl shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
            onClick={handleContactUs}
          >
            {t("contactUs")}
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
