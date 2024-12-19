import React from 'react';

const Footer = () => {
   return (
      <footer className="bg-verde text-white py-6 h-[40vh]">
         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Contact Section */}
            <div>
               <h3 className="text-lg font-bold mb-2">Contact Us</h3>
               <p>Email: support@plantshop.com</p>
               <p>Phone: +1 (555) 123-4567</p>
               <p>Address: 123 Green Lane, Plant City</p>
            </div>

            {/* Quick Links */}
            <div>
               <h3 className="text-lg font-bold mb-2">Quick Links</h3>
               <ul className="space-y-2">
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a href="/products" className="hover:underline">Shop Plants</a></li>
                  <li><a href="/about" className="hover:underline">About Us</a></li>
                  <li><a href="/contact" className="hover:underline">Contact</a></li>
               </ul>
            </div>

            {/* Social Media */}
            <div>
               <h3 className="text-lg font-bold mb-2">Follow Us</h3>
               <ul className="flex space-x-4">
                  <li>
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Facebook
                     </a>
                  </li>
                  <li>
                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Instagram
                     </a>
                  </li>
                  <li>
                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Twitter
                     </a>
                  </li>
               </ul>
            </div>
         </div>

         <div className="text-center mt-6 border-t-2 border-white pt-4">
            <p>&copy; {new Date().getFullYear()} Plant Shop. All rights reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
