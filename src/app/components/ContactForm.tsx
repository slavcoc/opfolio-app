"use client"
import React, { useState } from "react";
import GoogleMap from "./GoogleMap";
import { submitContactForm } from "../../services/contactService";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    try {
      await submitContactForm(formData);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : "An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#F3F0E6] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="relative z-20 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col items-center gap-6 sm:gap-12 md:gap-10 lg:gap-[30px]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[819px] text-center">
            <h2 className="text-heading-2 text-[#1F1514]">
              Контактирајте не
            </h2>
            <p className="text-body-large text-[#1F1514]">
              Пополнете го формуларот и ќе ве контактираме наскоро
            </p>
          </div>

          <div className="w-full max-w-[600px]">
            <form onSubmit={handleSubmit} className="w-full rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[88px_48px] flex flex-col gap-6 sm:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-body-small text-[#1F1514] font-medium">
                    Име *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-medium focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
                    placeholder="Внесете го вашето име"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-body-small text-[#1F1514] font-medium">
                    Презиме *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-medium focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
                    placeholder="Внесете го вашето презиме"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-body-small text-[#1F1514] font-medium">
                  Е-пошта *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-medium focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
                  placeholder="Внесете ја вашата е-пошта"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-body-small text-[#1F1514] font-medium">
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-medium focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
                  placeholder="Внесете го вашиот телефон"
                />
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="w-full mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-[10px]">
                  <p className="text-center">Ви благодариме! Вашата порака е успешно испратена. Ќе ве контактираме наскоро.</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="w-full mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-[10px]">
                  <p className="text-center">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-6 px-8 py-4 text-[#1F1514] text-button rounded-[10px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#F4DA84] hover:bg-[#E4CA74] focus:ring-[#F4DA84]'
                }`}
              >
                {isSubmitting ? 'Се испраќа...' : 'Испрати'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Google Map Section */}
      <div className="relative z-20 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px] mt-12 sm:mt-16 md:mt-20 lg:mt-[100px]">
        <div className="flex flex-col items-center gap-6 sm:gap-12 md:gap-10 lg:gap-[30px]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[819px] text-center">
            <h2 className="text-heading-2 text-[#1F1514]">
              Нашата локација
            </h2>
            <p className="text-body-large text-[#1F1514]">
              Најдете не на адресата Дане Крапчев 21/6, Центар-Скопје
            </p>
          </div>
          
          <div className="w-full max-w-[800px]">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
