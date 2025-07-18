
import { useTranslation } from "../contexts/TranslationContext";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sawtonna?igsh=ZW0xaWhrbmIzcjB0"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/share/15z8cSAKzU/"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/Sawtonna?t=LlGDBcqE4E4N7jgPw5aSNw&s=09"
    },
    {
      name: "Youtube",
      icon: Youtube,
      url: "https://youtube.com/@sawtonna?si=6vYlhmsKLnH_Ls5G"
    }
  ];

  const menuItems = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("services"), path: "/services" },
    { title: t("blog"), path: "https://sawtonna.com/blog" },
    { title: t("contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-white border-t mt-16 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/5a92d5ee-dd0d-4443-a9e8-2004d72e5cce.png"
              alt="صوتنا"
              className="h-10 w-auto"
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 md:space-x-reverse">
            <nav className="flex space-x-6 space-x-reverse">
              {menuItems.map((item) => 
                item.path.startsWith('http') ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textDark hover:text-primary transition-colors text-sm"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-textDark hover:text-primary transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </nav>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="text-sm text-gray-600">
            <a href="mailto:info@sawtonna.com" className="hover:text-primary transition-colors">
              info@sawtonna.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
