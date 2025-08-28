import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  interest: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  });

  const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields correctly.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Email service integration
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'noreply@bicarapintar.ai',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.' 
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          interest: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="text-purple-300 text-sm font-medium">Get In Touch</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Let's Build the Future of 
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"> AI Together</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with enterprise AI solutions? Our team of experts is here to help you unlock the power of conversational AI and document intelligence.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Headquarters */}
          <div className="bg-black rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/50 via-transparent to-blue-500/50">
            <div className="bg-black rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold">Headquarters</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Jl. Simponi No.21, Turangga<br />
                Kec. Lengkong, Kota Bandung<br />
                Jawa Barat 40264
              </p>
            </div>
          </div>

          {/* Jakarta Office */}
          <div className="bg-black rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/50 via-transparent to-purple-500/50">
            <div className="bg-black rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">Jakarta Office</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Royal Spring Residence<br />
                Blok Platinum No.10, Jati Padang<br />
                Ps. Minggu, Jakarta 12540
              </p>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="bg-black rounded-2xl p-[1px] bg-gradient-to-br from-green-500/50 via-transparent to-purple-500/50">
            <div className="bg-black rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold">Contact Numbers</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  <span className="text-white font-medium">Wisnu:</span><br />
                  (+62) 858 8579 9505
                </p>
                <p className="text-gray-300">
                  <span className="text-white font-medium">Gaffy AGB:</span><br />
                  (+62) 811 22 57 586
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-black rounded-2xl p-[1px] bg-gradient-to-br from-orange-500/50 via-transparent to-purple-500/50">
            <div className="bg-black rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Monday - Friday<br />9:00 AM - 6:00 PM WIB</p>
                <p>Saturday<br />9:00 AM - 1:00 PM WIB</p>
                <p className="text-orange-400">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/30">
            <div className="bg-black rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Tell us about your project and how we can help transform your business with AI technology.
                </p>
              </div>

              {/* Status Messages */}
              {status.type !== 'idle' && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  status.type === 'success' ? 'bg-green-500/10 border border-green-500/20' :
                  status.type === 'error' ? 'bg-red-500/10 border border-red-500/20' :
                  'bg-blue-500/10 border border-blue-500/20'
                }`}>
                  {status.type === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
                  {status.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
                  {status.type === 'loading' && <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />}
                  <p className={`text-sm ${
                    status.type === 'success' ? 'text-green-300' :
                    status.type === 'error' ? 'text-red-300' :
                    'text-blue-300'
                  }`}>
                    {status.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      placeholder="your@company.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${errors.company ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      placeholder="Your company name"
                    />
                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      placeholder="+62 xxx xxx xxxx"
                    />
                  </div>

                  {/* Interest/Solution */}
                  <div>
                    <label htmlFor="interest" className="block text-white font-medium mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select your interest</option>
                      <option value="BicaraChat" className="bg-gray-900">BicaraChat - Conversational AI</option>
                      <option value="BicaraVoice" className="bg-gray-900">BicaraVoice - Voice AI</option>
                      <option value="Document Intelligence" className="bg-gray-900">Document Intelligence</option>
                      <option value="Enterprise Integration" className="bg-gray-900">Enterprise Integration</option>
                      <option value="Custom Solution" className="bg-gray-900">Custom AI Solution</option>
                      <option value="Partnership" className="bg-gray-900">Partnership Opportunity</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors`}
                      placeholder="Brief description of your inquiry"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none`}
                    placeholder="Tell us about your project, requirements, or any questions you have about our AI solutions..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 disabled:cursor-not-allowed"
                  >
                    {status.type === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                <p className="text-gray-400 text-sm text-center">
                  We typically respond within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Join 140+ companies that trust BicaraPintar for their AI transformation. Let's discuss how we can help accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@bicarapintar.ai"
                className="bg-white hover:bg-gray-100 text-purple-600 font-semibold py-3 px-8 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us Directly
              </a>
              <a
                href="tel:+6285885799505"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 border border-white/20 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}