import React from 'react'
import profilePic from "../assets/vws-dp.png"
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa';

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

export const Hero = () => {
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
                        Hi! I'm Vinn
                    </motion.h2>

                    <motion.span 
                        variants={childVariants} 
                        className='bg-gradient-to-r from-pink-800 to-purple-950 bg-clip-text text-3xl tracking-tight text-transparent'
                    >
                        Software Engineer - 4 years of experience

                    </motion.span>

                    <motion.p 
                        variants={childVariants} 
                        className='my-8 max-w-lg text-xl leading-relaxed tracking-tighter'
                    >
                        {HERO_CONTENT}
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
                        className='bg-black text-white rounded-full p-4 text-1xl mb-10'
                    >
                        View Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};