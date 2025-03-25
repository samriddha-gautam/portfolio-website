"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImCross } from "react-icons/im";
import { LuCircleArrowUp } from "react-icons/lu";
import { FaRobot } from "react-icons/fa6";

const ChatAndScrollToTop = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Bot: Hello! I'm GautamBot, a lowly creation of  my God Samriddha Gautam . My god gave me abilities to perform various tasks that include:\n" +
    "- 'Go to (name_of_section)' to scroll to that section\n" +
    "- 'Clear chat' to reset our conversation\n" +
    "- 'Or try 'help' for list of all possible commands\n" +
    "What would you like to do?"
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  // Disable scrolling when chatbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Toggle visibility of ScrollToTop button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsScrollVisible(window.scrollY > 100); // Show only when scrolled past 100px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    setMessages((prev) => [...prev, `You: ${input}`]);

    const res = await fetch(`/api/chat?message=${encodeURIComponent(input)}`);
    const data = await res.json();

    // Handle different actions from the backend
    if (data.action === "clear_chat") {
      setMessages([]); // Clear the chat history
    } else {
      setMessages((prev) => [...prev, `Bot: ${data.reply}`]);
    }

    if (data.action === "scroll" && data.target) {
      const section = document.getElementById(data.target);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
      }
    } else if (data.action === "open_url" && data.url) {
      window.open(data.url, "_blank");
    }

    setInput("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mini navbar-like box for Chat and ScrollToTop buttons */}
      <div className="fixed bottom-4 right-3 z-50 flex 
                      flex-col items-center gap-4 backdrop-blur-[2px]
                      p-2 rounded-full shadow-lg border dark:border-white/20">
        {/* Chat Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="bg-customGreen text-white p-2 rounded-full 
                       shadow-lg hover:scale-110 hover:bg-opacity-80 
                       transition-all duration-100"
        >
          <FaRobot size={39} className="hover:animate-none animate-[pulsate_2s_ease-out_infinite]" />
        </button>

        {/* ScrollToTop Button */}
        <button
          onClick={scrollToTop}
          disabled={!isScrollVisible}
          className={`p-2 bg-transparent text-customGreen rounded-full hover:bg-customGreen hover:border-white hover:text-white transition-all duration-300 ${
            isScrollVisible ? "opacity-100" : "text-gray-400 pointer-events-none"
          }`}
        >
          <LuCircleArrowUp size={42} />
        </button>
      </div>

      {/* Chatbox and backdrop (when open) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/10 bg-opacity-10 backdrop-blur-lg z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-4 bottom-4 left-0 right-0 border-2 border-white/10 rounded-lg shadow-lg mx-auto z-50 w-4/5 max-w-4xl"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="relative bg-black text-customGreen shadow-lg rounded-md h-full flex flex-col">
                <div className="flex-1 m-8 overflow-y-auto">
                  {messages.map((msg, idx) => (
                    <motion.p
                      key={idx}
                      className="mb-2 whitespace-pre-line" // Preserve line breaks
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {msg}
                    </motion.p>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full p-2 border rounded bg-gray-800 text-white placeholder-gray-400"
                    placeholder="Type here..."
                  />
                  <button type="submit" className="hidden" />
                </form>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 transition-transform duration-300 hover:rotate-90"
                >
                  <ImCross size={22} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAndScrollToTop;