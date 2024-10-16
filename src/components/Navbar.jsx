import React from 'react';
import logo from "../assets/vws-logo.webp"
import { BsTwitter } from 'react-icons/bs';
import { CgTwitter } from 'react-icons/cg';
import { FaGithub, FaLinkedin, FaMailBulk, FaMailchimp } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { motion } from 'framer-motion';
export const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="/" aria-label='Home'>
                    <img className='mx-2 rounded backdrop-blur' width={50} height={50} src={logo} alt="Logo"></img></a>
            </div>
            <div className='flex items-center justify-end gap-7 text-4xl'>
                <motion.a
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    title='Linkedin'
                    href="https://www.linkedin.com/in/vwslinked/" aria-label='Home' ><FaLinkedin></FaLinkedin></motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} 
                    title='Github'
                    href="https://github.com/vignesh-codes" aria-label='Home' ><FaGithub></FaGithub></motion.a>
                <motion.a
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} 
                    title='mailTo:vsunder@uwo.ca'
                    href="mailto:vsunder2@uwo.ca" aria-label='Home' ><BiMailSend></BiMailSend></motion.a>
            </div>

        </nav>
    );
};
