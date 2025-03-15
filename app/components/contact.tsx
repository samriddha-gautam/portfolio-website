"use client";
import { useState } from "react";

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
      setResponseMessage("Error sending message");
    }
  
    setLoading(false);
  
    if (res && res.ok) setFormData({ name: "", email: "", message: "" }); // Ensure res is defined
  };
  

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center gap-6">
      <h1 className="text-5xl">
        Contact<strong className="text-customGreen">Me</strong>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-black/70 p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-2 p-4 bg-customGreen/50 rounded-lg">
          <label className="md:w-24 font-semibold text-xl">Name:</label>
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            className="p-3 rounded-2xl text-customGreen focus:outline-none font-semibold" 
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 p-4 bg-customGreen/50 rounded-lg">
          <label className="md:w-24 font-semibold text-xl">Email:</label>
          <input 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            className="p-3 rounded-2xl text-customGreen focus:outline-none font-semibold" 
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2 p-4 bg-customGreen/50 rounded-lg">
          <label className="md:w-24 font-semibold text-xl">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="rounded-3xl w-full p-3 text-customGreen focus:outline-none font-semibold resize-none"
            placeholder="Any Message?"
          ></textarea>
        </div>
        <button type="submit" className="bg-customGreen p-3 rounded-xl font-semibold" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
        {responseMessage && <p className="text-white">{responseMessage}</p>}
      </form>
    </section>
  );
}
