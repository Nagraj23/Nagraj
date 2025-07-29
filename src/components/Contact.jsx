import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  // 1. Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // 2. Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://nagraj-port.onrender.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Email send failed:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Send Me a Message 💬
            </h3>

            {/* Inputs */}
            {[
              { label: "Your Name", type: "text", name: "name" },
              { label: "Your Email", type: "email", name: "email" },
              { label: "Subject", type: "text", name: "subject" },
            ].map((field, i) => (
              <div key={i} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  disabled={isSubmitting}
                  className="peer w-full p-4 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                />
                <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all transform -translate-y-1 scale-90 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-90 bg-white dark:bg-slate-950 px-1">
                  {field.label}
                </label>
              </div>
            ))}

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder=" "
                required
                disabled={isSubmitting}
                className="peer w-full p-4 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none"
              ></textarea>
              <label className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 text-sm transition-all transform -translate-y-1 scale-90 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-1 peer-focus:scale-90 bg-white dark:bg-slate-950 px-1">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
            >
              {isSubmitting ? "Sending..." : "Send Message 🚀"}
            </button>

            {/* Status Message */}
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm">Something went wrong. Try again 😢</p>
            )}
          </form>

          {/* Right Side: Social Links */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Or Connect Directly 🔗
            </h3>

            <div className="flex flex-wrap gap-5">
  {socials.map((item, i) => (
    <a
      key={i}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${item.color} text-white hover:scale-105 transition-all shadow-lg`}
    >
      <div className="bg-black/20 p-2 rounded-full">
        {item.icon}
      </div>
      <span className="font-medium text-base">{item.label}</span>
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
