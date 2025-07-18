
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "../contexts/TranslationContext";
import SocialIcons from "./SocialIcons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("services"), path: "/services" },
    { title: t("blog"), path: "https://sawtonna.com/blog" },
    { title: t("contact"), path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/5a92d5ee-dd0d-4443-a9e8-2004d72e5cce.png"
              alt="صوتنا"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 space-x-reverse ml-6">
              {menuItems.map((item) => 
                item.path.startsWith('http') ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textDark hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-textDark hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <SocialIcons size={18} className="mr-4" />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="ml-2">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => 
                    item.path.startsWith('http') ? (
                      <a
                        key={item.path}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textDark hover:text-primary transition-colors px-4 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="text-textDark hover:text-primary transition-colors px-4 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                  <div className="px-4 pt-4 border-t">
                    <SocialIcons size={20} className="justify-start" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
