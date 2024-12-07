"use client";
import { useState, useMemo } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";
import { FormData, FormErrors } from "@/interfaces/dataInterface";


const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const validateForm = useMemo(() => {
    return () => {
      const newErrors: FormErrors = {};
      const { errors } = SITE_CONFIG.form;

      if (!formData.name.trim()) {
        newErrors.name = errors.name;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        newErrors.email = errors.email.required;
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = errors.email.invalid;
      }

      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!formData.phone.trim()) {
        newErrors.phone = errors.phone.required;
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = errors.phone.invalid;
      }

      if (!formData.message.trim()) {
        newErrors.message = errors.message.required;
      } else if (formData.message.length < 10) {
        newErrors.message = errors.message.minLength;
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = useMemo(
    () => [
      {
        icon: Phone,
        title: "Teléfono",
        content: SITE_CONFIG.contact.phone,
      },
      {
        icon: Mail,
        title: "Email",
        content: SITE_CONFIG.contact.email,
      },
      {
        icon: MapPin,
        title: "Dirección",
        content: SITE_CONFIG.contact.address,
      },
      {
        icon: Clock,
        title: "Horario",
        content: SITE_CONFIG.contact.schedule,
      },
    ],
    []
  );

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {SITE_CONFIG.form.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {SITE_CONFIG.form.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {SITE_CONFIG.form.labels.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {SITE_CONFIG.form.labels.email}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {SITE_CONFIG.form.labels.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {SITE_CONFIG.form.labels.message}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  {SITE_CONFIG.form.status.success}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  {SITE_CONFIG.form.status.error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gold-500 text-white rounded-lg font-semibold
                  hover:bg-gold-600 transition-colors duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting
                  ? SITE_CONFIG.form.buttons.sending
                  : SITE_CONFIG.form.buttons.submit}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <info.icon className="w-6 h-6 text-gold-500" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1169.0352083005918!2d-79.3831834241603!3d43.653225190537226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34f2ff8a74f7%3A0x6c5925eacb1fc6b2!2sKing%20St%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1ses!2ses!4v1709949915045!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
