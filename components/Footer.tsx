import { footerLinks } from '@/data';
import { Globe, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" data-testid="link-footer-home">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">
                  Immiglobal Services
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted partner for immigration and visa services worldwide. 
              We help turn your dreams of living abroad into reality.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Immigration Street, Global City, GC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@immiglobalservices.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} data-testid={`link-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Countries</h3>
            <ul className="space-y-2">
              {footerLinks.countries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} data-testid={`link-country-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} data-testid={`link-company-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} data-testid={`link-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Immiglobal Services. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              ICCRC Registered • Licensed Immigration Consultants
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}