
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "../contexts/TranslationContext";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="font-kufi">
      <Navigation />
      
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">{t("ourServices")}</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t("servicesDescription")}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("mediaProduction")}</h3>
              <p className="text-gray-600">{t("mediaProductionDesc")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("digitalEmpowerment")}</h3>
              <p className="text-gray-600">{t("digitalEmpowermentDesc")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("psychologicalSupport")}</h3>
              <p className="text-gray-600">{t("psychologicalSupportDesc")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("researchDocumentation")}</h3>
              <p className="text-gray-600">{t("researchDocumentationDesc")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("digitalPlatform")}</h3>
              <p className="text-gray-600">{t("digitalPlatformDesc")}</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("opportunities")}</h3>
              <p className="text-gray-600">{t("opportunitiesDesc")}</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
