import Link from "next/link";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const services = [
    "Concierge Services",
    "Consultation and Assessment",
    "Post-Treatment Care",
    "Comprehensive Diagnostics",
    "Genetic Research and Testing",
  ];

  const usefulLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <footer className="bg-[#12151F] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info Column */}
          <div>
            <div className="mb-8">
              <Link href="#home" className="flex items-center space-x-1 group">
                <div className="flex items-center">
                  {/* Actual Logo Image */}
                  <div className="relative">
                    <Image
                      src="/logo.png"
                      alt="MedHcareSwiss Logo"
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  {/* Text Logo */}
                  <span className="ml-3 text-2xl font-bold text-white tracking-tight">
                    MedHcareSwiss
                  </span>
                </div>
              </Link>{" "}
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#5DBA45] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90">
                      Route de Chatel-St Denis 107.
                    </p>
                    <p className="text-white/90">Town: 1808</p>
                    <p className="text-white/90">
                      Les Monts-de-Corsier, Vaud Canton, Switzerland.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#5DBA45] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90">+41 77 503 90 88</p>
                    <p className="text-white/90">+34 65 236 14 49</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#5DBA45] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90">Info@medhcareswiss.com</p>
                    <p className="text-white/90">medhcareswiss@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Info */}
            <div className="border-t border-white/20 pt-6">
              <div className="flex items-center mb-3">
                <FileText className="h-4 w-4 text-[#5DBA45] mr-2" />
                <span className="text-sm font-medium">Company Details</span>
              </div>
              <div className="space-y-2 text-sm text-white/80">
                <p>Registration Number: CH55011945149</p>
                <p>Tax Code: IDE/UID CHE-218.696.442</p>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-[#5DBA45] pl-3">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-[#5DBA45] transition-colors duration-200 flex items-start group"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#5DBA45] mt-2 mr-3 flex-shrink-0"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-l-4 border-[#5DBA45] pl-3">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#5DBA45] transition-colors duration-200 flex items-start group"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#5DBA45] mt-2 mr-3 flex-shrink-0"></div>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/90 font-medium">
            MedHCareSwiss ©2025 All rights reserved.
          </p>
          <p className="text-white/70 text-sm mt-2">
            Produced by Dirprints{" "}
            <a
              href="https://wa.me/23407042597790"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5DBA45] hover:text-white transition-colors duration-200"
            >
              +23407042597790
            </a>
          </p>
          <div className="mt-3 flex justify-center space-x-6 text-sm text-white/70">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-white/40">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <span className="text-white/40">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Legal Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
