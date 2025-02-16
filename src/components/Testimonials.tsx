import React from "react";

import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="testimonials px-8 py-16 bg-gray-200 ">
        <h2 className="section-title text-3xl font-bold text-center mb-6">
          Testimonials
        </h2>
        <div className="flex justify-center">
          <div className="card p-8 bg-white shadow-lg rounded-lg max-w-md mx-auto">
            <p>
              "This developer is incredible! They transformed my idea into an
              amazing website."
            </p>
            <p className="text-right mt-4 font-semibold">- Client Name</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Testimonials;
