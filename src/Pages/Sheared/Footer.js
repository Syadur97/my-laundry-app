import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-auto lg:mr-auto text-center lg:text-left">
            <p className="text-white font-semibold">Connect with us:</p>
            <div className="flex justify-center lg:justify-start">
              <a href="#" className="text-gray-400 hover:text-white mx-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-auto text-center lg:text-right">
            <p className="text-gray-400">© 2023 My-Laundry. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
