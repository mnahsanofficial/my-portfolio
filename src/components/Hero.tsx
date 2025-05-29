import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="section bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Nazmul Ahsan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">Full Stack Developer</h2>
          <p className="text-lg mb-8">
            I build exceptional digital experiences with modern web technologies.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#contact"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition"
            >
              Contact Me
            </Link>
            <Link
              href="#projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-xl">
            {/* Replace with your image */}
            <div className="w-60 h-60 md:w-72 md:h-72 bg-gray-200 rounded-full flex items-center justify-center text-dark">
              Profile Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;