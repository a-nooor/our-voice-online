
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "../contexts/TranslationContext";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="font-kufi">
      <Navigation />
      
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-6 text-primary">{t("aboutUsTitle")}</h1>
              <div className="space-y-4 text-left">
                <p className="text-lg">{t("aboutUsDescription")}</p>
                <p className="text-lg">{t("aboutUsDescription2")}</p>
                <p className="text-lg">{t("aboutUsDescription3")}</p>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t("ourVision")}</h2>
                <p className="text-lg text-left">{t("visionDescription")}</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t("ourGoals")}</h2>
                <ul className="space-y-3 list-inside list-decimal">
                  <li className="text-lg">{t("goal1")}</li>
                  <li className="text-lg">{t("goal2")}</li>
                  <li className="text-lg">{t("goal3")}</li>
                  <li className="text-lg">{t("goal4")}</li>
                  <li className="text-lg">{t("goal5")}</li>
                  <li className="text-lg">{t("goal6")}</li>
                  <li className="text-lg">{t("goal7")}</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t("ourValues")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-bold text-primary mb-2">{t("value1")}</h3>
                    <p className="text-gray-600">{t("value1Desc")}</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-bold text-primary mb-2">{t("value2")}</h3>
                    <p className="text-gray-600">{t("value2Desc")}</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-bold text-primary mb-2">{t("value3")}</h3>
                    <p className="text-gray-600">{t("value3Desc")}</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h3 className="font-bold text-primary mb-2">{t("value4")}</h3>
                    <p className="text-gray-600">{t("value4Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
