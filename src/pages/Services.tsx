
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
          <h1 className="text-3xl font-bold text-center mb-12">{t("ourServices")}</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("psychologicalSupport")}</h3>
              <p className="text-gray-600">
                {t("psychologicalSupportDetails")}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("legalConsultations")}</h3>
              <p className="text-gray-600">
                {t("legalConsultationsDetails")}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">{t("empowermentPrograms")}</h3>
              <p className="text-gray-600">
                {t("empowermentProgramsDetails")}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
