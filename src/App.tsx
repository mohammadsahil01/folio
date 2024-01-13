

import './App.css'
import Home from './pages/Home';
import  { carouselItems } from './pages/Projects';
import About from './pages/About';
import MySkills from './pages/MySkills';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Carousel from './pages/test';





function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //     <Home/>
  //     ),
  //   },
  //   {
  //     path: "/projects",
  //     element: (
  //       <Projects/>
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: (
  //       <About/>
  //     ),
  //   },
  //   {
  //     path: "/skills",
  //     element: (
  //       <MySkills/>
  //     ),
  //   },
    
  // ]);

  return (
    <>
    <div className='mx-3 lg:mx-24'>
      <Navbar/>
      <Home/>
      <About/>
      <MySkills/>
      <Carousel data={carouselItems}/>
      <Contact/>
    </div>
    </>
  )
}

export default App
