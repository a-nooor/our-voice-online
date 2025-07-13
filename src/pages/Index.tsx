
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
      <section className="pt-24 pb-12 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t("heroSubtitle")}
            </p>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm text-left space-y-4">
              <p className="text-gray-700">{t("websiteDescription")}</p>
              <p className="text-gray-700">{t("websiteDescription2")}</p>
              <p className="text-gray-700">{t("websiteDescription3")}</p>
              <p className="text-gray-700 font-medium">{t("websiteDescription4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("ourServices")}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t("servicesDescription")}</p>
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("contactUs")}</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            {t("servicesDescription")}
          </p>
          <Button 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
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
