'use client';

import { useState } from 'react';
import { Shield, Award, Calendar, MailOpen, PhoneCall, MapPin } from 'lucide-react';

//  Input Field Component
const InputField = ({ label, name, type = "text", value, onChange, placeholder, required }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 focus:border-transparent outline-none transition"
      required={required}
    />
  </div>
);

//  Info Card
const InfoCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

//  Contact Info Section
const ContactInfo = () => (
  <div className="p-8 bg-white shadow-xl rounded-xl border border-gray-100 h-full">
    <h2 className="text-sm font-semibold uppercase text-gray-500 mb-6 border-b pb-4">
      India, Maharashtra
    </h2>

    <div className="space-y-6 text-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <PhoneCall />
          <span className="font-medium text-lg">+91 88989 89888</span>
        </div>
        <div className="flex items-center space-x-2">
          <PhoneCall />
          <span className="font-medium text-lg">+91 82994 97567</span>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <MailOpen />
        <span className="text-lg font-semibold text-gray-600 hover:text-gray-800 transition duration-150">
          bharatenamel@gmail.com
        </span>
      </div>

      <div className="flex items-start space-x-3">
        <MapPin />
        <span className="text-base leading-snug">
          Gala No.01/02, Balaji Industrial Park <br />
          Taloja, Raigad Ghot Pincode: 410206
        </span>
      </div>
    </div>
  </div>
);

//  Main Component
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    helpDescription: '',
    fileLink: '',
    agreeToPrivacy: false,
  });

  const [status, setStatus] = useState({ type: '', message: '' }); // success or error
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  //  Handle Form Submit 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      setStatus({ type: 'success', message: ' Thank you! Your enquiry has been sent successfully.' });
      setFormData({
        name: '',
        location: '',
        company: '',
        jobTitle: '',
        email: '',
        phone: '',
        helpDescription: '',
        fileLink: '',
        agreeToPrivacy: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-5">
      {/* Header */}
      <div className="text-center mb-16 mt-5 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <div className="w-72 h-1 bg-gray-800 mx-auto rounded-full"></div>
        <p className="pt-3 text-xl text-gray-600 max-w-2xl mx-auto">
          Connect With us For a Free Consultation on Your Project.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">SEND ENQUIRY</h2>

            {/* Success / Error Message */}
            {status.message && (
              <div
                className={`mb-6 p-4 rounded-lg text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name / Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name" name="name" value={formData.name} onChange={handleChange} placeholder="Please enter your full name" required />
                <InputField label="Location" name="location" value={formData.location} onChange={handleChange} placeholder="Where are you based?" required />
              </div>

              {/* Company / Help */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Company Name" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company" required />
                <InputField label="How Can We Help?" name="helpDescription" value={formData.helpDescription} onChange={handleChange} placeholder="Describe briefly" required />
              </div>

              {/* Job Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Job Title" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Enter your job title" required />
              </div>

              {/* Email / Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required />
                <InputField label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required />
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeToPrivacy"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-gray-600 border-gray-300 rounded focus:ring-gray-600 cursor-pointer"
                  required
                />
                <label htmlFor="agreeToPrivacy" className="ml-3 text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-gray-800 underline hover:text-gray-900">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-gray-800 text-white font-semibold rounded-full transition duration-300 ${
                  isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-700'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <InfoCard
              icon={Shield}
              title="Your Privacy Respected"
              description="We guarantee no spam and utmost confidentiality. Your information is for consultation purposes only and won't be shared with third parties."
            />
            <InfoCard
              icon={Award}
              title="Quality, Tailored Insights"
              description="Benefit from high-quality advice from our experts, tailored to your project needs."
            />
            <InfoCard
              icon={Calendar}
              title="No Obligations, Full Flexibility"
              description="Our free consultation is no-strings-attached and scheduled at your convenience."
            />
          </div>
        </div>
      </div>

      {/* Tender Section */}
      <div className="text-center mt-10 mb-20 px-4">
        <h3 className="text-lg text-gray-600">Invite Us to Tender</h3>
        <h1 className="text-xl md:text-4xl font-bold text-gray-800 mt-4">
          bharatenamel@gmail.com
        </h1>
      </div>

      {/* Contact & Opportunities Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <ContactInfo />

        <div className="p-8 bg-white shadow-xl rounded-xl border border-gray-100 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Professional Growth Opportunities
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join a team of innovative professionals dedicated to revolutionising the built environment industry.
            </p>
          </div>
          <button className="w-fit px-8 py-4 text-lg font-bold text-white bg-gray-700 rounded-lg hover:bg-indigo-400 transition duration-300 ease-in-out shadow-md shadow-orange-500/40">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
}
