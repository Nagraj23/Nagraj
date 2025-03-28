"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

export default function Collaboration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/Nagraj23",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/nagraj-nandal-71a361333/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:nandalnagraj2308@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-slate-900/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white dark:text-white">
            Let's Collaborate
          </h2>
          <p className="text-center text-white dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's work
            together to bring your ideas to life.
          </p>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-gray-200 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fill out the form and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500"
                  />
                </div>
                <input
                  type="text"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Project Type"
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 dark:bg-blue-400 text-white rounded-lg flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  You can also reach me directly through my social media:
                </p>
                <div className="flex space-x-4 mt-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-blue-500 hover:text-white transition"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Work With Me Section */}
            <div className="flex flex-col justify-center">
              <div className="bg-blue-600 dark:bg-blue-500 text-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Why Work With Me?</h3>
                <ul className="space-y-4 mt-4">
                  <li>
                    <h4 className="font-semibold">Dedicated Approach</h4>
                    <p>
                      Delivering high-quality solutions tailored to your needs.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">End-to-End Development</h4>
                    <p>
                      From concept to deployment, ensuring a seamless process.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Ongoing Support</h4>
                    <p>
                      Providing continued support even after project completion.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">Transparent Communication</h4>
                    <p>Regular updates and clear communication throughout.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
