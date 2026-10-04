"use client";

import Image from "next/image";
import { FooterWordmark } from "./FooterWordmark";

const footerColumns = [
  {
    heading: "Products",
    links: ["Personal", "Business", "Marketing"],
  },
  {
    heading: "Company",
    links: ["About Us", "Contact Us", "Careers", "Blog", "FAQs"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Use", "Asset Recovery Policy"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      <div className="page-container pt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Image
              src="/hero/logo.png"
              alt="Apex Network"
              width={120}
              height={40}
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="text-p-md text-gray-500 max-w-sm mb-8">
              Apex makes it simple to trade gift cards and crypto, pay bills and spend
              in dollars, all from one app.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-black text-white px-7 py-3 rounded-full text-p-md font-medium hover:bg-gray-900 transition">
                Get Started
              </button>
              <button className="bg-white text-black border border-gray-200 px-7 py-3 rounded-full text-p-md font-medium hover:bg-gray-50 transition">
                Download App
              </button>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p className="text-label-lg text-black mb-5">{column.heading}</p>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-p-md text-gray-500 hover:text-primary transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized wordmark — spans the container width, letters slide up in sequence */}
      <div className="page-container">
        <FooterWordmark text="Apex" />
      </div>
    </footer>
  );
}
