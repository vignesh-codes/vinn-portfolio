import React, { useState } from 'react';
import logo from "../../public/assets/vws-logo.webp";
import { BsTwitter } from 'react-icons/bs';
import { CgTwitter } from 'react-icons/cg';
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
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
                    href="/#skills"
                    aria-label='Skills'>
                    <h3 className='text-black'>Skills</h3>
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    href="/#experience"
                    aria-label='Experience'>
                    <h3 className='text-black'>Experience</h3>
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    href="/#projects"
                    aria-label='Projects'>
                    <h3 className='text-black'>Projects</h3>
                </motion.a>

                {/* New GalleryGram link */}
                <motion.a
                    className='p-2 rounded-lg'
                    animate={{
                        scale: [1, 1.1, 1], // Scale between 1 and 1.1
                        boxShadow: [
                            "0px 0px 8px 2px rgba(0, 255, 255, 0.8)", // Blue glow at first
                            "0px 0px 8px 2px rgba(255, 0, 255, 0.8)", // Purple glow after
                            "0px 0px 8px 2px rgba(0, 255, 255, 0.8)"  // Return to blue
                        ],
                    }}
                    transition={{
                        duration: 1.5, // Duration for the animation
                        ease: "easeInOut",
                        repeat: 0, // Animation will play only once
                    }}
                    href="/gallery"
                    aria-label='GalleryGram'>
                    <div className='flex items-center gap-2'>
                    <h3 className='text-black'>Vinn's Gallery </h3><FaExternalLinkAlt />
                    </div>
                    
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
