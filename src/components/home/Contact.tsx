'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus(null)

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Contáctenos
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Estamos aquí para responder sus preguntas y discutir su próximo proyecto.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name 
                      ? 'border-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email 
                      ? 'border-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone 
                      ? 'border-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message 
                      ? 'border-red-500' 
                      : 'border-gray-300 dark:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-gold-500 dark:bg-gray-800`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Mensaje enviado con éxito. Nos pondremos en contacto pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Hubo un error al enviar el mensaje. Por favor, intente nuevamente.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gold-500 text-white rounded-lg font-semibold
                  hover:bg-gold-600 transition-colors duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-gold-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Teléfono</h4>
                    <p className="text-gray-600 dark:text-gray-300">(305) 555-0123</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-gold-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@eliteroofing.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-gold-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Dirección</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 King Street, Toronto, ON M5V 1M1, Canadá
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-gold-500" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Horario</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lun - Vie: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
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
  )
}
