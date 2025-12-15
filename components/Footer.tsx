import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Appointments", href: "#appointments" },
    { name: "Contact Us", href: "#contact" },
  ];

  const services = [
    "Emergency Care",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dental Care",
    "Eye Care",
    "Laboratory",
  ];

  return (
    <footer className="bg-[#05427B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-[#5DBA45]"></div>
              </div>
              <span className="text-2xl font-bold">
                MediCare<span className="text-[#5DBA45]">+</span>
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Providing exceptional healthcare services with compassion and
              cutting-edge technology for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5DBA45] transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5DBA45] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5DBA45] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5DBA45] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#5DBA45] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-[#5DBA45] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-[#5DBA45] flex items-center justify-center mr-3 mt-1">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <p className="text-white/80">
                  123 Medical Center Drive, Health City, HC 12345
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-[#5DBA45] flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <a
                  href="tel:1234567890"
                  className="text-white/80 hover:text-[#5DBA45] transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-[#5DBA45] flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
                <a
                  href="mailto:info@medicarehospital.com"
                  className="text-white/80 hover:text-[#5DBA45] transition-colors"
                >
                  info@medicarehospital.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} MediCare Hospital. All rights reserved.
            |
            <a href="#" className="hover:text-[#5DBA45] transition-colors mx-2">
              Privacy Policy
            </a>{" "}
            |
            <a href="#" className="hover:text-[#5DBA45] transition-colors mx-2">
              Terms of Service
            </a>
          </p>
          <p className="text-white/60 mt-2 text-sm">
            This website is for demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
