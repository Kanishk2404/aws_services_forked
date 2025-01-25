const Skills = () => {
    return (
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">React</h3>
              <p className="text-gray-700">Frontend framework for building user interfaces.</p>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Node.js</h3>
              <p className="text-gray-700">JavaScript runtime for building backend services.</p>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Tailwind CSS</h3>
              <p className="text-gray-700">Utility-first CSS framework for fast design.</p>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">TypeScript</h3>
              <p className="text-gray-700">Typed superset of JavaScript for building robust applications.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  