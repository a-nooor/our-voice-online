
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
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-4 text-primary">{t("aboutUsTitle")}</h1>
              <p className="text-lg">
                {t("aboutUsDescription")}
              </p>
              
              <div className="mt-6">
                <h2 className="text-2xl font-bold mb-3 text-primary">{t("ourVision")}</h2>
                <p className="text-lg">
                  {t("visionDescription")}
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t("ourGoals")}</h2>
                <ul className="space-y-3 list-inside list-disc">
                  <li className="text-lg">{t("goal1")}</li>
                  <li className="text-lg">{t("goal2")}</li>
                  <li className="text-lg">{t("goal3")}</li>
                  <li className="text-lg">{t("goal4")}</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t("sustainability")}</h2>
                <p className="text-lg">
                  {t("sustainabilityDescription")}
                </p>
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t("ourValues")}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-white p-4 rounded-md shadow-sm text-center">
                    <span className="font-bold block mb-1">{t("value1")}</span>
                  </li>
                  <li className="bg-white p-4 rounded-md shadow-sm text-center">
                    <span className="font-bold block mb-1">{t("value2")}</span>
                  </li>
                  <li className="bg-white p-4 rounded-md shadow-sm text-center">
                    <span className="font-bold block mb-1">{t("value3")}</span>
                  </li>
                  <li className="bg-white p-4 rounded-md shadow-sm text-center">
                    <span className="font-bold block mb-1">{t("value4")}</span>
                  </li>
                </ul>
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
