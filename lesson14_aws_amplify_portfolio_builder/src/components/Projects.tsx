const Projects = () => {
    return (
      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-700 mb-4">A description of Project 1.</p>
              <a href="#" className="text-blue-600">View Project</a>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-700 mb-4">A description of Project 2.</p>
              <a href="#" className="text-blue-600">View Project</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  