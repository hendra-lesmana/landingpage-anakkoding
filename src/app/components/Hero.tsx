'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Transformasi Digital
            </span>
            {' '}untuk Masa Depan
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Kami membantu bisnis Anda berkembang melalui solusi teknologi modern:
            Software Development, SaaS, dan AI yang inovatif.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Mulai Sekarang
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative w-full max-w-lg aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative z-10 w-full h-full grid grid-cols-2 gap-4 p-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
            >
              <Image
                src="/globe.svg"
                alt="Web Development"
                width={40}
                height={40}
                className="mb-2"
              />
              <h3 className="font-semibold">Web Development</h3>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg mt-8"
            >
              <Image
                src="/window.svg"
                alt="SaaS Solutions"
                width={40}
                height={40}
                className="mb-2"
              />
              <h3 className="font-semibold">SaaS Solutions</h3>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
            >
              <Image
                src="/file.svg"
                alt="AI Integration"
                width={40}
                height={40}
                className="mb-2"
              />
              <h3 className="font-semibold">AI Integration</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;