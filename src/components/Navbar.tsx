import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-[#141424] z-30'>
      <nav className="mx-auto  max-w-7xl p-6 lg:px-8" aria-label="Global ">
        <div className="hidden fixed right-52 lg:flex items-end justify-end lg:gap-x-12 text-xl ">
          <Link spy={true} smooth={true} offset={50} duration={500} to="hero" className=" font-semibold leading-6 hover:text-gray-500 text-white no-underline hover:cursor-pointer">
            Home
          </Link>
          <Link spy={true} smooth={true} offset={50} duration={500} to="about" className=" font-semibold leading-6 text-white no-underline hover:text-gray-400 hover:cursor-pointer">
            About Me
          </Link>
          <Link spy={true} smooth={true} offset={50} duration={500} to="skills" className=" font-semibold leading-6 hover:cursor-pointer text-white no-underline hover:text-gray-400">
            Skills
          </Link>
          <Link spy={true} smooth={true} offset={15} duration={500} to="projects" className=" hover:cursor-pointer font-semibold leading-6 hover:text-gray-400 text-white no-underline">
            Projects
          </Link>
          <Link spy={true} smooth={true} offset={15} duration={500} to="contact" className=" font-semibold hover:cursor-pointer leading-6 hover:text-gray-400 text-white no-underline">
            Contact Me
          </Link>
          
        </div>
       
        <div className="flex items-end justify-end lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-9 w-9 text-white" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden bg-[#141424]" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 bg-[#141424] right-0 z-10 w-2/5 overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border border-l-1 translate-x-5"> 
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 text-white ">
              <Link
                  to='hero' spy={true} smooth={true} offset={50} duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-500"
                >
                  Home
                </Link>
                <Link
                  to='about' spy={true} smooth={true} offset={50} duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-500"
                >
                  About
                </Link>
                <Link
                  to='skills' spy={true} smooth={true} offset={50} duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-500"
                >
                  Skills
                </Link>
                <Link
                  to='projects' spy={true} smooth={true} offset={50} duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-500"
                >
                  Projects
                </Link>
                <Link
                  to='contact' spy={true} smooth={true} offset={50} duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-500"
                >
                  Contact Me
                </Link>
               
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
