import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

export const Experience = () => {

    // Variants for left-side animation (year, title)
    const leftSideVariants = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0, transition: { duration: 2 } }
    };
    
    // Variants for right-side animation (description, technologies)
    const rightSideVariants = {
        initial: { opacity: 0, x: 200 },
        whileInView: { opacity: 1, x: 0, transition: { duration: 2 } }
    };

    return (
        <div id="experience" className='justify-center flex flex-col items-center'>
            <motion.h2 
                className='my-7 flex justify-center text-3xl font-bold p-2'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                Professional Experience
            </motion.h2>

            {EXPERIENCES.map((exp, index) => (
                <motion.div 
                    key={index} 
                    className='flex flex-wrap lg:flex-col lg:items-start lg:justify-start lg:w-3/4 mb-10'
                    initial="initial"
                    whileInView="whileInView"
                    variants={leftSideVariants} // Apply the correct variant
                    viewport={{ once: true }} // Animation triggers only once
                >
                    {/* Year coming from the left */}
                    <motion.p className='mb-2 text-sm w-full lg:w-auto' variants={leftSideVariants}>
                        {exp.year}
                    </motion.p>

                    {/* Title and company also coming from the left */}
                    <a href={exp.companyURL} target="_blank" rel="noopener noreferrer" className="w-full">
                        <motion.div 
                            className='flex items-center mb-2 w-full cursor-pointer'
                            variants={leftSideVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={exp.logoURL}
                                alt={`${exp.company} logo`}
                                className='w-10 h-10 mr-4 object-contain'
                            />
                            <h3 className='font-semibold'>
                                {exp.role} - {" "}
                                <span className='text-sm text-stone-600'>{exp.company}</span>
                            </h3>
                        </motion.div>
                    </a>

                    {/* Description and tech stack coming from the right */}
                    <motion.p className='mb-4 lg:ml-0 lg:w-full w-full lg:text-left' variants={rightSideVariants}>
                        {exp.description}
                    </motion.p>

                    <div className='flex flex-wrap'>
                        {exp.technologies.map((tech, index) => (
                            <motion.span
                                key={index}
                                className='mb-2 p-2 font-medium bg-black text-white rounded mr-2 text-sm'
                                variants={rightSideVariants}
                                whileHover={{ scale: 1.1, backgroundColor: '#111', rotate: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
