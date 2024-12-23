import React from 'react'
import { PROJECTS } from '../constants'

import { motion } from 'framer-motion';

export const Projects = () => {

    return (
        <div id="projects">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-7 flex justify-center text-3xl font-bold p-2'>
                Check out my latest work
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className='my-10 flex justify-center flex-wrap'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <a href={project.link} target='_blank' rel='noopener noreferrer' className='flex flex-wrap'>
                        <div>
                            <motion.img
                                src={project.image}
                                width={250}
                                height={250}
                                alt={project.title}
                                className='border-black rounded-2xl border-solid mb-6'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <div className='p-5 w-full max-w-xl lg:w-3/4'>
                            <motion.h3
                                className='mb-2 font-semibold text-2xl'
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.title}
                            </motion.h3>
                            <p className='mb-4'>{project.description}</p>
                            <div className='flex gap-2 flex-wrap'>
                                {project.technologies.map((tech, index) => (
                                    <motion.span key={index} className='mb-2 p-2 font-medium bg-black text-white rounded mr-2 text-sm'
                                        whileHover={{ scale: 1.1, backgroundColor: '#111', rotate: -5 }}
                                        transition={{ duration: 0.2 }}>
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};