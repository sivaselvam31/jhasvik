import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants/index";

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="container mx-auto py-16 px-6 md:px-24 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#FD6D00] mb-4">
            We also offer unique <br /> services for your events
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tailored experiences designed to make every moment extraordinary.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h3 className="text-3xl font-bold text-[#292E70] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
