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
        className={`sm:hidden bg-green-700 p-1 transition-max-height duration-500 ease-in-out overflow-hidden `}
      >
        <ul className="flex flex-col justify-self-center space-y-4 text-2xl">
          <li>
            <a
              href="#about"
              className="hover:text-green-300 transition transform hover:-translate-y-1 duration-300 ease-in-out "
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
    <section id="about" className="my-12">
      <h2 className="text-2xl font-bold mb-6 flex justify-center ">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src={profile_pic} alt="A professional headshot of John Doe" className="rounded-full mb-6 md:mb-0 md:mr-6 object-cover h-40 w-40" />
        <p className="text-lg leading-relaxed">
          I am a Full Stack Developer with expertise in HTML, CSS, JavaScript, React.js, and Node.js. Currently interning at Prajnan Software Private Limited, I focus on developing responsive web applications and a SaaS-based inventory management system. I hold a Bachelor’s degree in Electrical and Electronics Engineering from REVA University, with a CGPA of 9.16/10.0. My technical skills encompass multiple programming languages and frameworks, and I am passionate about leveraging technology to enhance user experiences.        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="my-12 ">
      <h2 className="text-2xl font-bold mb-6 flex justify-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="jobs Dashboard"
          description="A comprehensive dashboard for managing enterprise resources and analytics."
          imageUrl={jobs}
          imageAlt="Screenshot of the Enterprise Dashboard project"
        />
        <ProjectCard
          title="E-commerce Platform"
          description="A scalable e-commerce platform with advanced features and seamless user experience."
          imageUrl={full_stack}
          imageAlt="Screenshot of the E-commerce Platform project"
        />
        <ProjectCard
          title="Pricing-Panel"
          description="A social media application with real-time updates and interactive features."
          imageUrl={price_panel}
          imageAlt="Screenshot of the Social Media App project"
        />
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio website showcasing my skills and projects."
          imageUrl={portfolio}
          imageAlt="Screenshot of the Portfolio Website project"
        />
        <ProjectCard
          title="Museum of candy"
          description="A modern blog platform with rich text editing and content management features."
          imageUrl={MOC}
          imageAlt="Screenshot of the Blog Platform project"
        />
        <ProjectCard
          title="Todo_list using material ui"
          description="A task management tool to help teams collaborate and manage their work efficiently."
          imageUrl={todo}
          imageAlt="Screenshot of the Task Management Tool project"
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, imageUrl, imageAlt }) => {
  return (
    <div className="bg-customgre rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105">
      <img src={imageUrl} alt={imageAlt} className="w-full h-64 object-fit" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-green-800">{title}</h3>
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
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
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
          <a href="https://x.com/vraghav97568187" className="transition duration-300 hover:text-gray-300 hover:bg-gray-800 p-2 rounded hover:scale-125 mb-1 " target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={30} />
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
