"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/image/immi-logo1.png";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Countries", href: "/co" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const effectiveScrolled = isHome ? isScrolled : true;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2">
              {/* <Globe
                className={`h-8 w-8 ${
                  effectiveScrolled ? "text-primary" : "text-white"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  effectiveScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Immiglobal Services
              </span>
            </div> */}
              <Image src={Logo} alt="Immiglobal Logo" width={150} height={45} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                data-testid={`link-${item.name
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? "text-primary border-b-2 border-primary"
                      : effectiveScrolled
                      ? "text-foreground"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button
              size="sm"
              className="ml-4"
              data-testid="button-consultation"
            >
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  effectiveScrolled ? "text-foreground" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  effectiveScrolled ? "text-foreground" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-border"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.name
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    <div
                      className={`block px-4 py-2 text-sm font-medium ${
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
                <div className="px-4">
                  <Button
                    size="sm"
                    className="w-full"
                    data-testid="button-mobile-consultation"
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
