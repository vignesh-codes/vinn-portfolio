import React from 'react';
import { motion } from 'framer-motion';

import { GiNextButton } from 'react-icons/gi';
import { FaGolang, FaHtml5, FaReact } from 'react-icons/fa6';
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaAws, FaNode, FaPython } from 'react-icons/fa';
import { SiAlgolia, SiAmazondynamodb, SiApachekafka, SiElasticsearch, SiGraphql, SiJavascript, SiKubernetes, SiMqtt, SiOpentelemetry, SiPagerduty, SiPostgresql, SiPrometheus, SiRedis, SiTerraform, SiTypescript } from 'react-icons/si';
import { DiDocker, DiGoogleCloudPlatform, DiJavascript, DiMongodb, DiRedis } from 'react-icons/di';
import { TiHtml5 } from 'react-icons/ti';
import { TbBrandFramerMotion, TbBrandNextjs } from 'react-icons/tb';
import { RxVercelLogo } from 'react-icons/rx';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [3, -3],
        x: [2, -2],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
});



// Variants for left-side animation (year, title)
const leftSideVariants = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 2 } }
};

// Variants for right-side animation (description, technologies)
const rightSideVariants = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 2 } }
};

const bottomSideVariants = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 2 } }
};

export const Technologies = () => {
    return (

        <div id="skills" className='flex flex-wrap gap-4 justify-center'>
            {/* Tech Stack Header */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className='my-7 flex w-full flex-row justify-center text-3xl font-bold p-2'>
                My Tech Stack
            </motion.h2>
            {/* Web Technologies */}
            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={leftSideVariants}
                viewport={{ once: true }}
                className='web-tech p-5 rounded-2xl shadow w-full lg:w-1/3'>
                <h3 className='text-xl mb-4 text-center'>Web Technologies</h3>
                <div className='flex flex-wrap gap-5 justify-center text-5xl lg:ml-15 lg:mr-15'>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        title="HTML">
                        <TiHtml5 className='text-orange-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.7)}
                        title="Tailwind CSS">
                        <RiTailwindCssFill className='text-cyan-400' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.8)}
                        title="React">
                        <FaReact className='text-cyan-400' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.1)}
                        title="Next.js">
                        <TbBrandNextjs className='text-black' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.4)}
                        title="Node.js">
                        <FaNode className='text-green-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.0)}
                        title="TypeScript">
                        <SiTypescript className='text-blue-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.3)}
                        title="JavaScript">
                        <SiJavascript className='text-yellow-400' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.8)}
                        title="Vercel">
                        <RxVercelLogo className='text-black' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.8)}
                        title="Framer Motion">
                        <TbBrandFramerMotion className='text-black' />
                    </motion.div>

                </div>
            </motion.div>

            {/* Backend Technologies */}
            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={rightSideVariants}
                viewport={{ once: true }}
                className='backend-tech p-5 rounded-2xl shadow w-full lg:w-1/3'>
                <h3 className='text-xl mb-4 text-center'>Backend Technologies</h3>
                <div className='flex flex-wrap gap-5 justify-center text-5xl lg:ml-15 lg:mr-15'>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        title="Golang">
                        <FaGolang className='text-teal-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.2)}
                        title="Python">
                        <FaPython className='text-black' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.8)}
                        title="Redis">
                        <DiRedis className='text-red-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.6)}
                        title="DynamoDB">
                        <SiAmazondynamodb className='text-blue-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.1)}
                        title="PostgreSQL">
                        <SiPostgresql className='text-blue-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.0)}
                        title="MongoDB">
                        <DiMongodb className='text-green-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.9)}
                        title="GraphQL">
                        <SiGraphql className='text-pink-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.3)}
                        title="MQTT">
                        <SiMqtt className='text-blue-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.1)}
                        title="Kafka">
                        <SiApachekafka className='text-black' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.8)}
                        title="Firestore">
                        <RiFirebaseFill className='text-orange-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        title="Pagerduty">
                        <SiPagerduty className='text-green-600' />
                    </motion.div>
                </div>
            </motion.div>

            {/* Cloud & Infrastructure */}
            <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={bottomSideVariants}
                viewport={{ once: true }}
                className='cloud-infra p-5 rounded-2xl shadow w-full lg:w-1/3'>
                <h3 className='text-xl mb-4 text-center'>Cloud & Infrastructure</h3>
                <div className='flex flex-wrap gap-5 justify-center text-5xl lg:ml-15 lg:mr-15'>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        title="Kubernetes">
                        <SiKubernetes className='text-blue-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.9)}
                        title="Docker">
                        <DiDocker className='text-blue-400' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.2)}
                        title="AWS">
                        <FaAws className='text-orange-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.1)}
                        title="GCP">
                        <DiGoogleCloudPlatform className='text-blue-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.3)}
                        title="Prometheus">
                        <SiPrometheus className='text-red-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.8)}
                        title="OpenTelemetry">
                        <SiOpentelemetry className='text-purple-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.4)}
                        title="ELK Stack">
                        <SiElasticsearch className='text-orange-500' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.6)}
                        title="Algolia">
                        <SiAlgolia className='text-blue-600' />
                    </motion.div>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.7)}
                        title="Terraform">
                        <SiTerraform className='text-indigo-600' />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};