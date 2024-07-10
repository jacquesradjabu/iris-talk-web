import React from 'react';

const Footer = () => {
   return (
      <aside className="hidden lg:block bg-gray-100 p-4 w-64 shadow-lg">
         <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">App Information</h2>
            <p className="text-sm text-gray-600">Learn more about our app features, user guides, and more.</p>
         </div>
         <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Trends</h2>
            <p className="text-sm text-gray-600">Stay updated with the latest trends and updates in our app.</p>
         </div>
         <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Terms & Conditions</h2>
            <p className="text-sm text-gray-600">Read our terms and conditions to understand our policies.</p>
         </div>
         <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Support</h2>
            <p className="text-sm text-gray-600">Need help? Visit our support page for assistance.</p>
         </div>
         <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Developer Teams</h2>
            <p className="text-sm text-gray-600">Meet our dedicated developer teams and learn about their work.</p>
         </div>
         <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-sm text-gray-600">Our headquarters are located in XYZ city, Country.</p>
         </div>
         <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Contacts</h2>
            <p className="text-sm text-gray-600">Get in touch with us via email: contact@example.com</p>
         </div>
         <div>
            <h2 className="text-xl font-bold mb-2">Get in Touch</h2>
            <p className="text-sm text-gray-600">We'd love to hear from you! Reach out to us anytime.</p>
         </div>
      </aside>
   );
};

export default Footer;