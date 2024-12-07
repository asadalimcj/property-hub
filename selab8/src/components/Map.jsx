import React from "react";
// Map Component
const Map = () => {
  return (
    <div className="w-full md:w-1/2 bg-slate-950 h-[50vh] md:h-[100vh] text-white">
      <iframe
        className="flex items-center justify-center h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.95368151565!2d74.0047345272737!3d31.48251798697851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731328572551!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="asad"
      ></iframe>
    </div>
  );
};
export default  Map;