
const About = () => {
    return (
    <div className="mt-16" id="about">
    <h1 className="flex items-center justify-center text-white text-4xl lg:text-6xl py-16">
        About <span className="ml-5 text-[#6fc1ce]">Me</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 text-white">
        <div className="col-span-1 text-3xl font-semibold lg:text-5xl text-white">
        Welcome to my digital abode! I'm Sahil Mohammad, a passionate full-stack developer weaving intricate web solutions.
        </div>
        <div className="col-span-1 text-md lg:text-xl text-gray-300">
        "Deeply passionate about software engineering and problem-solving, I've delved into the intricacies of the MERN stack. I thrive on the challenges of full-stack development. Constantly upskilling, I stay at the forefront of the latest technologies, ensuring my work remains innovative and impactful."
        </div>
      </div>
    </div>
     
     );
}
 
export default About;