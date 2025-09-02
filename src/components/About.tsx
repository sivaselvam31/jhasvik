import { motion, easeInOut } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

// const sections = [
//   {
//     title: "Highlights",
//     items: ["Small plates", "Healthy options", "Cozy", "Casual"],
//   },
//   {
//     title: "Service Options",
//     items: [
//       "Kerbside pickup",
//       "Delivery",
//       "Takeaway",
//       "No-contact delivery",
//       "Drive-through",
//       "Dine-in",
//     ],
//   },
//   {
//     title: "Popular For",
//     items: ["Lunch", "Dinner", "Solo dining"],
//   },
//   {
//     title: "Offerings",
//     items: [
//       "Coffee",
//       "Healthy options",
//       "Small plates",
//       "Vegan options",
//       "Vegetarian options",
//     ],
//   },
//   {
//     title: "Dining Options",
//     items: ["Lunch", "Dinner", "Dessert"],
//   },
//   {
//     title: "Amenities",
//     items: ["Restroom"],
//   },
//   {
//     title: "Atmosphere",
//     items: ["Casual", "Cozy"],
//   },
//   {
//     title: "Crowd",
//     items: ["Groups"],
//   },
//   {
//     title: "Planning",
//     items: ["Accepts reservations"],
//   },
//   {
//     title: "Children",
//     items: ["Good for kids"],
//   },
//   {
//     title: "Parking",
//     items: ["Free street parking", "Somewhat difficult to find a space"],
//   },
// ];

export default function AboutSection() {
  return (
    <section className="bg-black text-gray-100">
      <div className="container mx-auto px-6 py-20 lg:py-28">
        {/* Top grid: hero + stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="space-y-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[#FD6D00] text-4xl sm:text-5xl font-extrabold leading-tight"
            >
              Experience South Indian Cuisine — Tradition with a Twist
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg max-w-prose text-gray-300"
            >
              From crispy dosas and fluffy idlis to aromatic biryanis and spicy
              curries, we celebrate the rich culinary heritage of South India.
              Freshly ground spices, coconut, curry leaves, and love are the
              essence of every plate we serve.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700">
                <p className="text-3xl font-semibold">20+</p>
                <p className="text-sm text-gray-400">Authentic dishes</p>
              </div>
              <div className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700">
                <p className="text-3xl font-semibold">10</p>
                <p className="text-sm text-gray-400">Regional specialities</p>
              </div>
              <div className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700">
                <p className="text-3xl font-semibold">4.8</p>
                <p className="text-sm text-gray-400">Google rating</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-3">
              <a
                href="#menu"
                className="inline-block rounded-md bg-[#292E70] text-white px-5 py-3 font-medium shadow-lg hover:opacity-95"
              >
                View Menu
              </a>
              <a
                href="#reservations"
                className="inline-block rounded-md border border-gray-700 px-5 py-3 text-medium text-white hover:bg-gray-900"
              >
                Reserve a table
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="ml-4 md:ml-0">
              <img
                alt="South Indian feast"
                src="/logo.png"
                className="w-[90%] md:w-full h-56 md:h-full md:object-cover"
              />
              {/* <div className="absolute left-6 bottom-6 bg-black/60 px-4 py-2 rounded backdrop-blur">
                <p className="text-sm text-amber-300 font-semibold">
                  Chef's Special
                </p>
                <p className="text-white font-medium">
                  Masala Dosa with Coconut Chutney
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Middle: mission + features */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl bg-gray-900 border border-gray-700 hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-gray-300 text-sm">
              To bring authentic South Indian flavours to every table while
              adding a modern dining experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl bg-gray-900 border border-gray-700 hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold">Seasonal Menu</h3>
            <p className="mt-3 text-gray-300 text-sm">
              Menus inspired by local harvests — mangoes, jackfruit, and more.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="p-6 rounded-2xl bg-gray-900 border border-gray-700 hover:scale-105 transform transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold">Tradition & Culture</h3>
            <p className="mt-3 text-gray-300 text-sm">
              We embrace culinary traditions like banana leaf dining and festive
              recipes.
            </p>
          </motion.div>
        </motion.div>

        {/* Extra Details Sections */}
        {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-yellow-600/40 transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2 text-gray-300">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-400">✔</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div> */}

        {/* CTA strip */}
        <motion.div
          className="mt-16 rounded-xl p-6 bg-gradient-to-r from-amber-700/20 to-red-700/10 border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-sm text-gray-300">
              Want a true South Indian experience?
            </p>
            <p className="text-lg font-semibold">
              Book a traditional feast on banana leaf.
            </p>
          </div>
          <div className="flex gap-3">
            <a className="px-4 py-2 rounded-md bg-[#FD6D00] text-black font-medium">
              Book now
            </a>
            <a className="px-4 py-2 rounded-md border border-gray-700 text-gray-300">
              Contact us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
