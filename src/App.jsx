import { Button } from '@mui/material';
import { useEffect, useRef, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import profile_pic from './images/profile_pic.jpg';
import MOC from './images/MOC_Bootstrap.jpg';
import price_panel from './images/Pricing_Panel.jpg';
import { FaGithub, FaLinkedin, FaTwitter, FaRegFileCode } from 'react-icons/fa';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import full_stack from './images/full_stack.png';
import todo from './images/todo.png';
import jobs from './images/jobs.png';
import portfolio from './images/portfolio.png';
const App = () => {
  return (
    <div className='bg-sky-200'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [height, setHeight] = useState('0px');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update the height state based on the dropdown content's height  
    setHeight(isOpen ? `${dropdownRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <header className="bg-green-700 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">V Raghavendra</h1>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <nav className="hidden sm:flex">
          <ul className="flex space-x-8 text-2xl">
            <li>
              <a
                href="#about"
                className="hover:text-green-300 transition transform hover:-translate-y-1 duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-300 transition transform hover:-translate-y-1 duration-300 ease-in-out"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-300 transition transform hover:-translate-y-1 duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Dropdown for small screens */}
      <div
        ref={dropdownRef}
        style={{ maxHeight: height }}
        className={`sm:hidden bg-green-700 p-1  transition-max-height duration-500 ease-in-out overflow-hidden `}
      >
        <ul className="flex flex-col justify-self-center space-y-4 text-2xl pt-2">
          <li>
            <a
              href="#about"
              className="hover:text-green-300 transition transform hover:-translate-y-1 duration-300 ease-in-out p-2"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-green-300 transition transform hover:-translate-y-1 duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-green-300 transition transform hover:-translate-y-1 duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};


const Main = () => {
  return (
    <main className="container mx-auto p-6  ">
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

const About = () => {
  return (
    <section id="about" className="my-6">
      <h2 className="text-2xl font-bold mb-6 flex justify-center ">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src={profile_pic} alt="A professional headshot of John Doe" className="rounded-full mb-6 md:mb-0 md:mr-6 object-cover h-40 w-40" />
        <p className="text-lg leading-relaxed">
          I am a Full Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, Express and MongoDB. Currently, I am interning at Prajnan Software Private Limited, where I am actively developing responsive web applications and contributing to a SaaS-based inventory management system. I hold a Bachelor’s degree in Electrical and Electronics Engineering from REVA University, with a CGPA of 9.16/10.0. My technical expertise spans various programming languages and frameworks, and I am passionate about leveraging technology to enhance user experiences.
        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="my-12 ">
      <h2 className="text-2xl font-bold mb-6 flex justify-center">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <a href="https://github.com/VRH7733/jobs" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="jobs Dashboard"
            title2="Technologies used"
            description="React, React Router, JSON-Server, Vite, Tailwind CSS, React Icons, React Toastify"
            imageUrl={jobs}
            imageAlt="Screenshot of the Enterprise Dashboard project"
          />
        </a>
        <a href="https://github.com/VRH7733/full_stack_e-commerce" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="E-commerce Platform"
            title2="Technologies used"
            description="React, Node.js, Express, MongoDB, HTML, CSS, JavaScript, APIs, Vite, React Router"
            imageUrl={full_stack}
            imageAlt="Screenshot of the E-commerce Platform project"
          />
        </a>

        <a href="https://github.com/VRH7733/Portfolio" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="Portfolio Website"
            title2="Technologies used"
            description="React, Vite, Tailwind CSS, Material-UI, EmailJS, JavaScript, PostCSS, ESLint, React Router."
            imageUrl={portfolio}
            imageAlt="Screenshot of the Portfolio Website project"
          />
        </a>
        <a href="https://github.com/VRH7733/todoList" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="Todo_list using material ui"
            title2="Technologies used"
            description=" Material UI, JavaScript, HTML, CSS"
            imageUrl={todo}
            imageAlt="Screenshot of the Task Management Tool project"
          />
        </a>
        <a href="https://github.com/VRH7733/Pricing-Panel" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="Pricing-Panel"
            title2="Technologies used"
            description="HTML, CSS, JavaScript"
            imageUrl={price_panel}
            imageAlt="Screenshot of the Social Media App project"
          />
        </a>

        <a href="https://github.com/VRH7733/museum-of-candy-Bootstrap" target="_blank" rel="noopener noreferrer">
          <ProjectCard
            title="Museum of candy"
            title2="Technologies used"
            description="HTML, CSS, Bootstrap, JavaScript"
            imageUrl={MOC}
            imageAlt="Screenshot of the Blog Platform project"
          />
        </a>

      </div>
    </section>
  );
};

const ProjectCard = ({ title, title2, description, imageUrl, imageAlt }) => {
  return (
    <div className="bg-customgre rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
      <img src={imageUrl} alt={imageAlt} className="w-full h-64 object-fit" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-green-800 text-center">{title}</h3>
        <p className="text-lg font-bold mb-2 text-green-800">{title2}</p>
        <p className="text-green-700">{description}</p>
      </div>
    </div>
  );
};


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o76akap', 'template_bvfyv8c', form.current, 'G7KEKPCQENHVdN5CF',
      )
      .then(
        () => {
          console.log('SUCCESS!');
          // Optionally reset the form or show a success message
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Optionally show an error message to the user
        },
      );
  };

  return (
    <section id="contact" className="my-12">
      <h2 className="text-2xl font-bold mb-6 flex justify-center">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto bg-sky-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button variant="contained" type="submit">
            Send <SendIcon className='ml-2 mb-[3px]' />
          </Button>
        </div>
      </form>
    </section>
  );
};


const Footer = () => {
  return (
    <footer className="bg-green-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">&copy; 2024 V Raghavendra. All rights reserved.</p>
        <div className="flex flex-row justify-center items-center space-x-0 sm:space-x-8 mt-4 ">
          <a href="https://github.com/VRH7733" className="transition duration-300 hover:text-gray-300 hover:bg-gray-800 p-2 rounded hover:scale-125 mb-1 " target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/v-raghavendra1/" className="transition duration-300 hover:text-gray-300 hover:bg-blue-800 p-2 rounded hover:scale-125 mb-1 " target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.geeksforgeeks.org/user/raghavendra5iaf/" className="transition duration-300 hover:text-gray-300 hover:bg-green-600 p-2 rounded hover:scale-125 mb-1 " target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks size={30} />
          </a>
          <a href="https://leetcode.com/u/raghavendravenkatesh1/" className="transition duration-300 hover:text-gray-300 hover:bg-orange-600 p-2 rounded hover:scale-125" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App
