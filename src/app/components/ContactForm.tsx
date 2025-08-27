import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative overflow-hidden bg-[#F3F0E6] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      <div className="relative z-20 max-w-[1444px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-[100px]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[819px] text-center">
            <h2 className="text-heading-2 text-[#1F1514]">
              Контактирајте не
            </h2>
            <p className="text-body-large text-[#1F1514]">
              Пополнете го формуларот подолу и ќе ве контактираме наскоро
            </p>
          </div>

          <div className="w-full max-w-[600px]">
            <form onSubmit={handleSubmit} className="w-full border border-[#5A7D7C] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-[88px_48px] flex flex-col gap-6 sm:gap-8">
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
                    className="w-full px-4 py-3 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-small focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-small focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-small focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-[#5A7D7C] rounded-[10px] bg-white text-[#1F1514] text-body-small focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:border-transparent"
                  placeholder="Внесете го вашиот телефон"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-8 py-4 bg-[#5A7D7C] text-white text-button rounded-[10px] hover:bg-[#4A6D6C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5A7D7C] focus:ring-offset-2"
              >
                Испрати
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
