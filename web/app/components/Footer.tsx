"use client";

import Image from "next/image";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap"],
  Company: ["About Us", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Compliance", "Cookies"],
  Social: ["Twitter", "LinkedIn", "Discord", "Instagram"],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center brightness-0 invert opacity-100" style={{ filter: 'none' }}>
              <Image
                src="/hero/logo.png"
                alt="Apex Network"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              One place for all your digital finances. Simple, secure, unified.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <p className="font-semibold text-white text-sm">{category}</p>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#FF7A00] transition"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Apex Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-[#FF7A00] transition">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#FF7A00] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
