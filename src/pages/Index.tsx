
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(110,89,165,0.1),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
              {t("heroSubtitle")}
            </p>
            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/20 text-left space-y-6 max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed">{t("websiteDescription")}</p>
              <p className="text-gray-700 text-lg leading-relaxed">{t("websiteDescription2")}</p>
              <p className="text-gray-700 text-lg leading-relaxed">{t("websiteDescription3")}</p>
              <p className="text-gray-800 font-semibold text-lg">{t("websiteDescription4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("ourServices")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("servicesDescription")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t("mediaProduction"),
                description: t("mediaProductionDesc"),
              },
              {
                title: t("digitalEmpowerment"),
                description: t("digitalEmpowermentDesc"),
              },
              {
                title: t("psychologicalSupport"),
                description: t("psychologicalSupportDesc"),
              },
              {
                title: t("researchDocumentation"),
                description: t("researchDocumentationDesc"),
              },
              {
                title: t("digitalPlatform"),
                description: t("digitalPlatformDesc"),
              },
              {
                title: t("opportunities"),
                description: t("opportunitiesDesc"),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50"
              >
                <h3 className="text-2xl font-bold mb-5 text-primary group-hover:text-primary/80 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t("contactUs")}</h2>
          <p className="mb-12 max-w-3xl mx-auto text-xl leading-relaxed text-white/90">
            {t("servicesDescription")}
          </p>
          <Button 
            className="bg-white text-primary hover:bg-white/95 hover:scale-105 px-10 py-6 text-xl font-semibold rounded-2xl shadow-xl transition-all duration-300 transform"
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
