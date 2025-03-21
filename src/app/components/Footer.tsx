'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold mb-4"
            >
              Anak Koding
            </motion.h3>
            <p className="text-gray-400">
              Transformasi digital untuk masa depan bisnis Anda melalui solusi teknologi modern.
            </p>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold mb-4"
            >
              Layanan
            </motion.h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold mb-4"
            >
              Perusahaan
            </motion.h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold mb-4"
            >
              Kontak
            </motion.h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@anakkoding.com</li>
              <li>Phone: +62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Anak Koding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;