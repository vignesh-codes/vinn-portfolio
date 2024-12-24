import React, {useEffect} from 'react'
import profilePic from "../assets/vws-dp.png"
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa';
import nottinghamUniversityLogo from "../assets/nottingham-university-logo.png"
import westernUniversityLogo from "../assets/western-university-logo.png"

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3,
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const leftSideVariants = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 2 } }
};

// Variants for right-side animation (description, technologies)
const rightSideVariants = {
    initial: { opacity: 0, x: 200 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 2 } }
};

export const Hero = () => {
    useEffect(() => {
        // If there's a hash in the URL (like #projects), scroll to the element
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    return (
        
        <div className='pb-4 lg:mb-25'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2 flex justify-center lg:p-8'>
                    <motion.img
                        src={profilePic}
                        width={650}
                        height={650}
                        alt="profile"
                        className='rounded-3xl border-y-fuchsia-50 border'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className='w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-start lg:items-start mt-10'
                >
                    <motion.h2
                        variants={childVariants}
                        className='pb-2 text-4xl tracking-tighter lg:text-6xl'
                    >
                        Hi! I'm Vinn 👋
                    </motion.h2>

                    <motion.span
                        variants={childVariants}
                        className='bg-gradient-to-r from-pink-800 to-purple-950 bg-clip-text text-xl lg:text-3xl tracking-tight text-transparent'
                    >
                        Software Engineer - 4 years of experience

                    </motion.span>

                    <motion.p
                        variants={childVariants}
                        className='my-8 max-w text-xl leading-relaxed tracking-tighter'
                    >
                        <HERO_CONTENT />
                    </motion.p>

                    <motion.a
                        variants={childVariants}
                        whileHover={{
                            scale: 1.1, // Slight scale increase on hover
                            boxShadow: [
                                "0px 0px 8px 2px rgba(0, 255, 255, 0.8)", // Blue glow at first
                                "0px 0px 8px 2px rgba(255, 0, 255, 0.8)", // Purple glow after
                                "0px 0px 8px 2px rgba(0, 255, 255, 0.8)"  // Return to blue
                            ],
                            transition: {
                                duration: 0.4, // Adjust for smoother transition
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                        href="https://drive.google.com/file/d/1n6o8nKNxGGF4ou7wmgnBmc7SMv96AS3k/view?usp=sharing"
                        target='_blank'
                        rel="noopener noreferrer"
                        download
                        className='bg-black text-white rounded-full p-4 text-l mb-9'
                    >
                        View Resume
                    </motion.a>

                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1.5 }}
                        className='flex text-3xl font-bold pt-2 mb-5'>
                        My Academic Journey
                    </motion.h2>
                    
                    {/* Year coming from the left */}
                    <motion.p className='mb-3 text-sm w-full lg:w-auto' variants={leftSideVariants}>
                        2024 - 2025
                    </motion.p>

                    {/* Title and company also coming from the left */}
                    <a href="https://www.uwo.ca/" target="_blank" rel="noopener noreferrer" className="w-full">
                        <motion.div 
                            className='flex items-center mb-8 w-full cursor-pointer'
                            variants={leftSideVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={westernUniversityLogo}
                                alt={`westernUniversity logo`}
                                className='w-10 h-10 mr-4 object-contain'
                            />
                            <h3 className='font-semibold'>
                                {"Master of Engineering"} - {"Software Engineering"}
                            </h3>
                        </motion.div>
                    </a>

                    {/* Year coming from the left */}
                    <motion.p className='mb-3 text-sm w-full lg:w-auto' variants={leftSideVariants}>
                        2017 - 2020
                    </motion.p>

                    {/* Title and company also coming from the left */}
                    <a href="https://www.nottingham.edu.cn/en/science-engineering/departments-schools/eee/home.aspx" target="_blank" rel="noopener noreferrer" className="w-full">
                        <motion.div 
                            className='flex items-center mb-2 w-full cursor-pointer'
                            variants={leftSideVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={nottinghamUniversityLogo}
                                alt={`nottinghamUniversity logo`}
                                className='w-10 h-10 mr-4 object-contain'
                            />
                            <h3 className='font-semibold'>
                                {"Bachelor of Engineering Honours"} - {"Mechatronic Engineering"}
                            </h3>
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};