
import SkillBar from "../Components/Skillbar";

export function Skills() {
  type ButtonType = {
    title: string;
  };

  const buttons: ButtonType[] = [
    { title: "React" },
    { title: "Typescript" },
    { title: "Next.js" },
    { title: "Tailwind CSS" },
    { title: "JavaScript" },
    { title: "Git" },
    { title: "Figma" },
    { title: "REST APIs" },
  ];

  return (
    <div className="p-5 lg:p-12 md:p-12 py-16 bg-white" id="skills">
      {/* Title */}
      <h1 className="text-center font-semibold text-2xl underline underline-offset-16 decoration-5 decoration-blue-500 mt-4 mb-10">
        Skills & Expertise
      </h1>

      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="max-w-xl mt-10">
          <h2 className="text-3xl font-bold mb-8">Frontend</h2>

          <SkillBar name="React" level={95} />
          <SkillBar name="TypeScript" level={90} />
          <SkillBar name="Next.js" level={88} />
          <SkillBar name="Tailwind CSS" level={92} />
          <SkillBar name="JavaScript" level={95} />
        </div>

        <div className="max-w-xl mt-10">
          <h2 className="text-3xl font-bold mb-8">Design & Tools</h2>

          <SkillBar name="Figma" level={85} />
          <SkillBar name="Adobe XD" level={80} />
          <SkillBar name="Git" level={90} />
          <SkillBar name="Webpack" level={92} />
          <SkillBar name="Vite" level={95} />
        </div>

        <div className="max-w-xl mt-10">
          <h2 className="text-3xl font-bold mb-8">Additional</h2>

          <SkillBar name="HTML5/CSS3" level={98} />
          <SkillBar name="REST APIs" level={87} />
          <SkillBar name="GraphQL" level={82} />
          <SkillBar name="Testing" level={85} />
          <SkillBar name="Responsive Design" level={95} />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-2xl">Technologies | Work With</h1>
      </div>

      {/* BUTTON LIST */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {buttons.map((btn, index) => (
          <div
            key={index}
            className="w-fit bg-[#f9fafc] text-black px-4 py-2 rounded-xl 
                       cursor-pointer hover:bg-blue-700 active:scale-95 
                       transition-all"
          >
            {btn.title}
          </div>
        ))}
      </div>
    </div>
  );
}
