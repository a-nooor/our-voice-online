
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

interface SocialIconsProps {
  size?: number;
  className?: string;
}

const SocialIcons = ({ size = 20, className = "" }: SocialIconsProps) => {
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

  return (
    <div className={`flex items-center space-x-4 space-x-reverse ${className}`}>
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
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
