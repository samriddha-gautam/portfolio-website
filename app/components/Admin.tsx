"use client";
import { useEffect, useState } from "react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminPanel() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
        try {
          const res = await fetch("/api/contact");
          
          // Ensure response is JSON
          const contentType = res.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Invalid response from server");
          }
      
          const data = await res.json();
          setContacts(data);
        } catch (error) {
          console.error("Error fetching contacts:", error);
        } finally {
          setLoading(false);
        }
      };
      

    fetchContacts();
  }, []);

  return (
    <div className="w-full max-w-3xl bg-black/70 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-customGreen mb-4">Received Messages</h2>
      
      {loading ? (
        <p className="text-white">Loading messages...</p>
      ) : contacts.length === 0 ? (
        <p className="text-white">No messages received yet.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li key={contact._id} className="border p-4 rounded-lg bg-gray-800">
              <p className="text-white"><strong>Name:</strong> {contact.name}</p>
              <p className="text-white"><strong>Email:</strong> {contact.email}</p>
              <p className="text-white"><strong>Message:</strong> {contact.message}</p>
              <p className="text-gray-400 text-sm"><strong>Received:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
