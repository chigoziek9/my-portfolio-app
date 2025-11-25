import React from "react";
import ContactForm from "./ContactForm";

export function Contact() {
  type Card = {
    title: string;
    description: string;
    image: string;
  };

  const cards: Card[] = [
    {
      title: "Email",
      description: "Chigoziekingsley866@gmail.com",
      image: "/email.png",
    },
    {
      title: "phone",
      description: "+234 704 359 7271, +234 808 276 2778",
      image: "/phone.png",
    },
    {
      title: "Location",
      description: "Nigeria, Portharcourt.",
      image: "/location.png",
    },
  ];

  return (
    <div className="p-5 lg:p-12 md:p-12 py-16 bg-[#f9fafc]" id="contact">
      {/* Title */}
      <h1 className="text-center font-semibold text-2xl underline underline-offset-16 decoration-5 decoration-blue-500 mt-4 mb-10">
        Get In Touch
      </h1>
      <p className="text-center">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'd love to hear from{" "}
        <span>
          <br />
          you!
        </span>
      </p>
      {/* ===== CARDS SECTION ===== */}

      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        {/* Cards Section */}
        <div className="flex flex-col gap-4 mt-5 lg:w-1/3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#e3e4e6] shadow-lg w-full p-4"
            >
              <div className="w-18 h-15 mx-2 mt-3">
                <img src={card.image} alt="" />
              </div>

              <h2 className="text-xl font-semibold mt-6 px-2">{card.title}</h2>
              <p className="text-gray-600 mt-4 px-2">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <div className="lg:w-2/3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
