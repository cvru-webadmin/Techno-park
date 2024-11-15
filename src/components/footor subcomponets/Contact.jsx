import React from "react";

export default function Contact() {
  return (
    <div className="col-span-2">
      <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
      <p className="text-sm leading-relaxed">
        <strong>Techno Park</strong>, School of Computer Science and Technology
      </p>
      <p className="text-sm leading-relaxed mt-2">
        <strong>Address:</strong> Village: Balkhadsura, Post: Chhaigaon Makhan, 
        Khandwa, MP, PinCode: 450771
      </p>
      <p className="text-sm leading-relaxed mt-2">
        <strong>Phone (India):</strong> +07320-247700/01, 6269001060, 6269001063, 9575916565
      </p>
      <p className="text-sm leading-relaxed mt-2">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:info@cvrump.ac.in"
          className="text-blue-400 hover:underline"
        >
          info@cvrump.ac.in
        </a>
      </p>
    </div>
  );
}
