/**
 * @copyright 2025 ekeneakabogu
 */

/**
 * Node Modules 
 */
import { motion } from "motion/react";

/**
 * Custom Modules
 */
import { fadeUp, staggerContainer } from "@/lib/animation";

/**
 * Components
 */
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export const About = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id='about'
        >
            <SectionHeader 
                subtitle="About Me" 
                title='Get to Know Me'
            />
            <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300"
            >
                I am a passionate Frontend Developer and UI/UX Designer with a strong foundation in building responsive, 
                user-focused web applications. Over the years, I’ve honed my skills in creating intuitive digital experiences using 
                modern technologies such as React, JavaScript, and Tailwind CSS. I enjoy translating complex ideas into clean, functional 
                and visually appealing interfaces that enhance user engagement and drive results. My experience spans academic projects, professional internships 
                and freelance work, where I have collaborated with designers, developers, and product teams to bring creative ideas to life.
            </motion.p>

            <motion.p
                variants={fadeUp}
                className="mt-4 text-neutral-300"
            >
                Beyond frontend development and design, I have a growing interest in cybersecurity and data science, exploring ways to make digital experiences 
                not only seamless but also secure and data-driven. I am fascinated by analyzing datasets to uncover patterns, building predictive models, and implementing 
                security best practices to safeguard digital platforms. Combining my design, development, and analytical skills allows me to create digital solutions that 
                are not only aesthetically pleasing but also reliable, efficient, and secure. I am always eager to learn, innovate, and contribute to projects that challenge 
                my skills and push the boundaries of technology.
            </motion.p>

            <motion.div
                variants={fadeUp}
                transition={{delay: 0.2}}
            >
                <Button className="mt-5">
                <a href='#contact'>Contact Me</a>   
                </Button>
            </motion.div>
        </motion.section>
    )
};