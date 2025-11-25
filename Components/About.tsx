import React from "react";

export function About() {
  type Card = {
    title: string;
    description: string;
    image: string;
  };

  const cards: Card[] = [
    {
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and well-documented code is my priority.",
      image: "/cleancode.png",
    },
    {
      title: "Design Focus",
      description:
        "I believe great UX is the intersection of beauty and functionality.",
      image: "/design.png",
    },
    {
      title: "Performance",
      description:
        "Optimizing every aspect to ensure fast load times and smooth interactions.",
      image: "/performance.png",
    },
    {
      title: "Modern Stack",
      description:
        "Using cutting-edge technologies to build future-proof applications.",
      image: "/modern.png",
    },
  ];

  return (
   <div id="about">
     <div className="p-5 lg:p-12 md:p-12 py-16 bg-[#f9fafc]">
      {/* Title */}
      <h1 className="text-center font-semibold text-2xl underline underline-offset-16 decoration-5 decoration-blue-500 mb-10 mt-4">
        About Me
      </h1>

      {/* ===== TOP SECTION ===== */}
      <div
        className="
        flex flex-col 
        lg:flex-row 
        lg:w-6xl lg:justify-around
      "
      >
        {/* IMAGES */}
        <div
          className="
    grid 
    grid-cols-2 
    gap-3 
    w-full 
    lg:w-3xl lg:mt-15
  "
        >
          {/* Top big image spans 2 columns */}
          <img
            className="col-span-2 w-full h-72 sm:h-80 object-cover rounded-2xl"
            src="/profileimg.png"
            alt=""
          />

          {/* Two bottom images side by side */}
          <img
            className="w-full h-48 object-cover rounded-2xl"
            src="/profile2.png"
            alt=""
          />

          <img
            className="w-full h-48 object-cover rounded-2xl"
            src="/profile3.png"
            alt=""
          />
        </div>

        {/* TEXT */}
        <div
          className="
            w-full
            lg:w-3xl lg:mt-30 lg:ml-10
          "
        >
          <h1 className="font-semibold text-2xl mt-5">
            Passionate About Creating Digital Experiences
          </h1>

          <p className="mt-3 text-gray-700 leading-relaxed">
            With over 5 years of experience in front-end development, I've had
            the privilege of working with startups and established companies to
            bring their digital visions to life.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            My journey in web development started with a curiosity about how
            websites work, and it has evolved into a passion for creating
            seamless, accessible, and visually stunning user interfaces.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            When I'm not coding, you'll find me exploring new design trends,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </div>

      {/* ===== CARDS SECTION ===== */}
      <div
        className="
          mt-12 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-6 lg:flex lg:justify-between
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 h-auto lg:h-70 w-full lg:max-w-75"
          >
            <img src={card.image} className="w-20 h-20 mb-4" alt="" />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>

   </div>
  );
}
