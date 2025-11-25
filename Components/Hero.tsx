
// import profileimg from '/profileimg.png';

export function Hero() {
  return (
    <div className="flex flex-col items-center  h-screen text-center px-4 bg-[#030c1c] text-[#cbd4e3]">
      <div className="inline-block rounded-full overflow-visible">
        <img
          src={"/profileimg.png"}
          alt="Profile Image"
          tabIndex={0}
          style={{
            width: "150px",
            height: "150px",
            boxShadow: "0 6px 14px rgba(12,30,63,0.12)",
          }}
          className={`
            rounded-full object-cover
            transition-all duration-300
            ease-[cubic-bezier(.22,.9,.3,1)]
            hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
            focus:outline-none focus-visible:shadow-[0_20px_40px_rgba(12,30,63,0.28),0_0_0_6px_rgba(99,102,241,0.18)]
            border-4 border-white/50
            will-change-transform
            mt-40
          `}
        />
      </div>

      <h1 className="mt-3 text-xl md:text-2xl font-bol " id="hero">
        Hi, I'm{" "}
        <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Modestus Chigozie Kingsley
        </span>
      </h1>

      <h2 className="mt-3 text-xl md:text-2xl font-semibold">
        Front-End Developer & UI/UX Enthusiast
      </h2>

      <h3 className="mt-3 max-w-3xl text-sm md:text-lg text-[#8e9ab3] leading-relaxed">
        I craft beautiful, responsive, and user-friendly web experiences with
        modern technologies. <br /> Specializing in React, TypeScript, and
        creating pixel-perfect interfaces that users love.
      </h3>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-sm bg-[#312afe] text-[#e0e9f0] hover:bg-[#2a7efe] px-6 py-3 rounded-lg transition-all"
        >
          View My Work
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-sm text-black bg-white hover:bg-[#d7f0ed] px-6 py-3 rounded-lg transition-all"
        >
          Contact Me
        </button>
      </div>

      <div className="animate-bounce text-4xl">
        <img
          src={"/arrow.png"}
          alt="arrow Image"
          tabIndex={0}
          style={{
            width: "80px",
            height: "80px",
            boxShadow: "0 6px 14px rgba(12,30,63,0.12)",
          }}
          className={`
            
           lg:mt-45 md:mt-40 mt-18
          `}
        />
      </div>
    </div>
  );
}
