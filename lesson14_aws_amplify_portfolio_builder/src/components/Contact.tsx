const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="mb-8">Feel free to reach out to me for collaboration or questions.</p>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  