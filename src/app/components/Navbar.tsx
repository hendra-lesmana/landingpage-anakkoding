'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Image
              src="/logo.svg"
              alt="Anak Koding Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">Anak Koding</span>
          </motion.div>
          
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              <NavLink href="#services">Layanan</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#about">Tentang</NavLink>
              <NavLink href="#contact">Kontak</NavLink>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        href={href}
        className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Navbar;