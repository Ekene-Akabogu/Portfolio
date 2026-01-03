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
import { Button } from "@/components/ui/button";

/**
 * Assets
 */
//import { FlameIcon } from "lucide-react";

export const Hero = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0)}
            className="pt-20 flex flex-col items-center text-center"
            id="hero"
        >



            {/* Greeting */}
            <motion.p 
                variants={fadeUp} 
                className="text-3xl lg:text-3xl md:text-xl text-neutral-300 mt-6"
            >
                Hi there
            </motion.p>

            {/* Name */}
            <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-2"
            >
                I'm <span className="text-primary">Ekenedirichukwu Akabogu</span>
            </motion.h1>

            {/* Title in liquid glass box */}
            <motion.div
                variants={fadeUp}
                className="mt-4 inline-flex items-center justify-center gap-2 
                           px-6 py-3 rounded-2xl bg-white/10 border border-white/25 
                           backdrop-blur-md shadow-lg text-white font-semibold"
            >
                UI/UX Designer & Frontend Developer
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
                variants={fadeUp}
                className="mt-6 flex gap-3 justify-center"
            >
                <Button asChild>
                    <a href='#projects'>My Projects</a>
                </Button>

                <Button variant='outline' asChild>
                    <a 
                        href="/resume.pdf"
                        download
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        Download Resume    
                    </a>
                </Button>
            </motion.div>
        </motion.section>
    );
};
