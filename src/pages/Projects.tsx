
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import youtube from "./../assets/youtube.png";
import ecom from "./../assets/Ecom.png";
import blazeAI from "./../assets/BlazeAI.png";
import graphQL from "./../assets/Safeimagekit-resized-img.png";
import { Item } from "./test";


const Projects = () => {
  return (
    <div className="text-white mt-20" id="projects">
      <div className="flex items-center justify-center">
        <h1 className="pb-16 text-4xl lg:text-6xl">
          My <span className="text-[#6fc1ce]">Projects</span>
        </h1>
      </div>
      <div className="flex items-center justify-center mr-4">
        <CCarousel controls indicators className="w-4/5 lg:w-1/2 mb-10">
          <CCarouselItem className="bg-gray-800 rounded-xl mb-8 shadow-white">
            <div className="py-3 flex items-center justify-center text-2xl text-[#6fc1ce]">
              Youtube Clone
            </div>
            <CImage className="d-block pb-7 px-10" src={youtube} alt="slide 1" />
            <div className="-mt-3 pb-5 text-white flex justify-between text-2xl px-10 lg:px-20">
              <a
                href="https://github.com/mohammadsahil01/ecom"
                className="text-white no-underline"
              >
                Code
              </a>
              <a
                href="https://youtube-clone-rouge-eight.vercel.app/"
                className="text-white no-underline"
              >
                Demo
              </a>
            </div>
          </CCarouselItem>

          <CCarouselItem className="bg-gray-800 rounded-xl mb-8">
            <div className="py-3 text-[#6fc1ce] flex items-center justify-center text-2xl">
              Ecommerce Platform
            </div>
            <CImage className="d-block pb-7 px-10" src={ecom} alt="slide 1" />
            <div className="-mt-3 pb-5 text-white flex justify-between text-2xl px-10 lg:px-20">
              <a
                href="https://github.com/mohammadsahil01/ecom"
                className="text-white no-underline"
              >
                Code
              </a>
              <a
                href="http://mern-ecomm-phi.vercel.app/"
                className="text-white no-underline"
              >
                Demo
              </a>
            </div>
          </CCarouselItem>

          <CCarouselItem className="bg-gray-800 rounded-xl mb-8">
            <div className="py-3 flex items-center justify-center text-2xl text-[#6fc1ce]">
              Blaze AI
            </div>
            <CImage className="d-block pb-7 px-10" src={blazeAI} alt="slide 1" />
            <div className="-mt-3 pb-5 text-white flex justify-between text-2xl px-10 lg:px-20">
              <a
                href="https://github.com/mohammadsahil01/blaze-ai"
                className="text-white no-underline"
              >
                Code
              </a>
              <a
                href="https://blaze-ai.vercel.app/"
                className="text-white no-underline"
              >
                Demo
              </a>
            </div>
          </CCarouselItem>
          <CCarouselItem className="bg-gray-800 rounded-xl mb-8">
            <div className="py-3 flex items-center justify-center text-2xl text-[#6fc1ce]">
              Backend with GraphQL
            </div>
            <CImage className="d-block pb-7 px-10" src={graphQL} alt="slide 1" />
            <div className="-mt-3 pb-5 text-white flex items-center justify-center text-2xl px-10 lg:px-20">
              <a
                href="https://github.com/mohammadsahil01/GraqphQL_backend"
                className="text-white no-underline"
              >
                Code
              </a>
            </div>
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
};

export default Projects;



export const carouselItems: Item[] = [
  {
    Img: youtube,
    Name: 'Youtube Clone',
    Code_link: 'https://github.com/mohammadsahil01/ecom',
    Demo_link: 'https://youtube-clone-rouge-eight.vercel.app/',
  },
  {
    Img: ecom,
    Name: 'Ecommerce Platform',
    Code_link: 'https://github.com/mohammadsahil01/ecom',
    Demo_link: 'http://mern-ecomm-phi.vercel.app/',
  },
  {
    Img: blazeAI,
    Name: 'Blaze AI',
    Code_link: 'https://github.com/mohammadsahil01/blaze-ai',
    Demo_link: 'https://blaze-ai.vercel.app/',
  },
  {
    Img: graphQL,
    Name: 'Backend with GraphQL',
    Code_link: 'https://github.com/mohammadsahil01/GraqphQL_backend',
    Demo_link:"/"
  },
];


