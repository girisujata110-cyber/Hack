import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <p className="text-gray-600 text-lg leading-8">
            Hi! I'm <span className="font-semibold text-blue-600">Sujata Giri</span>,
            a passionate Class 11 Technical student from Nepal. I enjoy
            learning modern web technologies and creating beautiful,
            responsive websites using React and Tailwind CSS.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Along with web development, I'm preparing for engineering
            entrance examinations while strengthening my knowledge in
            Mathematics, Physics, and Chemistry. I love solving problems,
            exploring new technologies, and continuously improving my
            programming skills.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            My goal is to become a skilled full-stack developer and build
            modern web applications that make a positive impact. I'm always
            eager to learn new things and take on exciting challenges.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div className="text-center bg-blue-50 rounded-xl p-4">
              <h3 className="font-bold text-blue-600 text-xl">HTML</h3>
            </div>

            <div className="text-center bg-sky-50 rounded-xl p-4">
              <h3 className="font-bold text-sky-600 text-xl">CSS</h3>
            </div>

            <div className="text-center bg-cyan-50 rounded-xl p-4">
              <h3 className="font-bold text-cyan-600 text-xl">Tailwind</h3>
            </div>

            <div className="text-center bg-indigo-50 rounded-xl p-4">
              <h3 className="font-bold text-indigo-600 text-xl">React</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;