
import LineWithcircle from "./LineWithCircle";



export function Experience() {
  type Card = {
    title: string;
   description: React.ReactNode;

  };

  const cards: Card[] = [
    {
      title: "Front-End Developer",
      description: (
        <>
          <p className="flex justify-end text-blue-600 font-bold">
            2022 - 2023
          </p>
          <h1 className="text-lg font-bold">Tech Innovations Inc.</h1>
          <p>
            Leading the front-end development team, architecting scalable React
            applications, and mentoring junior developers.
          </p>
          <p className="mt-2 text-gray-600">
            • Improved app performance by <strong>40%</strong> through
            optimization.
          </p>
          <p className="text-gray-600">
            • Led migration to <strong>TypeScript</strong> and modern tooling.
          </p>
          <p>• Implemented design system used across 5 products</p>
        </>
      ),
    },
    {
      title: "Front-End Developer",
      description: (
        <>
          <p className="flex justify-end text-blue-600 font-bold">
            2022 - 2023
          </p>
          <h1 className="text-lg font-bold">Tech Innovations Inc.</h1>
          <p>
            Leading the front-end development team, architecting scalable React
            applications, and mentoring junior developers.
          </p>
          <p className="mt-2 text-gray-600">
            • Improved app performance by <strong>40%</strong> through
            optimization.
          </p>
          <p className="text-gray-600">
            • Led migration to <strong>TypeScript</strong> and modern tooling.
          </p>
          <p>• Implemented design system used across 5 products</p>
        </>
      ),
    },
  ];

  return (
    <div className="mt-4" id="experience">
      <div className="px-12 sm:px-5 lg:px-20 py-16 bg-white ">
      {/* Title */}
      <h1 className="text-center font-semibold text-2xl underline underline-offset-16 decoration-5 decoration-blue-500 mb-10">
        Experience & Education
      </h1>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row md:gap-8 justify-center items-start">
        {/* LINE SECTION */}
        <div className="hidden lg:flex justify-center w-full lg:w-auto">
          <LineWithcircle />
        </div>

        {/* CARDS SECTION */}
        <div className="flex flex-col gap-6 w-full md:max-w-3xl mt-8 md:mt-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f9fafc] rounded-xl shadow-lg p-6 w-full"
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <div className="text-gray-600 space-y-2">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
}
