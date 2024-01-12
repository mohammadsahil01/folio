
import javascript from "./../assets/skills/javascript.svg";
import react from "./../assets/skills/react.svg";
import redux from "./../assets/skills/redux.svg";
import git from "./../assets/skills/git.svg";
import html from "./../assets/skills/html.svg";
import css from "./../assets/skills/css.svg";
import tailwind from "./../assets/skills/tailwind.svg";
import next from "./../assets/skills/next.svg";
import nodejs from "./../assets/skills/nodejs-icon.svg";
import typeScript from "./../assets/skills/typescript.svg";


const Slist = [javascript, react,nodejs,typeScript, redux,next, git, html, css, tailwind, ];

const MySkills = () => {
  return (
    <div className="mt-16" id="skills">
 <h1 className="flex items-center justify-center text-white text-4xl lg:text-6xl py-16">
        My <span className="ml-5 text-[#6fc1ce]">Skills</span>
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-16 lg:gap-28 lg:grid-cols-4">
          {Slist.map((img, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={img} alt={`skill-${index}`} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
     
    
  );
};

export default MySkills;
