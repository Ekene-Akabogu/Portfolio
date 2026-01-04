/**
 * @copyright 2025 ekeneakabogu
*/

/**
 * Node Modules
 */
import { motion } from 'motion/react'

/**
 * Custom Modules
 */
import { fadeUp, staggerContainer } from '@/lib/animation'

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { ExpCard } from '@/components/ExpCard';
import { ToolsCard } from '@/components/ToolsCard';

/**
 * Constants
 */
import { education, experience, tools } from '@/constants';


export const Resume = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id='resume'
        >
            <SectionHeader 
                subtitle="Resume" 
                title='Education & Experience'
            />
            <motion.p
                variants={fadeUp}
                className='mt-4 text-neutral-300'
            >
                I am a Computer Science undergraduate with a strong foundation 
                in software development, frontend engineering, and UI/UX design. 
                I have hands-on experience building responsive, user-focused web applications 
                using modern technologies such as React, JavaScript, and Tailwind CSS. 
                Through academic training, professional internships, and freelance work, 
                I have developed the ability to translate ideas into intuitive, scalable, and production-ready 
                digital solutions while collaborating effectively with designers and backend teams.
            </motion.p>

            <div className='grid gap-x-10 my-16 md:grid-cols-2'>
                <motion.div
                    variants={fadeUp}
                >
                    <h2 className='text-3xl font-semibold mb-8'>Experience</h2>

                    <div className='space-y-8 border-l border-border pl-6'>
                        {experience.map((item, i) => (
                            <ExpCard 
                                key={i}
                                item={item} 
                            />
                        ))}
                    </div>
                </motion.div>


                <motion.div
                    variants={fadeUp}
                    className='mb-16 md:mb-0'
                >
                    <h2 className='text-3xl font-semibold mb-8'>Education</h2>

                    <div className='space-y-8 border-l border-neutral-700 pl-6'>
                        {education.map((item, i) => (
                            <ExpCard 
                                key={i}
                                item={item} 
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="my-16">
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl font-semibold mb-8 capitalize "
                >
                    Tools & Software
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer(0.2 )}
                    className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5"
                >
                    {tools.map((tool, i) => (
                        <ToolsCard
                            key={i}
                            tool={tool}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
};