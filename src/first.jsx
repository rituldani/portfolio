import React from "react";

const projects = [
  {
    title: "Street painting for donation",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    image: "https://source.unsplash.com/400x300/?painting,art",
  },
  {
    title: "Exhibition of paintings",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    image: "https://source.unsplash.com/400x300/?gallery,art",
    highlight: true,
  },
  {
    title: "Nursing Home Volunteer",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    image: "https://source.unsplash.com/400x300/?volunteer,people",
  },
];

const ProjectSlider = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <p className="text-center max-w-3xl mx-auto mb-10">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua.
      </p>

      <div className="flex overflow-x-auto space-x-6 scrollbar-hide px-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`min-w-[300px] max-w-[320px] flex-shrink-0 rounded-xl shadow-md p-4 ${
              project.highlight ? "bg-white text-black" : "bg-gray-800"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            {project.highlight && (
              <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded font-bold">
                READ MORE
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {[0, 1, 2].map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i === 1 ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

</section>
  );
};

export default ProjectSlider;
