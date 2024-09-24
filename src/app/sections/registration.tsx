"use client";

import React, { useState, useEffect } from "react";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { getCountryCallingCode, CountryCode } from "libphonenumber-js";
import { poppins } from "../fonts";
import { IconChevronRight , IconChevronLeft} from '@tabler/icons-react';

countries.registerLocale(en);

const TournamentRegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    country: "",
    phone: "",
    gender: "",
    email: "",
    players: "",
    category: "",
    ageGroup: "",
  });
  const [countryCode, setCountryCode] = useState("+1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("tournamentRegistrationData");
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "tournamentRegistrationData",
        JSON.stringify(formData)
      );
    }
  }, [formData]);

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    let { name, value } = e.target;

    if (name === "captainName" || name === "teamName") {
      value = capitalize(value);
    }

    setFormData({ ...formData, [name]: value });

    if (name === "country") {
      const alpha2Code = countries.getAlpha2Code(value, "en");
      if (alpha2Code) {
        try {
          const dialCode = getCountryCallingCode(alpha2Code as CountryCode);
          setCountryCode(`+${dialCode}`);
        } catch (error) {
          console.error("Error fetching country calling code:", error);
          setCountryCode("+1");
        }
      } else {
        setCountryCode("+1");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/tournament/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      alert(result.message);
      localStorage.removeItem("tournamentRegistrationData"); // Clear persisted data
      setFormData({
        teamName: "",
        captainName: "",
        country: "",
        phone: "",
        gender:"",
        email: "",
        players: "",
        category: "",
        ageGroup: "",
      });
      setCurrentStep(1); 
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const goToStep = (step: number) => setCurrentStep(step);

  const steps = 3;

  return (
    <section
      className={`text-black py-20 min-h-screen bg-[#F9F6EE] ${poppins.variable} font-poppins`}
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <h2 className="text-4xl md:text-5xl text-black mb-4 text-center">
          Cricket Tournament Registration
        </h2>
        <p className="text-lg text-black text-center mb-10">
          Register your team for the upcoming tournament! Fill out the form
          below, and we will get back to you.
        </p>

        <div className="flex justify-center items-center mb-10">
          {[...Array(steps)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full ${
                  i + 1 <= currentStep
                    ? "bg-[#F56948]"
                    : "bg-gray-300"
                } text-white flex justify-center items-center cursor-pointer`}
                onClick={() => goToStep(i + 1)}
              >
                {i + 1}
              </div>
              {i + 1 < steps && (
                <div
                  className={`w-12 h-1 ${
                    i + 1 < currentStep
                      ? "bg-[#F56948]"
                      : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1c69c1] p-8 rounded-lg shadow-lg"
        >
          {currentStep === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col">
                  <label className="block text-sm font-medium text-white mb-2">
                    Team Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Team Name"
                    className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-sm font-medium text-white mb-2">
                    Captain's Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="captainName"
                    value={formData.captainName}
                    onChange={handleChange}
                    placeholder="Captain's Name"
                    className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                    required
                  />
                </div>
              </div>
              <button
                onClick={nextStep}
                type="button"
                className="w-full py-2 bg-[#F56948] text-white rounded-md flex justify-center"
              >
                   <span className="px-2">Next</span>
                   <IconChevronRight size={24} />
              </button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Country and Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                    required
                  >
                    <option value="">Select your country</option>
                    {Object.entries(countries.getNames("en")).map(([code, name]) => (
                      <option key={code} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-gray-100 text-black">
                      {countryCode}
                    </span>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-100 text-black rounded-r-md"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Gender and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Gender<span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded-md flex justify-center"
                >
                   <IconChevronLeft size={24} />
                   <span className="px-2">Previous</span>

                </button>
                <button
                  onClick={nextStep}
                  type="button"
                  className="py-2 px-4 bg-[#F56948] text-white rounded-md flex justify-center"
                >
                   <span className="px-2">Next</span>
                   <IconChevronRight size={24} />
                </button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    No. of Players
                  </label>
                  <select
                    name="players"
                    value={formData.players}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                  >
                    <option value="" disabled>
                      Select No. of Players
                    </option>
                    <option value="8">8</option>
                    <option value="11">11</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="T20">T20</option>
                    <option value="One Day">One Day</option>
                    <option value="Test Match">Test Match</option>
                    <option value="Corporate Cricket">Corporate Cricket</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                  Age Group
                </label>
                <select
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 text-black rounded-md"
                >
                  <option value="" disabled>
                    Select Age Group
                  </option>
                  <option value="4-8">4-8</option>
                  <option value="8-12">8-12</option>
                  <option value="12-16">12-16</option>
                  <option value="16-20">16-20</option>
                  <option value="Above 21">Above 21</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded-md flex justify-center"
                >
                  <IconChevronLeft size={24} />
                  <span className="px-2">Previous</span>

                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#F56948] text-white rounded-md flex justify-center"
                >
                   <span className="px-2">Submit</span>
                   <IconChevronRight size={24} />
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default TournamentRegistrationForm;