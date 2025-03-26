"use client";
import { useState } from "react";
import { LuSend } from "react-icons/lu";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(""); // Clear previous messages
  
    let res; // Declare res here
  
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      // Ensure the response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response from server");
      }
  
      const data = await res.json();
      setResponseMessage(res.ok ? "Sent" : data.error); // Show "Sent" when successful
    } catch (error) {
      console.log("Error Sending Messages", error);
      setResponseMessage("Error Sending Message");
    }
  
    setLoading(false);
  
    if (res && res.ok) setFormData({ name: "", email: "", message: "" }); // Ensure res is defined
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center gap-8 p-16">
      {/* Heading */}
      <h1 className="dark:text-white text-4xl md:text-6xl font-bold text-center">
        Contact <strong className="text-customGreen">Me</strong>
      </h1>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 rounded-2xl bg-gradient-to-br from-black/80 to-customGreen/20 backdrop-blur-lg shadow-xl border border-customGreen/30"
      >
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 text-lg">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 text-white border border-customGreen/30 focus:outline-none focus:ring-2 focus:ring-customGreen transition-all duration-300 placeholder-gray-400"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-white/10 text-white border border-customGreen/30 focus:outline-none focus:ring-2 focus:ring-customGreen transition-all duration-300 placeholder-gray-400"
            placeholder="Your Email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-white font-semibold mb-2 text-lg">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 rounded-lg bg-white/10 text-white border border-customGreen/30 focus:outline-none focus:ring-2 focus:ring-customGreen transition-all duration-300 resize-none placeholder-gray-400"
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-customGreen text-white font-semibold rounded-lg hover:bg-customGreen/80 hover:scale-105 transition-all duration-300 ease-in-out shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          <LuSend size={24} />
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Response Message */}
        {responseMessage && (
          <p className={`mt-4 text-center ${responseMessage === "Sent" ? "text-customGreen" : "text-red-400"}`}>
            {responseMessage}
          </p>
        )}
      </form>
    </section>
  );
}