import React from "react";
import { LuInstagram, LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 dark:text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg font-semibold mb-4 cursor-pointer hover:text-customGreen">Follow Me</p>
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white  hover:text-customGreen dark:hover:text-customGreen text-2xl"
          >
            <LuFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white hover:text-customGreen dark:hover:text-customGreen text-2xl"
          >
            <LuInstagram />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white  hover:text-customGreen dark:hover:text-customGreen text-2xl"
          >
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white hover:text-customGreen dark:hover:text-customGreen text-2xl"
          >
            <LuLinkedin />
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-600 dark:text-white">
          &copy; {new Date().getFullYear()} Samriddha Gautam. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
