import React from 'react';
import logo from "../assets/vws-logo.webp"
import { BsTwitter } from 'react-icons/bs';
import { CgTwitter } from 'react-icons/cg';
import { FaGithub, FaLinkedin, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex items-center'>
                <a href="/" aria-label='Home'>
                    <img className='mx-2 rounded backdrop-blur' width={50} height={50} src={logo} alt="Logo" />
                </a>
            </div>

            {/* Hamburger Icon for small screens */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} aria-label='Menu Toggle'>
                    {isOpen ? <FaTimes className='text-3xl' /> : <FaBars className='text-3xl' />}
                </button>
            </div>

            {/* Full Menu for larger screens */}
            <div className={`lg:flex items-center gap-8 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <motion.a 
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    href="#skills" 
                    aria-label='Skills'>
                    <h3 className='text-black'>Skills</h3>
                </motion.a>

                <motion.a 
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    href="#experience" 
                    aria-label='Experience'>
                    <h3 className='text-black'>Experience</h3>
                </motion.a>

                <motion.a 
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    href="#projects" 
                    aria-label='Projects'>
                    <h3 className='text-black'>Projects</h3>
                </motion.a>
            </div>

            {/* Social Icons */}
            <div className={`lg:flex items-center gap-7 text-4xl ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <motion.a 
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    title='LinkedIn'
                    href="https://www.linkedin.com/in/vwslinked/" aria-label='LinkedIn'>
                    <FaLinkedin />
                </motion.a>

                <motion.a 
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    title='GitHub'
                    href="https://github.com/vignesh-codes" aria-label='GitHub'>
                    <FaGithub />
                </motion.a>

                <motion.a 
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    title='Email'
                    href="mailto:vsunder2@uwo.ca" aria-label='Email'>
                    <BiMailSend />
                </motion.a>
            </div>
        </nav>
    );
    
};
