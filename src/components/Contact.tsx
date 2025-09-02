import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative w-full py-20 bg-black" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#FD6D00] mb-4">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether it’s feedback, reservations, or collaboration—reach out and
            we’ll respond promptly.
          </p>
        </div>

        {/* Contact Layout - New Style */}
        <div className="flex flex-col lg:flex-row bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
          {/* Info Sidebar */}
          <div className="flex-1 bg-gray-950 p-10 flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="flex items-center space-x-3 mb-2 justify-center lg:justify-start">
              <MapPin className="w-8 h-8 text-[#FD6D00]" />
              <h3 className="text-2xl font-bold text-[#FD6D00]">Visit Us</h3>
            </div>
            <p className="text-gray-300 text-center lg:text-left">
              Kampstraße 46, 40591 Düsseldorf, Germany{" "}
            </p>

            <div className="flex items-center space-x-3 mb-2 justify-center lg:justify-start">
              <Phone className="w-8 h-8 text-[#FD6D00]" />
              <h3 className="text-2xl font-bold text-[#FD6D00]">Call</h3>
            </div>
            <p className="text-gray-300 text-center lg:text-left">
              +49 162 4802373
            </p>

            <div className="flex items-center space-x-3 mb-2 justify-center lg:justify-start">
              <Mail className="w-8 h-8 text-[#FD6D00]" />
              <h3 className="text-2xl font-bold text-[#FD6D00]">Email</h3>
            </div>
            <p className="text-gray-300 text-center lg:text-left">
              example@gamil.com
            </p>
          </div>

          {/* Contact Form */}
          <form className="flex-1 p-10 bg-black/60 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#292E70]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#292E70]"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#292E70]"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#292E70] text-white font-semibold hover:bg-[#4b51b0] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
