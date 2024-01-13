
import TypewriterComponent from "typewriter-effect";

import github from "../assets/skills/github-icon-1.svg"
import linkedIn from "../assets/skills/linkedIn.svg"
import email from "../assets/skills/email.svg"
import { Link } from "react-scroll";
const Home = () => {
  
    return ( 
    <div id="hero">
        <div>
            <br />
            <br />
            <div className=" pt-24 text-white py">
                <h2 className="lg:text-8xl text-3xl mb-2 font-semibold">
                Hello 👋🏻
                </h2>
                <h1 className="lg:text-8xl text-3xl mb-4 font-semibold" >
                I'm Sahil Mohammad
                </h1>
                <h2 className=" lg:text-6xl text-2xl mb-4 font-semibold">
                I <span style={{ display: 'inline-block', marginBottom: '0.5rem' }} className="text-[#6fc1ce]">{<TypewriterComponent
                 options={{strings:[
                    "am a Full Stack Developer",
                    "develop and design apps ",
                
                ],
                autoStart:true,
                loop:true
                }}/>} </span>
                
                </h2>
                <div>
                    
                </div>
                <div className="py-3">
                <a href="https://docs.google.com/document/d/1xl51GxzxrdUpPOzQBBuSL1ABt0XtykLD6D3lZB9GKMQ/edit?usp=sharing">
                <button className="hover:bg-white hover:text-[#141424] bg:rgb(20,20,36) text-xl text-white border border-white p-2 px-6 rounded-sm font-semibold">Resume</button>
                </a>
                </div>
                <div className="pt-5 flex gap-5">
                <a href="https://github.com/mohammadsahil01">
                <img src={github} alt={``} className="filter invert hover:cursor-pointer"  />
                </a>
                <a href="mailto:mohammadsahil7972@gmail.com">
                <img src={email} alt={``} className="filter invert hover:cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/sahil-mohammad-258584181/">
                <img src={linkedIn} alt={``} className="filter invert hover:cursor-pointer" />
                </a>
                </div>
                <div className="pt-8">
                    <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                <button className="hover:bg-white hover:text-[#141424] bg:rgb(20,20,36) text-xl text-white border border-white p-2 px-6 rounded-sm font-semibold">View Work</button>
                </Link>
                </div>
                
            </div>
        </div>
    </div>
     );
}
 
export default Home;



