export function Projects() {
  type Card = {
    title: string;
    description: string;
    image: string;
    stack: string;
    link: URL | string;
  };

  const cards: Card[] = [
    {
      title: "Real Estate Platform",
      description:
        "Writing maintainable, scalable, and well-documented code is my priority.",
      image: "/Realtyfinder.png",
      stack: "React, Javascript, Tailwind CSS",
      link: "https://realty-finder.vercel.app/",
    },
    {
      title: "E-commerce Platform",
      description:
        "A modern, full-featured e-commerce platform with shopping cart, payment integration, and real-time inventory management.",
      image: "/Ecommerce.png",
      stack: "React,Tailwind CSS, Javascript",
      link: "https://my-ecommerce-site-theta.vercel.app/",
    },
    {
      title: "Portfolio",
      description:
        "Optimizing every aspect to ensure fast load times and smooth interactions.",
      image: "/portfolio.png",
      stack: "React, Tailwind CSS, Typescript",
      link: "https://chigoziekingsley.vercel.app/",
    },
    {
      title: "Perfume E-commerce Shop",
      description:
        "A modern E-commerce platform specializing in perfumes with user-friendly navigation and secure checkout.",
      image: "/perfume.png",
      stack: "React, Tailwind CSS, Framer Motion, TypeScript",
      link: "https://https://oryna-scents.vercel.app/",
    },
  ];

  return (
    <div className="p-5 lg:p-12 md:p-12 py-16 bg-[#f9fafc]" id="projects">
      <h1 className="text-center font-semibold text-2xl underline underline-offset-16 decoration-5 decoration-blue-500 mt-4 mb-10">
        Featured Projects
      </h1>

      <p className="text-center">
        Here are some of my recent projects that showcase my skills in creating
        modern, responsive,
        <br /> and user-friendly applications.
      </p>

      {/* ===== CARDS ===== */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl shadow-lg p-4 
                       transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl"
          >
            <div className="relative">
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover rounded-lg 
                           transition-all duration-300 group-hover:brightness-75"
              />

              {/* ===== Live Demo button centered ===== */}
              <button
                onClick={() => window.open(card.link, "_blank")}
                className="absolute inset-0 m-auto h-fit w-fit
                           px-5 py-2 bg-white text-black rounded-lg shadow-md
                           opacity-0 scale-90
                           transition-all duration-300
                           group-hover:opacity-100 group-hover:scale-100"
              >
                Live Demo
              </button>
            </div>

            <h2 className="text-xl font-semibold mt-12 mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {card.stack.split(",").map((tech, i) => (
                <button
                  key={i}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg shadow hover:bg-blue-600 transition"
                >
                  {tech.trim()}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
