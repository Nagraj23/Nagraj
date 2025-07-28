import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const socials = [
    {
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      href: "https://instagram.com/nagraj.dev",
      color: "from-pink-600 to-pink-400",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nagraj-nandal-71a361333",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/Nagraj23",
      color: "from-slate-700 to-slate-500",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-white dark:bg-[#041b20] text-gray-900 dark:text-white transition-all duration-700 ease-in-out"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2
          className={`text-5xl font-black text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Let’s Work Together
        </h2>

        <div
          className={`grid lg:grid-cols-2 gap-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-900 dark:to-slate-800 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Left Side: Contact Form */}
          <form className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Send Me a Message 💬
            </h3>

            {[
              { label: "Your Name", type: "text" },
              { label: "Your Email", type: "email" },
              { label: "Subject", type: "text" },
            ].map((field, i) => (
              <div key={i} className="relative">
                <input
                  type={field.type}
                  placeholder=" "
                  className="peer w-full p-4 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                />
                <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all transform -translate-y-1 scale-90 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-90 bg-white dark:bg-slate-950 px-1">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                rows="5"
                placeholder=" "
                className="peer w-full p-4 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none"
              ></textarea>
              <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all transform -translate-y-1 scale-90 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-90 bg-white dark:bg-slate-950 px-1">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
            >
              Send Message 🚀
            </button>
          </form>

          {/* Right Side: Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Or Connect Directly 🔗
            </h3>

            <div className="flex flex-col gap-6">
              {socials.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r ${item.color} hover:scale-[1.03] transition-all duration-300 shadow-lg`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-black dark:bg-white p-2 rounded-full text-white dark:text-black shadow-md">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-white dark:text-white text-lg">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm text-white dark:text-white font-medium opacity-80 group-hover:underline">
                    Follow →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
